const asyncHandler = require('../middleware/async');
const advancedResults = (cb, find, model, populate) => asyncHandler(async (req, res, next) => {
  /**
   * Initialize query on which different steps will be added
   */
  let query;
  const reqQuery = {...req.query};
  console.log(reqQuery)

  /**
   * Clean reqQuery
   */
  // Fields to exclude
  const excludeFields = ['select', 'sort', 'page', 'limit'];
  // Loop over excludeFields and delete them from reqQuery
  excludeFields.forEach(param => delete reqQuery[param]);

  /**
   * Setup mongo operators
   */
  // Create query string in order to define mongo operators
  let reqQueryStr = JSON.stringify(reqQuery);

  // Create operators
  
  // const regex = /[^&?](\b(gt|gte|lt|lte|size)\b).?=([0-9]+)/g;
  // const regex = /(?<key>[-_a-z]+)(\[(?<operator>.+?)\]){0,}.?=(?<value>[0-9a-zA-Z]+)/g;
  // const regex = /\"[\$]?(?<key>[-_a-z]+)\"\:\"(?<value>(?<int>[0-9]+)|(?<str>[-_a-z0-9]+))\"/g

  // Start operators with $
  const regexOperators = /\b(gt|gte|lt|lte|in|size|not)\b/g;
  reqQueryStr = reqQueryStr.replace(regexOperators, match => `$${match}`);
  // Parse to Int
  const regexInt = /\"(?<value>[0-9]+)\"/g;
  reqQueryStr = reqQueryStr.replace(regexInt, match => {
    return match.split('').slice(1,-1).join('');
  });

  // Parse again to object
  reqQueryStr = JSON.parse(reqQueryStr);

  /**
   * 1. Query without excluded fields
   */
  switch (find) {
    case 'byID':
      query = model.findById(reqQueryStr);
      break;
    case 'one':
      query = model.findOne(reqQueryStr);
      break;
    default: // = all
      query = model.find(reqQueryStr);
  }
  /**
   * 2. Query with select
   */
  if (req.query.select) {
    const selectFields = req.query.select.split(',').join(' ');
    query = query.select(selectFields);
  }

  /**
   * 3. Query with sort
   */
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort(sortBy);
  } else {
    // By default sort by timestamp
    query = query.sort('-createdAt');
  }

  /**
   * 4. Pagination
   */
  const page = parseInt(req.query.page, 10) || 1; // Default page 1
  const limit = parseInt(req.query.limit, 10) || 10; // Default limit 10 items
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await model.countDocuments(reqQueryStr);

  query = query.skip(startIndex).limit(limit);

  /**
   * 5. Populate
   */
  if (populate) {
    query = query.populate(populate);
  }

  /**
   * END. Execute query and add pagination
   */
  const results = await query;

  // If expected a single result, skip pagination
  if (find !== 'all') {
    cb(results);
    return;
  }

  const pagination = {};

  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit
    };
  }

  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit
    };
  }

  const data = {
    count: results.length,
    pagination,
    data: results
  }

  cb(data);

});

module.exports = advancedResults;

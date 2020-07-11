/**
 * just testing...
 */

const express = require('express');
const router = express.Router();
const path = require('path');

// AMAZON
const AWS = require('aws-sdk');
const fs = require('fs');

//configuring the AWS environment
AWS.config.update({
  accessKeyId: "AKIAIQR42U32MZ6BM5LA",
  secretAccessKey: "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"
});

const s3 = new AWS.S3();


const encode = (data) => {
  let buf = Buffer.from(data);
  let base64 = buf.toString('base64');
  return base64;
};

router.get('/image', async (req, res, next) => {

  try {

    // const data = await s3.getObject(
    //   {
    //     Bucket: 'social-media003',
    //     Key: 'avatars/1593771232408_background.png'
    //   }
    // ).promise();

    // console.log(data)

    let image="<img src='" + 'https://social-media003.s3.eu-west-3.amazonaws.com/avatars/1593771232408_background.png' + "'" + "/>";
    let startHTML="<html><body>";
    let endHTML="</body></html>";
    let html=startHTML + image + endHTML;
    res.send(html)

  } catch (e) {
    res.send(e)
  }
});









// const filePath = path.join(__dirname, '..', 'public', 'background.png');

// //configuring parameters
// const params = {
//   Bucket: 'social-media003',
//   Body : fs.createReadStream(filePath),
//   Key : "avatars/"+Date.now()+"_"+path.basename(filePath)
// };

// s3.upload(params, function (err, data) {
//   //handle error
//   if (err) {
//     console.log("Error AWS", err);
//   }

//   //success
//   if (data) {
//     console.log("AWS Uploaded in:", data.Location);
//   }
// });


// router.post('/upload', function(req, res) {
//   const files = req.files;
//   if (!files || Object.keys(files).length === 0) {
//     return res.status(400).send('No files were uploaded.');
//   }

//   for (item in files) {
//     const file = files[item];
//     const id = new Date().valueOf().toString(36) + Math.random().toString(36).substr(2);
//     const fileNameParts = file.name.split('.');
//     const fileName = `${fileNameParts[0]}_${id}.${fileNameParts[1]}`;

//     file.mv(path.join(__dirname, '..', 'public', fileName), function(err) {
//       if (err) return res.status(500).send(err);
//       console.log(`${file.name} uploaded wih id: "${fileName}"`);
//     });
//   }

//   console.log('end', req.body);

//   res.send('finished');
// });

module.exports = router;

const presetsList = {
  users: [
    {
      endpoint: '/users',
      public: true
    },
    {
      fieldname: 'Username',
      query: 'username',
      type: 'string'
    },
    {
      fieldname: 'Email',
      query: 'email',
      type: 'string'
    },
    {
      fieldname: 'Description',
      query: 'description',
      type: 'string'
    },
    {
      fieldname: 'Role',
      query: 'role',
      type: 'string'
    }
  ],
  posts: [
    {
      endpoint: '/posts',
      public: true
    },
    {
      fieldname: 'Text',
      query: 'text',
      type: 'string'
    }
  ]
}

export { presetsList }
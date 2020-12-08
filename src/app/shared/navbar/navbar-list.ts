export const navbarList = (token) => {
  return [
    {
      name: ['Home'],
      path: '/home',
      protected: false
    },
    {
      name: ['Explore'],
      path: '/explore',
      protected: false
    },
    {
      name: ['Notifications'],
      path: '/notifications',
      children: [
        { name: ['All'], path: '/all' },
        { name: ['Only unread'], path: '/unread' }
      ],
      selChildIdx: 1,
      protected: true,
      checkAvailability: token.user$,
      expectingRes: true
    },
    {
      name: ['Profile'],
      path: '/u/me',
      protected: true,
      checkAvailability: token.user$,
      expectingRes: true
    },
    {
      name: ['Auth'],
      path: '/auth',
      children: [
        { name: ['Login'], path: '/login' },
        { name: ['Register'], path: '/register' }
      ],
      selChildIdx: 0,
      protected: true,
      checkAvailability: token.user$,
      expectingRes: false
    },
    {
      name: ['Accounts'],
      path: '/auth/accounts',
      protected: true,
      checkAvailability: token.user$,
      expectingRes: true
    }
  ]
}
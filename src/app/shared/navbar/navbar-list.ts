export const navbarList = (token) => {
  return [
    {
      name: ['Home'],
      path: '/home',
      protected: false,
      icon: 'home'
    },
    {
      name: ['Explore'],
      path: '/explore',
      protected: false,
      icon: 'language'
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
      expectingRes: true,
      icon: 'notifications'
    },
    {
      name: ['Profile'],
      path: `/u/${token.getUserId()}`,
      activation: [`/u/${token.getUserData().username}`],
      children: [
        { name: ['Posts'], path: '/', icon: 'text_snippet' },
        { name: ['Replies'], path: '/replies', icon: 'reply' },
        { name: ['Media'], path: '/media', icon: 'movie' }
      ],
      selChildIdx: 0,
      protected: true,
      checkAvailability: token.user$,
      expectingRes: true,
      icon: 'account_circle'
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
      expectingRes: false,
      icon: 'account_circle'
    },
    // {
    //   name: ['Accounts'],
    //   path: '/auth/accounts',
    //   protected: true,
    //   checkAvailability: token.user$,
    //   expectingRes: true,
    //   icon: 'group'
    // }
  ]
}
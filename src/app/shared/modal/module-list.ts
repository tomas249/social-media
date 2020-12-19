export const moduleList = {
  AuthModule: {
    import: async () => (await import('src/app/modules/auth/auth.module')).AuthModule
  },
  PostsModule: {
    import: async () => (await import('src/app/modules/posts/posts.module')).PostsModule
  },
  ProfileModule: {
    import: async () => (await import('src/app/modules/profile/profile.module')).ProfileModule
  },
  // DashboardModule: {
  //   import: async () => (await import('src/app/modules/dashboard/dashboard.module')).DashboardModule
  // }
};
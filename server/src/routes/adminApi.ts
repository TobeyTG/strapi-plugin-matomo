const adminApiRoutes = {
  type: 'admin',
  routes: [
    {
      method: 'GET',
      path: '/config',
      handler: 'matomo.config',
      config: {
        policies: ['admin::isAuthenticatedAdmin'],
      },
    },
  ],
};

export default adminApiRoutes;

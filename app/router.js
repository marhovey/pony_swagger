'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  router.post('/api/login', controller.user.login);
  router.get('/api/projects', jwt, controller.project.getList)
};

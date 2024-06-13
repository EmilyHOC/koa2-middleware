module.exports = (router, middleware, controller) => {
  router.post('/identity', controller.login.identityG);
  router.get('/user', controller.login.userInfo);
};

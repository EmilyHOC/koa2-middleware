module.exports = (router, middleswares, controller) => {
  router.get('/department/list', middleswares.formatBody, controller.department.list);
};

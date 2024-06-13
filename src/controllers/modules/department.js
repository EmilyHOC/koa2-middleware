module.exports = {
  list: async (ctx, next) => {
    const data = ctx.request.body;
    ctx.body = [
      {
        name: '计算机中心',
        id: '001',
      },
      {
        name: '大数据中心',
        id: '002',
      },
      {
        name: '总裁办',
        id: '003',
      },
      {
        name: '人力部',
        id: '004',
      },
      {
        name: '电商管理部',
        id: '005',
      },
    ];
  }
}
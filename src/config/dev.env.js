module.exports = {
  NODE_ENV: 'development', // 环境名称
  HOST: 'localhost', // 应用服务地址
  PORT: 8701, // 应用服务端口号
  mongodb_url: '', // 数据库地址
  redis_url: 'redis://:12345@127.0.0.1', // redis地址
  redis_port: '6379', // redis端口号
  api_url: 'http://localhost:8311', // 中间层对接后端接口的url
};

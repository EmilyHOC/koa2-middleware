import Koa2 from 'koa';
import KoaCors from '@koa/cors'
import KoaRouter from '@koa/router'
import bodyParser from 'koa-bodyparser';
import routers from './routers';
const app = new Koa2()
const router = new KoaRouter()
const logger = require('./logs/logs');


// 日志中间件
app.use(async (ctx, next) => {
  const start = new Date();
  let ms;
  try {
    await next();
    ms = new Date() - start;
    logger.accessLog(ctx, ms);
  } catch (error) {
    ms = new Date() - start;
    logger.errorLog(ctx, error, ms);
  }
});

// middlewares
app.use(KoaCors())

//body解析中间件
app.use(bodyParser())

//路由中间间，routers 是导出的函数
app.use(router.routes()).use(router.allowedMethods());

routers(router)




// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app;

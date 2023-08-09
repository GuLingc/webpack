//koa代码搭建api服务器
//安装koa得指令：npm install koa @koa/router
const Koa = require("koa");
const KoaRouter = require("@koa/router");

const app = new Koa();

const userRouter = new KoaRouter({ prefix: "/users" });
userRouter.get("/list", (ctx, next) => {
    console.log(ctx.headers);
  ctx.body = [
    { name: "why", age: 18, score: 99 },
    { name: "whyy", age: 28, score: 100 },
    { name: "whyyy", age: 38, score: 79 },
  ];
});
app.use(userRouter.routes())

app.listen(9000, () => {
  console.log("api服务器启动成功");
});

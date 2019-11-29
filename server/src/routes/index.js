const Router = require("koa-router");
const koaBody = require("./koaBody");

const router = new Router();

router.post("/request", koaBody, async (ctx) => {
  const {income, RequestedAmount} = ctx.request.body;

  if (RequestedAmount <= income / 2) {
    ctx.body = {
      status: "success"
    };
  } else {
  ctx.body = {
      status: "error"
    };
  }
});

module.exports = router;

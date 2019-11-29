const Koa = require("koa");
const serve = require("koa-static");
const cors = require("koa-cors");

const app = new Koa();
app.use(cors());
app.use(serve("../assets"));

const router = require("./routes");
const PORT = process.env.PORT || 1337;

app.use(router.routes());

const server = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;

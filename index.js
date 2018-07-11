const Koa = require("koa")
const Router = require("koa-router")
const createBlockie = require("./blockie")

const app = new Koa()
const router = new Router()
const PORT = 1337

router.get("/", async ctx => {
  ctx.body = {
    status: "success",
    message: "hello, world!",
  }
})

router.get("/:address", async ctx => {
  ctx.type = 'image/png'
  console.log(ctx.params.address)
  ctx.body = await createBlockie(ctx.params.address.toLowerCase(), 64)
})

app.use(router.routes())

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})

module.exports = server

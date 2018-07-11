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

router.get("/:address.:format*", async ctx => {
  const format = ctx.params.format || "png"
  const scale = parseInt(ctx.query.scale) || 1

  ctx.type = "image/png"
  ctx.body = await createBlockie(ctx.params.address.toLowerCase(), scale)
})

app.use(router.routes())

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})

module.exports = server

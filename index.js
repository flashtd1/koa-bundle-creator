const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const koaBody = require('koa-body')
const handles = require('./handles/index.js')
const serve = require('koa-static')

 
app.use(serve('output'))

router.post('/create/bundle', koaBody(),
  async (ctx) => {
    console.log(ctx.request.body)
    // => POST body
    let {currentPath, filename} = (await handles.input(JSON.stringify(ctx.request.body)))
    ctx.body = `下载地址：/${currentPath}/${filename}`
  }
)
 
app.use(router.routes())
 
app.listen(3000)
console.log('服务开启成功：http://localhost:3000')
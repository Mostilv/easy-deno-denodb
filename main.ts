import { Application } from "./deps.ts";

import router from './router.ts'
import dbLink from './db.ts' // 数据库


const port = 5000

const app = new Application();


app.use(router.routes())
app.use(router.allowedMethods())

dbLink()


console.log(`http://127.0.0.1:${port}`)
await app.listen({ port });

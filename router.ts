import { Router } from './deps.ts'
import {
    getArticles,
    getArticle,
    addArticle,
    updateArticle,
    deleteArticle
} from './controllers/articles.ts'
import {
    get_all_users,
    login_user,
    register_user,
    validateJWT,
} from "./controllers/user.ts";

const router = new Router()
router.prefix('/api')

// 用户登录
router
    .get("/users", validateJWT, get_all_users) // this is a protected route, you need a valid JWT token
    .post("/register", register_user)
    .post("/login", login_user);

// 文章接口
router.get('/articles', getArticles)
    .get('/article/:id', getArticle)
    .post('/article', addArticle)
    .put('/article/:id', updateArticle)
    .delete('/article/:id', deleteArticle)

export default router
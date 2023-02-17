import { Database, MongoDBConnector } from './deps.ts';
import { Articles } from './model/articles.ts'; // 模型
import { User } from './model/user.ts'; // 模型


const connector = new MongoDBConnector({
    uri: 'mongodb://127.0.0.1:27017',
    database: 'blog-test',
});
const db = new Database(connector);

const dbLink = async function () {
    console.log('into dbLink')
    db.link([Articles,User]) // 链接数据库
    await db.sync() // 同步数据库
}

export default dbLink
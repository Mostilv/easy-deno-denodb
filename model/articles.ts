import { Model, DataTypes } from '../deps.ts';

export class Articles extends Model {
    static table = 'articles'; // 表名

    static timestamps = true; // 时间戳 updated_at将自动被修改。

    static fields = {
        id: {
            tyle: DataTypes.INTEGER,
            primaryKey: true,
        },
        name: { // or name: DataTypes.string(25),
            tyle: DataTypes.STRING,
            length: 25,
        },
        title: {
            tyle: DataTypes.STRING,
            length: 50,
        },
        content: DataTypes.STRING,
    };

    static defaults = {
        name: '2.50',
    };
}

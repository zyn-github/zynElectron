/**
 * Created by zyn on 2019/6/12.
 */


/**
 * @link https://molunerfinn.com/electron-vue-3/#%E5%88%9D%E5%A7%8B%E5%8C%96%E5%AE%8C%E6%95%B4%E4%BB%A3%E7%A0%81
 */
import Datastore from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import path from 'path'
import fs from 'fs-extra'
import LodashId from 'lodash-id'; // lowdb虽然无法很方便地创建一个自增的id字段，但是通过lodash-id这个插件可以很方便地为每个新增的数据自动加上一个唯一标识的id字段。
import { app, remote } from 'electron'

/// 处理在主进程 和 GUI进程中  app 调用方式区分
const APP = process.type === 'renderer' ? remote.app : app;

const STORE_PATH = APP.getPath('userData'); // 获取electron应用的用户目录
if (process.type !== 'renderer') {
    if (!fs.pathExistsSync(STORE_PATH)) { // 如果不存在路径
        fs.mkdirpSync(STORE_PATH); // 就创建
    }
}

/// 开发环境和初始化环境的路径问题
const adapter = new FileSync(path.join(STORE_PATH, '/data.json')); // 初始化lowdb读写的json文件名以及存储路径

const db = Datastore(adapter); // lowdb接管该文件

db._.mixin(LodashId); // 通过._mixin()引入
// 初始化默认数据集
if (!db.has('posts').value()) {
    db.defaults({ posts: [] })
        .write()
}

if (!db.has('user').value()) {
    db.defaults({ user: {} })
        .write()
}

export default db; // 暴露出去


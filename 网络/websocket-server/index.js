/*
 * @Author: ymq
 * @Date: 2021-12-28 11:14:52
 * @LastEditTime: 2021-12-28 13:46:38
 * @LastEditors: ymq
 * @Description: 
 */
const ws = require('nodejs-websocket')
const port = 5000

const server = ws.createServer((connection) => {
    console.log('有客户端连接到服务器');
})

server.listen(port, () => {
    console.log('start listening');
})
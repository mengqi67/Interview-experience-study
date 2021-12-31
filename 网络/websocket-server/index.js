/*
 * @Author: ymq
 * @Date: 2021-12-28 11:14:52
 * @LastEditTime: 2021-12-29 11:02:16
 * @LastEditors: ymq
 * @Description: 
 */
const ws = require('nodejs-websocket')
const port = 5000

let Allcount = 0
const server = ws.createServer((connection) => {
    console.log('有客户端连接到服务器');
    connection.userName = `用户${Allcount++}`
    broadcast(connection.userName + '进入聊天室')

    connection.on('text', (value) => {
        // connection.sendText('服务端接收到' + value)
        broadcast(`${connection.userName}:${value}`)
    })

    connection.on('close', () => {
        broadcast(connection.userName + '退出聊天室')
    })

    connection.on('error', () => {
        broadcast(connection.userName + '退出聊天室')
    })
})

function broadcast(msg) {
    server.connections.forEach((item, index) => {
        item.send(msg)
    })
}

server.listen(port, () => {
    console.log('start listening');
})
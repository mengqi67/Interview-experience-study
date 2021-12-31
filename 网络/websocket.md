<!--
 * @Author: ymq
 * @Date: 2021-12-27 18:51:08
 * @LastEditTime: 2021-12-28 13:48:10
 * @LastEditors: ymq
 * @Description: 
-->

# websocket介绍

websocket是基于TCP的一种新的网络协议，它实现了浏览器与服务器全双工通信--允许服务器主动发送信息给客户端，它是一种持久协议

比如在聊天场景，没有websocket时，需要通过ajax轮询，客户端定时向服务器请求信息，浪费性能和资源

当使用websocket连接时，允许服务器给客户端发消息，一次连接，长时通讯，性能提升

/**
 * Created by zyn on 2019/6/11.
 */
const chalk = require('chalk');
/**
 * 其中ipcMain只有监听来自ipcRenderer的某个事件后才能返回给ipcRenderer值。而ipcRenderer既可以收，也可以发。
 * 那么问题就来了，如何让ipcMain主动发送消息呢？或者说让main进程主动发送消息给ipcRenderer。
 * 首先要明确的是，ipcMain无法主动发消息给ipcRenderer。因为ipcMain只有.on()方法没有.send()的方法。
 */

// 监听GUI进程发来的消息
const ipcMain = require('electron').ipcMain;
module.exports = function () {
    ipcMain.on('asynchronous-message', function (event, arg) {
        console.log(chalk.yellow('主进程接收GUI进程数据异步(synchronous-message)：' + arg));   // prints "ping"
        // 因为这里作为异步的处理，需要重新发送一个事件，并在GUI进程中监听来完成
        event.sender.send('asynchronous-reply', 'pong'); // 回复异步消息
    });
    
    // 监听GUI进程传来的是否离线状态
    ipcMain.on('online-status-changed', function (event, arg) {
        console.log(chalk.yellow('主进程接收GUI进程当前客户端是否在线：' + arg));   // prints "ping"
        // 因为这里作为异步的处理，需要重新发送一个事件，并在GUI进程中监听来完成
        event.returnValue = 200;
    });
    
    ipcMain.on('synchronous-message', function (event, arg) {
        // 主进程接收 GUI进程 synchronous-message 发送的参数 ping
        console.log(chalk.yellow('主进程接收GUI进程数据同步(synchronous-message)：' + arg));  // prints "ping"
        // 将 pong 返回给GUI进程
        event.returnValue = 'pong'; // 回复同步消息
    });
    

};
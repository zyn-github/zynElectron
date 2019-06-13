'use strict'

/**
 * app 模块参考 https://www.w3cschool.cn/electronmanual/electronmanual-electronapp.html
 */

import { app, BrowserWindow, Tray, Menu, globalShortcut, powerMonitor,screen, ipcMain } from 'electron';
const path = require('path');
const chalk = require('chalk');

const TrayMenus = require('./setTrayMenu');
const IpcMainLists = require('./ipcMainLists');
const globalShortcutFn = require('./globalShortcut');
const powerMonitorFn = require('./powerMonitor');

import  '../renderer/store';

/**
 * @dec 该文件只要是对主线程的操作
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
    global.__static = path.join(__dirname, '/static').replace(/\\/g, '\\\\');
}

let mainWindow;
// Vue-router 路由默认使用 hash模式
const winURL = process.env.NODE_ENV === 'development'
    ? `http://localhost:9080`
    : `file://${__dirname}/index.html`;

function createWindow () {
    /**
     * Initial window options
     * @link https://www.w3cschool.cn/electronmanual/electronmanual-browser-window.html
     * @des 创建主窗口
     */
    mainWindow = new BrowserWindow({
        height: 563,
        useContentSize: true,
        width: 1000
    });
    mainWindow.once('ready-to-show', () => {});
    mainWindow.loadURL(winURL);
    
    /**
     * @dec 创建一个隐藏的窗口来检测是否离线状态
     */
    let onlineStatusWindow = new BrowserWindow({ width: 0, height: 0, show: false });
    onlineStatusWindow.loadURL('file://' + path.join(__dirname, '../', 'windows') + '/online-status.html');
    
    
    ipcMain.on('getPrinterList', (event) => {
        //主线程获取打印机列表
        const list = mainWindow.webContents.getPrinters();
        //通过webContents发送事件到渲染线程，同时将打印机列表也传过去
        mainWindow.webContents.send('getPrinterList', list);
    });
    
    // 于GUI进程通讯
    IpcMainLists();
    
    globalShortcutFn(mainWindow);
}


app.on('ready', () => {
    /**
     * 当 Electron 完成初始化时被触发。
     */
        // 添加系统托盘图标
    const menubarPic = process.platform === 'darwin' ? `${__static}/menubar.png` : `${__static}/menubar-nodarwin.png`
    let tray = new Tray(menubarPic); // 指定图片的路径
    /**
     * @type {Electron.Menu}
     * @dec 这里面就有normal、submenu、checkbox和radio四种类型。其中默认是normal。
     */
    const contextMenu = Menu.buildFromTemplate(TrayMenus);
    // 系统托盘右键点击
    tray.on('right-click', () => {
        mainWindow.hide(); // 隐藏小窗口
        tray.popUpContextMenu(contextMenu) // 打开菜单
    });
    tray.on('click', () => { // 系统托盘左键点击
        if (process.platform === 'darwin') { // 如果是macOS
            // 打开或关闭小窗口
        } else { // 如果是windows
            mainWindow.hide() // 隐藏小窗口
        }
    });
    tray.on('drag-enter', () => {
        tray.setImage(`${__static}/upload.png`);  // 鼠标移入系统托盘更换图片
    });
    tray.on('drag-end', () => {
        tray.setImage(`${__static}/menubar.png`); // 鼠标移出系统托盘更换图片
    });
    tray.setToolTip('This is my application.'); // 鼠标存放于图片展示的内容
    tray.setContextMenu(contextMenu); // 设置托盘操作项

    // 在mac os 系统 dock设置菜单
    if (process.platform === 'darwin') {
        var dockMenu = Menu.buildFromTemplate([
            { label: 'New Window', click: function () { console.log('New Window'); } },
            {
                label: 'New Window with Settings', submenu: [
                { label: 'Basic' },
                { label: 'Pro' }
            ]
            },
            { label: 'New Command...' }
        ]);
        app.dock.setMenu(dockMenu);
    }
    
    Menu.setApplicationMenu(contextMenu); // 设置工具栏操作项
    
    // 添加能源检测
    powerMonitorFn(powerMonitor);
    
    // 主进程中获取屏幕的信息
    
    var electronScreen = screen;
    var displays = electronScreen.getAllDisplays();
    console.log(displays, '获取屏幕信息');
    var externalDisplay = null;
    for (var i in displays) {
        if (displays[i].bounds.x != 0 || displays[i].bounds.y != 0) {
            externalDisplay = displays[i];
            break;
        }
    }
    
    if (externalDisplay) {
        mainWindow = new BrowserWindow({
            x: externalDisplay.bounds.x + 50,
            y: externalDisplay.bounds.y + 50
        });
    }
    
    createWindow();
});

app.on('activate', () => {
    /**
     * 当应用被激活时触发，常用于点击应用的 dock 图标的时候。
     */
    if (mainWindow === null) {
        createWindow();
    }
});

app.on('browser-window-blur', () => {
    /**
     * 当一个 BrowserWindow 失去焦点的时候触发。
     */
    console.log('当一个 BrowserWindow 失去焦点的时候触发。')
});

app.on('login', function (event, webContents, request, authInfo, callback) {
    event.preventDefault();
    callback('username', 'secret');
});

app.on('browser-window-focus', () => {
    /**
     * 当一个 BrowserWindow 获得焦点的时候触发。
     */
    console.log('当一个 BrowserWindow 获得焦点的时候触发。')
});

app.on('browser-window-created', () => {
    /**
     * 当一个 BrowserWindow 被创建的时候触发。
     */
    console.log('当一个 BrowserWindow 被创建的时候触发。')
});

app.on('will-finish-launching', () => {
    /**
     * 当应用程序完成基础的启动的时候被触发
     * 可以 open-file 和 open-url 设置监听器，并启动崩溃报告和自动更新。
     */
    console.log('will-finish-launching', '当应用程序完成基础的启动的时候被触发');
});

app.on('will-quit', () => {
    /**
     * 当所有的窗口已经被关闭，应用即将退出时被触发。 调用 event.preventDefault() 将会阻止终止应用程序的默认行为。
     */
    globalShortcut.unregisterAll();
    console.log('will-quit', '当所有的窗口已经被关闭,应用即将退出时被触发');
});

app.on('window-all-closed', () => {
    /**
     * 当所有的窗口都被关闭时触发。
     *  如果用户按下了 Cmd + Q， 或者开发者调用了 app.quit() ，Electron 将会先尝试关闭所有的窗口再触发 will-quit 事件， 在这种情况下 window-all-closed 不会被触发。
     */
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('before-quit', () => {
    /**
     * 在应用程序开始关闭它的窗口的时候被触发。 调用 event.preventDefault() 将会阻止终止应用程序的默认行为。
     */
    console.log('before-quit', '在应用程序开始关闭它的窗口的时候被触发');
});

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
 import { autoUpdater } from 'electron-updater'
 
 autoUpdater.on('update-downloaded', () => {
 autoUpdater.quitAndInstall()
 })
 
 app.on('ready', () => {
 if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
 })
 */

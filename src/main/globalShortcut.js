/**
 * Created by zyn on 2019/6/11.
 */
const { globalShortcut } = require('electron')
module.exports = function () {
    console.log(globalShortcut.isRegistered('CommandOrControl+K'), '===>>'); // 检查快捷键是否被注册
    const win = [].shift.call(arguments);
    globalShortcut.register('Command+X', () => {
        win.webContents.send('globalShortcut', 'P')
    });
    globalShortcut.register('CommandOrControl+K', () => {
        console.log('CommandOrControl+K');
        win.webContents.send('globalShortcut', 'K')
    });
};

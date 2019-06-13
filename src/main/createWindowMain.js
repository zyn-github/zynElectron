/**
 * Created by zyn on 2019/6/11.
 */
module.exports = function (BrowserWindow, link, cd) {
    /**
     * @desc Initial window options
     * @link https://www.w3cschool.cn/electronmanual/electronmanual-browser-window.html
     */
    let mainWindow;
    mainWindow = new BrowserWindow({
        height: 563,
        useContentSize: true,
        width: 1000
    });
    mainWindow.once('ready-to-show', () => {
    });
    mainWindow.loadURL(link);
    
    return mainWindow;
};

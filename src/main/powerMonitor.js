/**
 * Created by zyn on 2019/6/12.
 */
// power-monitor模块是用来监听能源区改变的.只能在主进程中使用.在 app 模块的 ready 事件触发之后就不能使用这个模块了.

module.exports = function (powerMonitor) {
    powerMonitor.on('suspend', function() {
        console.log('在系统挂起的时候触发--> 来自能源检测模块');
    });
    
    powerMonitor.on('resume', function() {
        console.log('在系统恢复继续工作的时候触发--> 来自能源检测模块');
    });
    
    powerMonitor.on('on-ac', function() {
        console.log('在系统使用交流电的时候触发--> 来自能源检测模块');
    });
    
    powerMonitor.on('on-battery', function() {
        console.log('在系统使用电池电源的时候触发--> 来自能源检测模块');
    });
    
};
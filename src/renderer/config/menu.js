/**
 * Created by zyn on 2019/6/11.
 */
export default  {
    defaultOpeneds: ['1'],
    menus: [
        {
            icon: 'el-icon-message',
            text: 'electron demo',
            submenus: [
                { text: '进程通讯', link: '/process-communication' },
                { text: '系统', link: '/system-setting' },
                { text: '菜单', link: '/menu-view' },
                { text: '弹窗', link: '/popup-alert' },
                { text: '窗口', link: '/window-setting' },
                { text: '打印', link: '/print-page' },
                { text: 'shell', link: '/shell' },
                { text: '检测在线', link: '/online-offline' }
            ]
        },
        {
            icon: 'el-icon-upload',
            text: '数据存储',
            submenus: [
                { text: 'lowdb', link: '/lowdb' },
            ]
        }
    ]
}

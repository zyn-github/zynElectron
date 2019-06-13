<template>
    <div id="menu-view">
        <p>鼠标右键查看自定义菜单</p>
        <code>
           <pre style="-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none; font-family: Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; font-size: 16px; white-space: pre-wrap; break-inside: avoid; direction: ltr; border: none; color: rgb(51, 51, 51); overflow: auto; word-wrap: normal; margin: 0px 0px 1.275em; padding: 0.85em 1em; background: rgb(247, 247, 247); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; letter-spacing: 0.2px; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px;"><code class="lang-html hljs xml" style="-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none; font-family: Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; font-size: 0.85em; break-inside: avoid; direction: ltr; border: none; color: inherit; padding: 0px; margin: 0px; background: 0px 0px; display: inline; max-width: initial; overflow: initial; line-height: inherit; white-space: pre;"><span class="hljs-comment" style="color:#8e908c;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-comment">&lt;!-- 在网页(渲染进程)中通过 remote 模块动态创建的菜单 --&gt;</span></span>
<span class="hljs-tag" style="color:#c82829;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-tag">&lt;</span><span class="hljs-title" style="color:#8e908c;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-tag"><span class="hljs-name">script</span></span></span><span class="hljs-tag">&gt;</span></span><span class="javascript" style="-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="javascript">
</span><span class="hljs-keyword" style="color:#8959a8;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="javascript"><span class="hljs-keyword">const</span></span></span><span class="javascript"> remote = </span><span class="hljs-built_in" style="color:#f5871f;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="javascript"><span class="hljs-built_in">require</span></span></span><span class="javascript">(</span><span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="javascript"><span class="hljs-string">'electron'</span></span></span><span class="javascript">).remote;
</span><span class="hljs-keyword" style="color:#8959a8;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="javascript"><span class="hljs-keyword">const</span></span></span><span class="javascript"> Menu = remote.Menu;
</span><span class="hljs-keyword" style="color:#8959a8;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="javascript"><span class="hljs-keyword">const</span></span></span><span class="javascript"> MenuItem = remote.MenuItem;

</span><span class="hljs-keyword" style="color:#8959a8;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="javascript"><span class="hljs-keyword">var</span></span></span><span class="javascript"> menu = </span><span class="hljs-keyword" style="color:#8959a8;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="javascript"><span class="hljs-keyword">new</span></span></span><span class="javascript"> Menu();
menu.append(</span><span class="hljs-keyword" style="color:#8959a8;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="javascript"><span class="hljs-keyword">new</span></span></span><span class="javascript"> MenuItem({ label: </span><span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="javascript"><span class="hljs-string">'MenuItem1'</span></span></span><span class="javascript">, click: </span><span class="hljs-function" style="color:#8959a8;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-keyword" style="color:#8959a8;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="javascript"><span class="hljs-function"><span class="hljs-keyword">function</span></span></span></span><span class="javascript"><span class="hljs-function">(</span></span><span class="hljs-params" style="color:#f5871f;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"></span><span class="javascript"><span class="hljs-function"><span class="hljs-params"></span>) </span></span></span><span class="javascript">{ </span><span class="hljs-built_in" style="color:#f5871f;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="javascript"><span class="hljs-built_in">console</span></span></span><span class="javascript">.log(</span><span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="javascript"><span class="hljs-string">'item 1 clicked'</span></span></span><span class="javascript">); } }));
menu.append(</span><span class="hljs-keyword" style="color:#8959a8;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="javascript"><span class="hljs-keyword">new</span></span></span><span class="javascript"> MenuItem({ type: </span><span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="javascript"><span class="hljs-string">'separator'</span></span></span><span class="javascript"> }));
menu.append(</span><span class="hljs-keyword" style="color:#8959a8;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="javascript"><span class="hljs-keyword">new</span></span></span><span class="javascript"> MenuItem({ label: </span><span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="javascript"><span class="hljs-string">'MenuItem2'</span></span></span><span class="javascript">, type: </span><span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="javascript"><span class="hljs-string">'checkbox'</span></span></span><span class="javascript">, checked: </span><span class="hljs-literal" style="color:#f5871f;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="javascript"><span class="hljs-literal">true</span></span></span><span class="javascript"> }));

</span><span class="hljs-built_in" style="color:#f5871f;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="javascript"><span class="hljs-built_in">window</span></span></span><span class="javascript">.addEventListener(</span><span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="javascript"><span class="hljs-string">'contextmenu'</span></span></span><span class="javascript">, </span><span class="hljs-function" style="color:#8959a8;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-keyword" style="color:#8959a8;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="javascript"><span class="hljs-function"><span class="hljs-keyword">function</span></span></span></span><span class="javascript"><span class="hljs-function"> (</span></span><span class="hljs-params" style="color:#f5871f;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="javascript"><span class="hljs-function"><span class="hljs-params">e</span></span></span></span><span class="javascript"><span class="hljs-function">) </span></span></span><span class="javascript">{
  e.preventDefault();
  menu.popup(remote.getCurrentWindow());
}, </span><span class="hljs-literal" style="color:#f5871f;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="javascript"><span class="hljs-literal">false</span></span></span><span class="javascript">);
</span></span><span class="hljs-tag" style="color:#c82829;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-tag">&lt;/</span><span class="hljs-title" style="color:#8e908c;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-tag"><span class="hljs-name">script</span></span></span><span class="hljs-tag">&gt;</span></span>
</code></pre>


            <pre style="-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none; font-family: Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; font-size: 16px; white-space: pre-wrap; break-inside: avoid; direction: ltr; border: none; color: rgb(51, 51, 51); overflow: auto; word-wrap: normal; margin: 0px 0px 1.275em; padding: 0.85em 1em; background: rgb(247, 247, 247); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; letter-spacing: 0.2px; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px;"><code class="lang-javascript hljs" style="-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none; font-family: Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; font-size: 0.85em; break-inside: avoid; direction: ltr; border: none; color: inherit; padding: 0px; margin: 0px; background: 0px 0px; display: inline; max-width: initial; overflow: initial; line-height: inherit; white-space: pre;"><span class="hljs-keyword" style="color:#8959a8;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-keyword"><p>// 创建菜单方式二 在渲染进程中使用模板api创建应用菜单:</p>  var</span></span> template = [
  {
    label: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'Edit'</span></span>,
    submenu: [
      {
        label: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'Undo'</span></span>,
        accelerator: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'CmdOrCtrl+Z'</span></span>,
        role: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'undo'</span></span>
      },
      {
        label: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'Redo'</span></span>,
        accelerator: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'Shift+CmdOrCtrl+Z'</span></span>,
        role: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'redo'</span></span>
      },
      {
        type: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'separator'</span></span>
      },
      {
        label: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'Cut'</span></span>,
        accelerator: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'CmdOrCtrl+X'</span></span>,
        role: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'cut'</span></span>
      },
      {
        label: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'Copy'</span></span>,
        accelerator: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'CmdOrCtrl+C'</span></span>,
        role: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'copy'</span></span>
      },
      {
        label: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'Paste'</span></span>,
        accelerator: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'CmdOrCtrl+V'</span></span>,
        role: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'paste'</span></span>
      },
      {
        label: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'Select All'</span></span>,
        accelerator: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'CmdOrCtrl+A'</span></span>,
        role: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'selectall'</span></span>
      },
    ]
  },
  {
    label: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'View'</span></span>,
    submenu: [
      {
        label: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'Reload'</span></span>,
        accelerator: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'CmdOrCtrl+R'</span></span>,
        click: <span class="hljs-function" style="color:#4271ae;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-keyword" style="color:#8959a8;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-function"><span class="hljs-keyword">function</span></span></span><span class="hljs-function">(</span><span class="hljs-params" style="color:#f5871f;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-function"><span class="hljs-params">item, focusedWindow</span></span></span><span class="hljs-function">) </span></span>{
          <span class="hljs-keyword" style="color:#8959a8;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-keyword">if</span></span> (focusedWindow)
            focusedWindow.reload();
        }
      },
      {
        label: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'Toggle Full Screen'</span></span>,
        accelerator: (<span class="hljs-function" style="color:#4271ae;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-keyword" style="color:#8959a8;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-function"><span class="hljs-keyword">function</span></span></span><span class="hljs-function">(</span><span class="hljs-params" style="color:#f5871f;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"></span><span class="hljs-function"><span class="hljs-params"></span>) </span></span>{
          <span class="hljs-keyword" style="color:#8959a8;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-keyword">if</span></span> (process.platform == <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'darwin'</span></span>)
            <span class="hljs-keyword" style="color:#8959a8;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-keyword">return</span></span> <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'Ctrl+Command+F'</span></span>;
          <span class="hljs-keyword" style="color:#8959a8;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-keyword">else</span></span>
            <span class="hljs-keyword" style="color:#8959a8;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-keyword">return</span></span> <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'F11'</span></span>;
        })(),
        click: <span class="hljs-function" style="color:#4271ae;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-keyword" style="color:#8959a8;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-function"><span class="hljs-keyword">function</span></span></span><span class="hljs-function">(</span><span class="hljs-params" style="color:#f5871f;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-function"><span class="hljs-params">item, focusedWindow</span></span></span><span class="hljs-function">) </span></span>{
          <span class="hljs-keyword" style="color:#8959a8;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-keyword">if</span></span> (focusedWindow)
            focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
        }
      },
      {
        label: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'Toggle Developer Tools'</span></span>,
        accelerator: (<span class="hljs-function" style="color:#4271ae;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-keyword" style="color:#8959a8;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-function"><span class="hljs-keyword">function</span></span></span><span class="hljs-function">(</span><span class="hljs-params" style="color:#f5871f;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"></span><span class="hljs-function"><span class="hljs-params"></span>) </span></span>{
          <span class="hljs-keyword" style="color:#8959a8;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-keyword">if</span></span> (process.platform == <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'darwin'</span></span>)
            <span class="hljs-keyword" style="color:#8959a8;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-keyword">return</span></span> <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'Alt+Command+I'</span></span>;
          <span class="hljs-keyword" style="color:#8959a8;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-keyword">else</span></span>
            <span class="hljs-keyword" style="color:#8959a8;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-keyword">return</span></span> <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'Ctrl+Shift+I'</span></span>;
        })(),
        click: <span class="hljs-function" style="color:#4271ae;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-keyword" style="color:#8959a8;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-function"><span class="hljs-keyword">function</span></span></span><span class="hljs-function">(</span><span class="hljs-params" style="color:#f5871f;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-function"><span class="hljs-params">item, focusedWindow</span></span></span><span class="hljs-function">) </span></span>{
          <span class="hljs-keyword" style="color:#8959a8;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-keyword">if</span></span> (focusedWindow)
            focusedWindow.toggleDevTools();
        }
      },
    ]
  },
  {
    label: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'Window'</span></span>,
    role: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'window'</span></span>,
    submenu: [
      {
        label: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'Minimize'</span></span>,
        accelerator: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'CmdOrCtrl+M'</span></span>,
        role: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'minimize'</span></span>
      },
      {
        label: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'Close'</span></span>,
        accelerator: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'CmdOrCtrl+W'</span></span>,
        role: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'close'</span></span>
      },
    ]
  },
  {
    label: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'Help'</span></span>,
    role: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'help'</span></span>,
    submenu: [
      {
        label: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'Learn More'</span></span>,
        click: <span class="hljs-function" style="color:#4271ae;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-keyword" style="color:#8959a8;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-function"><span class="hljs-keyword">function</span></span></span><span class="hljs-function">(</span><span class="hljs-params" style="color:#f5871f;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"></span><span class="hljs-function"><span class="hljs-params"></span>) </span></span>{ <span class="hljs-built_in" style="color:#f5871f;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-built_in">require</span></span>(<span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'electron'</span></span>).shell.openExternal(<span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'http://electron.atom.io'</span></span>) }
      },
    ]
  },
];

<span class="hljs-keyword" style="color:#8959a8;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-keyword">if</span></span> (process.platform == <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'darwin'</span></span>) {
  <span class="hljs-keyword" style="color:#8959a8;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-keyword">var</span></span> name = <span class="hljs-built_in" style="color:#f5871f;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-built_in">require</span></span>(<span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'electron'</span></span>).remote.app.getName();
  template.unshift({
    label: name,
    submenu: [
      {
        label: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'About '</span></span> + name,
        role: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'about'</span></span>
      },
      {
        type: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'separator'</span></span>
      },
      {
        label: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'Services'</span></span>,
        role: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'services'</span></span>,
        submenu: []
      },
      {
        type: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'separator'</span></span>
      },
      {
        label: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'Hide '</span></span> + name,
        accelerator: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'Command+H'</span></span>,
        role: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'hide'</span></span>
      },
      {
        label: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'Hide Others'</span></span>,
        accelerator: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'Command+Alt+H'</span></span>,
        role: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'hideothers'</span></span>
      },
      {
        label: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'Show All'</span></span>,
        role: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'unhide'</span></span>
      },
      {
        type: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'separator'</span></span>
      },
      {
        label: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'Quit'</span></span>,
        accelerator: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'Command+Q'</span></span>,
        click: <span class="hljs-function" style="color:#4271ae;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-keyword" style="color:#8959a8;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-function"><span class="hljs-keyword">function</span></span></span><span class="hljs-function">(</span><span class="hljs-params" style="color:#f5871f;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"></span><span class="hljs-function"><span class="hljs-params"></span>) </span></span>{ app.quit(); }
      },
    ]
  });
  <span class="hljs-comment" style="color:#8e908c;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-comment">// Window menu.</span></span>
  template[<span class="hljs-number" style="color:#f5871f;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-number">3</span></span>].submenu.push(
    {
      type: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'separator'</span></span>
    },
    {
      label: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'Bring All to Front'</span></span>,
      role: <span class="hljs-string" style="color:#718c00;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-string">'front'</span></span>
    }
  );
}

<span class="hljs-keyword" style="color:#8959a8;-webkit-font-smoothing: antialiased; box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none;font-size:undefined;"><span class="hljs-keyword">var</span></span> menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
</code></pre>
        </code>
    </div>
</template>

<script type="text/ecmascript-6">
    const remote = require('electron').remote;
    export default {
        props: {},
        computed: {},
        name: 'menu-view',
        data () {
            return {};
        },
        created () {
        },
        methods: {},
        mounted () {
            /**
             * @type {Electron.Menu} 创建菜单方式一 是在网页(渲染进程)中通过 remote 模块动态创建的菜单，并且右键显示:
             */
            const Menu = remote.Menu;
            const MenuItem = remote.MenuItem;
            var menu = new Menu();
            menu.append(new MenuItem({ label: 'MenuItem1', click: function () { console.log('item 1 clicked'); } }));
            menu.append(new MenuItem({ type: 'separator' }));
            menu.append(new MenuItem({ label: 'MenuItem2', type: 'checkbox', checked: true }));
            window.addEventListener('contextmenu', function (e) {
                e.preventDefault();
                menu.popup(remote.getCurrentWindow());
            }, false);

            /**
             * @type {Electron.Menu} 创建菜单方式二 在渲染进程中使用模板api创建应用菜单:
             */
            let template = [];
            if (process.platform == 'darwin') {
                var name = require('electron').remote.app.getName();
                template.unshift({
                    label: name + 'GUI',
                    submenu: [
                        {
                            label: 'About ' + name,
                            role: 'about'
                        },
                        {
                            type: 'separator'
                        },
                        {
                            label: 'Services',
                            role: 'services',
                            submenu: []
                        },
                        {
                            type: 'separator'
                        },
                        {
                            label: 'Hide ' + name,
                            accelerator: 'Command+H',
                            role: 'hide'
                        },
                        {
                            label: 'Hide Others',
                            accelerator: 'Command+Alt+H',
                            role: 'hideothers'
                        },
                        {
                            label: 'Show All',
                            role: 'unhide'
                        },
                        {
                            type: 'separator'
                        },
                        {
                            label: 'Quit',
                            accelerator: 'Command+Q',
                            click: function() { app.quit(); }
                        },
                    ]
                });
            }
            var menu = Menu.buildFromTemplate(template);
            Menu.setApplicationMenu(menu);
        },
        components: {},
        destroy () {
        }
    };
</script>

<style scoped type="text/css">
    #menu-view {
    }
</style>
# 回调返参使用

为了实现跨平台通用的插件机制，Fresns 采用「内联框架」为操作逻辑，让插件作为独立模块运行（或者独立部署运行），插件与插件之间使用「[命令字](../../supports/cmd-word/basic.md)」进行通讯，客户端使用回调返参来处理内联框架中的反馈，从而决定后续操作。

## 使用场景

- 在浏览器当前页面，以 Modal 方式弹出内联框架层 `iframe` 访问插件页面。
- 在浏览器新标签页（新窗口），访问插件页面。
- 在 App 里，以视图组件 `WebView` 访问插件页面。
- 在微信小程序，以容器组件 `web-view` 访问插件页面。

## 使用流程

- 第 1 步、客户端自定义命名对扩展操作进行埋点（API 中扩展插件的访问地址）；
- 第 2 步、用户点击埋点按钮后，客户端实时处理 URL 路径中的[变量名](variables.md)，替换为变量值；
- 第 3 步、用户在插件页进行相应操作，操作后插件凭 `postMessageKey` 标识参数，向父级发送 [postMessage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage) 消息；
- 第 4 步、客户端接收插件页的 `postMessage` 消息并处理后续业务功能。

## 内置依赖

Fresns 主程序内置了 [iFrame Resizer](https://github.com/davidjbradshaw/iframe-resizer) 扩展包。

- `/static/js/iframeResizer.min.js`
- `/static/js/iframeResizer.contentWindow.min.js`

## postMessage 说明

插件页完成操作后，会通过 `postMessage` 通讯向客户端返回如下 Object 格式的数据，客户端凭定义的 `postMessageKey` 标识名定位后续业务功能。

```json
{
    "postMessageKey": "postAllow", // 路径中 postMessageKey 变量值
    "windowClose": true, // 是否关闭窗口
    "status": true, // 处理状态，成功或失败
    "message": "ok", // 失败时的提示信息
    "variables": {
        // 路径中变量值
        "type": "",
        "scene": "",
        "aid": "",
        "uid": "",
        "rid": "",
        "gid": "",
        "pid": "",
        "cid": "",
        "eid": "",
        "fid": "",
        "plid": "",
        "clid": "",
    },
    "data": {
        // 例如地图扩展，返回用户选中位置的信息
    }
}
```

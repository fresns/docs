# 扩展回调使用

为了实现跨平台通用的插件机制，Fresns 采用「内联框架」为操作逻辑，让插件作为独立模块运行（或者独立部署运行），插件与插件之间使用「命令字」进行通讯，客户端使用回调返参来处理内联框架中的反馈，从而决定后续操作。

## 使用场景

- 在浏览器当前页面，以 Modal 方式弹出内联框架层 `iframe` 访问应用页面。
- 在浏览器新标签页（新窗口），访问应用页面。
- 在 App 里，以视图组件 `WebView` 访问应用页面。
- 在微信小程序，以容器组件 `web-view` 访问应用页面。

## 使用流程

### 第 1 步

客户端凭接口里的扩展 `appUrl` 参数，结合具体的体验场景，将扩展应用的访问入口设置在客户端的各个交互位置。

### 第 2 步

用户点击扩展的交互按钮后，客户端处理 URL 路径中的[变量名](variables.md)，替换为实时变量值。

使用替换变量值之后的 `appUrl` 访问应用页面。

### 第 3 步

用户在应用页进行相应操作，操作后应用以回调凭证发送反馈消息。

- 有 `postMessageKey` 参数，则通过 [postMessage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage) 向父级发送消息。
- 有 `callbackUlid` 参数，则将数据存储在数据库，客户端通过回调接口 [/api/fresns/v1/common/callback](../../api/common/callback.md) 获取数据。

### 第 4 步

客户端接收应用页的 `postMessage` 消息，或者 `callback` 接口获取反馈消息，并处理后续业务功能。

## postMessage 说明

应用页完成操作后，会通过 `postMessage` 通讯向客户端返回如下 Object 格式的数据，客户端凭定义的 `postMessageKey` 标识名定位后续业务功能。

```json
{
    "code": 0, // 处理状态，0 表示成功，其余为失败状态码
    "message": "ok", // 失败时的提示信息
    "action": {
        "postMessageKey": "fresnsEditorUpload", // 路径中 postMessageKey 变量值
        "windowClose": true, // 是否关闭窗口或弹出层(modal)
        "redirectUrl": "", // 是否重定向新页面
        "dataHandler": "" // 是否处理数据: add, remove, reload
    },
    "data": {
        // 如果功能同 API 一样，则返回与 API 一致的数据格式
        // 例如上传文件，返回内容同 /api/fresns/v1/common/file-uploads data 一致
    }
}
```

## postMessage 代码示例

### 发送消息

- 将数据转换为字符串发送。

```js
const fresnsCallbackMessage = {
    code: 0,
    message: 'ok',
    action: {
        postMessageKey: 'reload',
        windowClose: true,
        reloadData: true,
        redirectUrl: '',
    },
    data: '',
}

const messageString = JSON.stringify(fresnsCallbackMessage);
const userAgent = navigator.userAgent.toLowerCase();

switch (true) {
    case (window.Android !== undefined):
        // Android (addJavascriptInterface)
        window.Android.receiveMessage(messageString);
        break;

    case (window.webkit && window.webkit.messageHandlers.iOSHandler !== undefined):
        // iOS (WKScriptMessageHandler)
        window.webkit.messageHandlers.iOSHandler.postMessage(messageString);
        break;

    case (window.FresnsJavascriptChannel !== undefined):
        // Flutter
        window.FresnsJavascriptChannel.postMessage(messageString);
        break;

    case (window.ReactNativeWebView !== undefined):
        // React Native WebView
        window.ReactNativeWebView.postMessage(messageString);
        break;

    case (userAgent.indexOf('miniprogram') > -1):
        // WeChat Mini Program
        wx.miniProgram.postMessage({ data: messageString });
        wx.miniProgram.navigateBack();
        break;

    // Web
    default:
        parent.postMessage(messageString, '*');
}
```

### 接收消息

- [https://github.com/fresns/client-website-themes/blob/3.x/ThemeFrame/commons/header.blade.php#L222-L227](https://github.com/fresns/client-website-themes/blob/3.x/ThemeFrame/commons/header.blade.php#L222-L227)
- [https://github.com/fresns/client-website-themes/blob/3.x/ThemeFrame/assets/js/fresns-extensions.js#L64-L159](https://github.com/fresns/client-website-themes/blob/3.x/ThemeFrame/assets/js/fresns-extensions.js#L64-L159)
- `postMessageKey` 由客户端开发者自己定义，所以客户端知道每一个 `key` 的位置和用途场景，客户端也就知道后续处理逻辑。

```js
window.onmessage = function (event) {
    let fresnsCallback;

    try {
        fresnsCallback = JSON.parse(event.data);
    } catch (error) {
        return;
    }

    if (!fresnsCallback) {
        return;
    }

    if (fresnsCallback.code != 0) {
        if (fresnsCallback.message) {
            window.tips(fresnsCallback.message, fresnsCallback.code);
        }
        return;
    }

    switch (fresnsCallback.action.postMessageKey) {
        case 'reload':
            window.location.reload();
            break;

        case 'fresnsConnect':
            if (fresnsCallback.action.reloadData) {
                window.location.href = `/me/settings`;
            }
            break;

        // 其他 postMessageKey
    }

    if (fresnsCallback.action.windowClose) {
        $('#fresnsModal').modal('hide');
    }

    if (fresnsCallback.action.redirectUrl) {
        window.location.href = fresnsCallback.action.redirectUrl;
    }
};
```

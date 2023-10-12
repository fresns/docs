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

## postMessage 说明

插件页完成操作后，会通过 `postMessage` 通讯向客户端返回如下 Object 格式的数据，客户端凭定义的 `postMessageKey` 标识名定位后续业务功能。

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
        // 例如上传文件，返回内容同 /api/v2/common/upload-file data 一致
    }
}
```

## 代码示例

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

- [https://github.com/fresns/website/blob/3.x/Moments/resources/views/account/login.blade.php#L24-L32](https://github.com/fresns/website/blob/3.x/Moments/resources/views/account/login.blade.php#L24-L32)
- [https://github.com/fresns/website/blob/3.x/Moments/resources/assets/js/fresns.js#L1707-L1731](https://github.com/fresns/website/blob/3.x/Moments/resources/assets/js/fresns.js#L1707-L1731)
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
                window.location.href = `/account/settings#account-tab`;
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

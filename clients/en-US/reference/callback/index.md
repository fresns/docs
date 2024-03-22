# Callback

In order to realize the cross-platform plug-in mechanism, Fresns adopts "inline framework" as the operation logic, allowing plug-ins to run as independent modules (or deploy independently). Plug-ins communicate with each other using `command words`, and clients use callback and feedback to deal with the feedback in inline framework, so as to determine the subsequent operation.

## Usage Scenarios

- On the current page of the browser, the `iframe` access plug-in page of the inline framework layer pops up in Modal mode.
- In the browser's new tab (new window), visit the plug-in page.
- In the App, visit the plug-in page with the view component `WebView`.

## Usage Process

### Step 1

The client sets the extensions access portal in the client's various interaction locations based on the extension `appUrl` parameter in the api, taking into account the specific experience scenarios.

### Step 2

After the user clicks the advanced interaction button, the client processes the [variable name](variables.md) in the URL path and replaces it with the live variable value.

The application page is accessed using the `appUrl` after the variable value has been replaced.

### Step 3

The user performs the appropriate action on the application page, and after the action, the application sends a feedback message with callback details.

- The `postMessageKey` parameter sends a message to the parent via [postMessage](https://developer.mozilla.org/docs/Web/API/Window/postMessage).
- The `callbackUlid` parameter stores the data in the database and the client retrieves the data via the callback interface [/api/fresns/v1/common/callback](../../api/common/callback.md).

### Step 4

The client receives the `postMessage` message from the application page or `callback` api to get the feedback message and handle the subsequent business functions.

## postMessage Intro

After the operation is completed on the plug-in page, it will return the data in the following Object format to the client through `postMessage` communication, and the client will locate the subsequent business functions by the defined `postMessageKey` identification name.

```json
{
    "code": 0, // Processing status code
    "message": "ok", // Alert message in case of failure
    "action": {
        "postMessageKey": "fresnsEditorUpload", // The value of the postMessageKey variable in the path
        "windowClose": true, // Whether to close the window or modal
        "reloadData": false, // Whether to reload data
        "redirectUrl": "", // Redirect URL
        "dataHandler": "" // Whether data are handle: add, remove, reload
    },
    "data": {
        // For example, a map extension that returns information about the user's selected location
    }
}
```

## postMessage Example

### Post Message

- Convert to a JSON formatted string.

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

### Message Event

- [https://github.com/fresns/client-website-themes/blob/3.x/ThemeFrame/portal/login.blade.php#L15-L20](https://github.com/fresns/client-website-themes/blob/3.x/ThemeFrame/portal/login.blade.php#L15-L20)
- [https://github.com/fresns/client-website-themes/blob/3.x/ThemeFrame/assets/js/fresns-extensions.js#L64-L159](https://github.com/fresns/client-website-themes/blob/3.x/ThemeFrame/assets/js/fresns-extensions.js#L64-L159)
- The `postMessageKey` is defined by the client developer, so the client knows the location and usage scenario of each `key`, and the client knows the subsequent processing logic.

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

        // Other postMessageKey
    }

    if (fresnsCallback.action.windowClose) {
        $('#fresnsModal').modal('hide');
    }

    if (fresnsCallback.action.redirectUrl) {
        window.location.href = fresnsCallback.action.redirectUrl;
    }
};
```

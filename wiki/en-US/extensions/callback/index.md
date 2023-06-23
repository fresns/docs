# Callback

In order to realize the cross-platform plug-in mechanism, Fresns adopts "inline framework" as the operation logic, allowing plug-ins to run as independent modules (or deploy independently). Plug-ins communicate with each other using "[command words](../../supports/cmd-word/basic.md)", and clients use callback and feedback to deal with the feedback in inline framework, so as to determine the subsequent operation.

## Usage Scenarios

- On the current page of the browser, the `iframe` access plug-in page of the inline framework layer pops up in Modal mode.
- In the browser's new tab (new window), visit the plug-in page.
- In the App, visit the plug-in page with the view component `WebView`.
- In the WeChat mini program, access the plug-in page with the container component `web-view`.

## Usage Process

- Step 1, the client defines the name to bury the extension operation (the access address of the extension plug-in in API);
- Step 2, after the user clicks the Bury button, the client processes the [variable name](variables.md) in the URL path in real time and replaces it with the variable value;
- Step 3, the user performs the corresponding operation on the plug-in page, and after the operation, the plug-in sends the [postMessage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage) message to the parent by the `postMessageKey` identification parameter;
- Step 4, the client receives the `postMessage` message of the plug-in page and processes the subsequent business functions.

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
        "redirectUrl": "" // Redirect URL
    },
    "data": {
        // For example, a map extension that returns information about the user's selected location
    }
}
```

## Code Example

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

if (window.Android) {
    // Android (addJavascriptInterface)
    window.Android.receiveMessage(messageString);
} else if (window.webkit.messageHandlers.iOSHandler) {
    // iOS (WKScriptMessageHandler)
    window.webkit.messageHandlers.iOSHandler.postMessage(messageString);
} else if (window.FresnsJavascriptChannel) {
    // Flutter
    window.FresnsJavascriptChannel.postMessage(messageString);
} else if (window.ReactNativeWebView) {
    // React Native WebView
    window.ReactNativeWebView.postMessage(messageString);
} else {
    // Web
    parent.postMessage(messageString, '*');
}
```

### Message Event

- [https://github.com/fresns/themes/blob/release/Moments/account/login.blade.php#L20-L28](https://github.com/fresns/themes/blob/release/Moments/account/login.blade.php#L20-L28)
- [https://github.com/fresns/themes/blob/release/Moments/assets/js/fresns.js#L1669-L1748](https://github.com/fresns/themes/blob/release/Moments/assets/js/fresns.js#L1669-L1748)
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
                window.location.href = `/account/settings#account-tab`;
            }
            break;

        case 'fresnsJoin':
            let params = new URLSearchParams(window.location.search.slice(1));

            $.ajax({
                url: '/api/engine/account/connect-login',
                type: 'post',
                dataType: 'json',
                data: {
                    apiData: fresnsCallback,
                    redirectURL: params.get('redirectURL'),
                },
                success: function (res) {
                    if (res.code !== 0) {
                        return window.tips(res.message, res.code);
                    }

                    if (res.data.redirectURL) {
                        window.location.href = res.data.redirectURL;
                        return;
                    }
                },
            });
            break;

        case 'fresnsEditorUpload':
            fresnsCallback.data.forEach((fileinfo) => {
                addEditorAttachment(fileinfo);
            });

            if (fresnsCallback.action.reloadData) {
                $('#fresnsModal').modal('hide');

                return;
            }
            break;
    }

    if (fresnsCallback.action.windowClose) {
        $('#fresnsModal').modal('hide');
    }

    if (fresnsCallback.action.redirectUrl) {
        window.location.href = fresnsCallback.action.redirectUrl;
    }
};
```

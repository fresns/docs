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

- Send a message to the parent using [postMessage](https://developer.mozilla.org/docs/Web/API/Window/postMessage).

### Step 4

The client receives the `postMessage` message from the application side and handles the subsequent business functions.

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

```html
<script src="/static/js/fresns-callback.js"></script>
```

### Post Message

```js
let callbackAction = {
    postMessageKey: 'fresnsAccountSign',
    windowClose: true,
    redirectUrl: '',
    dataHandler: '',
};
let apiData = {
    loginToken: loginToken
};
let apiCode = 0;
let apiMessage = 'ok';
let timeout = 0; // JS send setTimeout

FresnsCallback.send(callbackAction, apiData, apiCode, apiMessage, timeout);
```

### Message Event

- [https://github.com/fresns/client-website-themes/blob/3.x/ThemeFrame/portal/login.blade.php#L15-L20](https://github.com/fresns/client-website-themes/blob/3.x/ThemeFrame/portal/login.blade.php#L15-L20)
- [https://github.com/fresns/client-website-themes/blob/3.x/ThemeFrame/assets/js/fresns-extensions.js#L80-L123](https://github.com/fresns/client-website-themes/blob/3.x/ThemeFrame/assets/js/fresns-extensions.js#L80-L123)
- The `postMessageKey` is defined by the client developer, so the client knows the location and usage scenario of each `key`, and the client knows the subsequent processing logic.

```js
window.onmessage = function (event) {
    let callbackData = FresnsCallback.decode(event.data);

    if (callbackData.code != 0) {
        tips(callbackData.message);
        return;
    }

    switch (callbackData.action.postMessageKey) {
        case 'reload':
            window.location.reload();
            break;

        case 'fresnsConnect':
            if (callbackData.action.reloadData) {
                window.location.href = `/me/settings`;
            }
            break;

        // Other postMessageKey
    }

    if (callbackData.action.windowClose) {
        $('#fresnsModal').modal('hide');
    }

    if (callbackData.action.redirectUrl) {
        window.location.href = callbackData.action.redirectUrl;
    }

    switch (callbackData.action.dataHandler) {
        case 'add':
            break;

        case 'remove':
            break;

        case 'reload':
            window.location.reload();
            break;
    }
};
```

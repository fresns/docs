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

## Built-in Package

The main program of Fresns has built-in [iFrame Resizer](https://github.com/davidjbradshaw/iframe-resizer) extension package.

- `/static/js/iframeResizer.min.js`
- `/static/js/iframeResizer.contentWindow.min.js`

## postMessage Intro

After the operation is completed on the plug-in page, it will return the data in the following Object format to the client through `postMessage` communication, and the client will locate the subsequent business functions by the defined `postMessageKey` identification name.

```json
{
    "postMessageKey": "fresnsEditorUpload", // The value of the postMessageKey variable in the path
    "windowClose": true, // Whether to close the window or modal
    "variables": {
        // Variable values in paths
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
        "uploadInfo": "",
        "locationInfo": "",
    },
    // The following logic is consistent with the API
    "code": 0, // Processing status code
    "message": "ok", // Alert message in case of failure
    "data": {
        // For example, a map extension that returns information about the user's selected location
    }
}
```

# 编辑器

## 组件

- SDK 已经封装了一个完整的编辑器组件，你可以直接使用，或者修改重构。
- 编辑器组件代码位于 `/sdk/editor/` 目录。
- 编辑器组件基于 `Skyline` 渲染引擎和 [WeUI](https://github.com/Tencent/weui-wxss) 样式库开发。

## 页面

::: code-group
```js [index.js]
import { fresnsConfig, fresnsLang } from '../../sdk/helpers/configs';

Page({
  /** 外部 mixin 引入 **/
  mixins: [
    require('../../mixins/common'),
    require('../../mixins/loginInterceptor'),
    require('../../sdk/extensions/functions'),
  ],

  /** 页面的初始数据 **/
  data: {
    title: null,
    type: 'post',
    did: null,
    fsid: null,
  },

  /** 监听页面加载 **/
  onLoad: async function (options) {
    const title = await fresnsLang('editor');

    const type = options.type || 'post';
    const did = options.did || null;
    const fsid = options.fsid || null;

    const editorService = await fresnsConfig(`${type}_editor_service`);

    // 配置了编辑器插件，跳转插件页
    if (editorService) {
      // 扩展 Web-View 数据
      const navigatorData = {
        title: title,
        url: editorService,
        draftType: type,
        did: did,
        pid: type == 'post' ? fsid : '',
        cid: type == 'comment' ? fsid : '',
        postMessageKey: 'fresnsEditor',
      };

      // 将链接数据赋予到全局数据中
      const app = getApp();
      app.globalData.navigatorData = navigatorData;

      // 访问扩展页面选择用户
      wx.redirectTo({
        url: '/sdk/extensions/webview',
      });

      return;
    }

    // 未配置编辑器插件，访问原本编辑器页面
    this.setData({
      title: title,
      type: type,
      did: did,
      fsid: fsid,
    });
  },
});
```

```json [index.json]
{
  "navigationBarTitleText": "编辑器",
  "usingComponents": {
    "navigation-bar": "/components/commons/navigation-bar/navigation-bar",
    "editor": "/sdk/editor/editor" // SDK 编辑器组件
  }
}
```

```html [index.wxml]
<navigation-bar title="{{title}}" backButton="{{true}}"></navigation-bar>

<scroll-view class="scrollarea" type="list" scroll-y="{{true}}">
  <editor type="{{type}}" did="{{did}}" fsid="{{fsid}}"></editor>
</scroll-view>
```

```css [index.wxss]
@import '/style/weui.wxss';

.scrollarea {
  flex: 1;
  overflow-y: hidden;
  background-color: var(--weui-BG-1);
}
```
:::

## 使用说明

- 使用时，编辑器页面不可使用[回调处理](extensions.md#回调处理)功能，因为组件中涉及回调逻辑，避免冲突。
- 编辑器页面需要判断[发表配置](../../reference/configs.md#发表配置)是否定义了编辑器服务，如果存在，则需跳转到扩展插件页，由插件提供编辑器功能。

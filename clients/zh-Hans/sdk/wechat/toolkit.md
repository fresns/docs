# 工具包

```js
import { ... } from '/sdk/utilities/toolkit';
```

## 使用「点表示法」从多维数组或对象中根据指定键检索值

```js
dataGet(data, 'key.key', '默认值');
```

## 获取当前页面的路由

```js
getCurrentPageRoute();
```

## 获取当前页面附带参数的 URL

```js
getCurrentPageUrl();
```

## 在组件中回调当前页面的功能

```js
callPageFunction('功能函数名', '参数', '...');
```

## 在页面或组件中回调上一个页面的功能

```js
callPrevPageFunction('功能函数名', '参数', '...');
```

## 回调指定页面中的功能

```js
callSpecificPageFunction('route', '功能函数名', '参数', '...');
```

## 回调上一个页面组件中的功能

```js
callPrevPageComponentFunction('组件名', '功能函数名', '参数', '...');
```

## 回调指定页面组件中的功能

```js
callSpecificPageComponentFunction('route', '组件名', '功能函数名', '参数', '...');
```

## 将 URL Query 参数转换为 Json 对象

```js
parseUrlParams('urlParams');
```

## 替换树结构里小组信息

```js
replaceGroupTreeInfo('树结构数据', '查询 gid', '新小组信息');
```

## 截取和过滤文本内容

```js
truncateText('内容', '截断长度', '是否保留富文本格式');
```

## 生成随机字符串

```js
generateRandomString('位数');
```

## 比较两个语义化版本号

```js
versionCompare('版本号', '版本号');
```

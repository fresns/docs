# 路径变量名

无论是网站端，还是移动应用，插件的使用都是以 URL 方式埋点在 [API](../../api/) 中。管理者在控制面板配置关联插件，配置之后用户就可以在编辑器发表内容时操作关联扩展内容，或者在客户端使用中点击进入插件页。

## 路径配置

- 插件路径配置在 [plugin.json](https://docs.fresns.com/zh-Hans/open-source/extensions/index.html#plugin-json-配置信息) 文件 `accessPath` 参数中。
- 插件安装后，会读取并存入 [apps->access_path](https://docs.fresns.com/zh-Hans/open-source/database/apps/apps.html) 数据表字段中。

## 变量列表

| 变量名 | 说明 |
| --- | --- |
| `{accessToken}` | 访问令牌，并且实现一键登录<br>[生成信息](access-token.md) |
| `{postMessageKey}` | `postMessage` 回调消息标识名 |
| `{redirectUrl}` | 重定向网址，参数值 `urlencode()`<br>网址中支持 `{loginToken}` 变量名，用于 URL 方式接收登录凭证信息 |
| `{connectPlatformId}` | [互联平台 ID](https://docs.fresns.com/zh-Hans/open-source/configs/dictionary/connects.html) |
| `{aid}` | 账号 ID |
| `{uid}` | 用户 ID |
| `{rid}` | 角色 ID |
| `{gid}` | 小组 ID |
| `{htid}` | 话题 ID |
| `{gtid}` | 地理 ID |
| `{pid}` | 帖子 ID |
| `{cid}` | 评论 ID |
| `{fid}` | 文件 ID |
| `{eid}` | 内容扩展 ID |
| `{hpid}` | 历史帖子 ID |
| `{hcid}` | 历史评论 ID |
| `{viewType}` | 视图类型 `list`, `detail`, `quoted` |
| `{draftType}` | 草稿类型 `post` 或 `comment` |
| `{draftOptions}` | 草稿选项，同[创建草稿](../../api/editor/draft-create.md) Body 参数一致，对象格式转换为字符串 |
| `{did}` | 草稿 ID |
| `{uploadInfo}` | 上传参数，`用途类型,用途fsid,文件类型,扩展参数代码` 以英文逗号隔开<br>[同上传接口](../../api/common/file-upload.md)，例如 `postDraft,did,image,archiveCode` |
| `{mapInfo}` | 地图参数，`地图 ID,纬度,经度` 以英文逗号隔开<br>[地图 ID 信息](../dictionary/maps.md)，例如 `2,1.2803074,103.8610191` |
| `{parameter}` | 自定义参数 |

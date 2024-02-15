# 路径变量名

无论是网站端，还是移动应用，插件的使用都是以 URL 方式埋点在 [API](../../api/) 中。管理者在控制面板配置关联插件，配置之后用户就可以在编辑器发表内容时操作关联扩展内容，或者在客户端使用中点击进入插件页。

## 路径配置

- 插件路径配置在 [plugin.json](https://docs.fresns.com/zh-hans/open-source/extensions/index.md#plugin-json-配置信息) 文件 `accessPath` 参数中。
- 插件安装后，会读取并存入 [apps->access_path](https://docs.fresns.com/zh-hans/open-source/database/apps/apps.md) 数据表字段中。

## 变量列表

| 变量名 | 说明 |
| --- | --- |
| `{accessToken}` | 访问令牌，并且实现一键登录<br>[生成信息](access-token.md) |
| `{type}` | 访问来源类型（客户端频道） |
| `{scene}` | 入口场景 |
| `{postMessageKey}` | 回调标识名<br>客户端以 `postMessage` 方式接收回调通知 |
| `{callbackUlid}` | 回调标识名<br>客户端以 `API` 方式接收回调通知 |
| `{aid}` | 账号 ID |
| `{uid}` | 用户 ID |
| `{rid}` | 角色 ID |
| `{gid}` | 小组 ID |
| `{pid}` | 帖子 ID |
| `{cid}` | 评论 ID |
| `{fid}` | 文件 ID |
| `{eid}` | 内容扩展 ID |
| `{hpid}` | 历史帖子 ID |
| `{hcid}` | 历史评论 ID |
| `{connectPlatformId}` | [互联平台 ID](../dictionary/connects.md) |
| `{uploadInfo}` | 上传参数，[同上传接口](../../api/common/file-uploads.md) |
| `{locationInfo}` | 位置参数，`地图 ID,纬度,经度` 以英文逗号隔开<br>[地图 ID 信息](../dictionary/maps.md)，例如 `2,1.2803074,103.8610191` |
| `{parameter}` | 自定义参数 |

## {type} 访问来源类型

`{type}` 变量名介绍

| 变量值 | 说明 |
| --- | --- |
| `portal` | 门户频道 |
| `user` | 用户频道 |
| `group` | 小组频道 |
| `hashtag` | 话题频道 |
| `post` | 帖子频道 |
| `comment` | 评论频道 |
| `profile` | 用户主页 |
| `account` | 账号中心 |
| `message` | 消息 |
| `editor` | 编辑器 |

## {scene} 入口场景

`{scene}` 变量名介绍

| 变量值 | 说明 | 场景 |
| --- | --- | --- |
| `like` | 点赞操作 | 根据「[来源类型](#type-访问来源类型)」判断对谁操作 |
| `dislike` | 点踩操作 | *同上* |
| `follow` | 关注操作 | *同上* |
| `block` | 屏蔽操作 | *同上* |
| `manage` | 管理扩展 | *同上* |
| `join` | 注册加入 | 注册或登录账号 |
| `renewal` | 会员续期 | 私有模式用户续期 |
| `realName` | 实名认证 | 管理账号实名认证 |
| `connect` | 互联管理 | 管理互联绑定 |
| `walletRecharge` | 充值扩展 |  |
| `walletWithdraw` | 提现扩展 |  |
| `groupExtension` | 小组扩展 |  |
| `featureExtension` | 用户功能扩展 |  |
| `profileExtension` | 用户资料扩展 |  |
| `operationImage` | 功能性扩展资料 | `operations.diversifyImages` |
| `operationTip` | 功能性提示文案 | `operations.tips` |
| `extendBox` | 扩展内容 | 文本框 / 信息框 / 交互框 |
| `postUserList` | 帖子关联用户列表 | 帖子附属用户列表 |
| `postAuthBtn` | 帖子授权按钮 | 帖子有权限要求，无权时按钮 |
| `commentBtn` | 评论功能按钮 | 评论附带按钮，帖子作者可操作评论 |
| `postEditor` | 帖子编辑器 |  |
| `commentEditor` | 评论编辑器 |  |

## {uploadInfo} 上传参数

- 同签名一样，先压缩并转为字符串，再以 Base64 编码，然后转为 URL 编码
- 参数如下

```json
{
    "usageType": "String / 文件用途类型: userAvatar, userBanner, conversationMessage, post, comment, postDraft, commentDraft",
    "type": "String / 四选一文件类型: image,video,audio,document"
}
```

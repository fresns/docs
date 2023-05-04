# 路径变量名

无论是网站端，还是移动应用，插件的使用都是以 URL 方式埋点在 [API](../../api/) 中。管理者在控制面板配置关联插件，配置之后用户就可以在编辑器发表内容时操作关联扩展内容，或者在客户端使用中点击进入插件页。

## 路径配置

- 插件路径配置在 [plugin.json](../plugin/index.md#plugin-json-配置信息) 文件 `accessPath` 参数中。
- 插件安装后，会读取并存入 [plugins->access_path](../../database/plugins/plugins.md) 数据表字段中。

## 变量列表

| 变量名 | 说明 | 关联字段 |
| --- | --- | --- |
| `{authorization}` | 鉴权信息，并且实现一键登录<br>[生成信息](url-authorization.md) / [验证信息](../plugin/url-authorization.md) |  |
| `{type}` | 访问来源类型（客户端频道） |  |
| `{scene}` | 入口场景 |  |
| `{postMessageKey}` | 回调标识名<br>客户端以 `postMessage` 方式接收回调通知 |  |
| `{callbackUlid}` | 回调标识名<br>客户端以 `API` 方式接收回调通知 | plugin_callbacks->ulid |
| `{aid}` | 账号 ID | accounts->aid |
| `{uid}` | 用户 ID | users->uid |
| `{rid}` | 角色 ID | roles->id |
| `{gid}` | 小组 ID | groups->gid |
| `{pid}` | 帖子 ID | posts->pid |
| `{cid}` | 评论 ID | comments->cid |
| `{fid}` | 文件 ID | files->fid |
| `{eid}` | 内容扩展 ID | extends->eid |
| `{plid}` | 帖子日志 ID | post_logs->id |
| `{clid}` | 评论日志 ID | comment_logs->id |
| `{uploadInfo}` | 上传参数 | [同上传接口](../../api/common/upload-file.md) |
| `{locationInfo}` | 位置参数 | `地图 ID,纬度,经度,比例` 以英文逗号隔开<br>[地图 ID 信息](../../database/dictionary/maps.md)<br>例如 `2,1.2803074,103.8610191,16` |

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
| `profileExtension` | 用户功能扩展 |  |
| `featureExtension` | 用户资料扩展 |  |
| `operationImage` | 功能性扩展资料 | `operations.diversifyImages` |
| `operationTip` | 功能性提示文案 | `operations.tips` |
| `extendBox` | 扩展内容 | 文本框 / 信息框 / 交互框 |
| `postUserList` | 帖子关联用户列表 | 帖子附属用户列表 |
| `postAuthBtn` | 帖子授权按钮 | 帖子有权限要求，无权时按钮 |
| `commentBtn` | 评论功能按钮 | 评论附带按钮，帖子作者可操作评论 |
| `postEditor` | 帖子编辑器 |  |
| `commentEditor` | 评论编辑器 |  |

## {uploadInfo} 上传参数

- 同签名一样，先压缩，再以 Base64 编码，然后转为 URL 编码
- 参数如下

```json
{
    "usageType": "Number / 文件用途类型",
    "tableName": "String / 来源表名",
    "tableColumn": "String / 来源字段名",
    "tableId": "Number / 来源表主键 ID",
    "tableKey": "String / 来源表键名",
    "type": "String / 四选一文件类型: image,video,audio,document"
}
```

- [usageType 参数介绍](../../database/number.md#文件用途类型)

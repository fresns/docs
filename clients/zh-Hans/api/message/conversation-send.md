# [对话]发送消息

- 接口地址：`/api/fresns/v1/conversation/send-message`
- 请求方式：`POST`
- 传参方式：`application/json`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |
| X-Fresns-Uid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |

## Body 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| uidOrUsername | Number / String | YES | 用户 `uid` 或者 `username` |
| message | String | NO | 消息内容 |
| fid | String | NO | 文件 FID |

**接口使用说明**

- `message` 和 `fid` 二选一传参，不可全部留空，不可全部传参。
- 发送文件，先使用[文件上传接口](../common/upload-file.md)，上传后获得 `fid` 传参。

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "cmid": "String / 消息 ID",
        "user": {
            // 发信用户信息
            // 通用数据结构->用户信息
        },
        "isMe": "Boolean / 是否为自己发的",
        "type": "Number / 1.文本消息 2.文件消息",
        "content": "String / 消息内容",
        "file": {
            // 文件消息专用
            // 通用数据结构->文件信息
        },
        "datetime": "String / 发送时间",
        "datetimeFormat": "String / 格式化的发送时间",
        "timeAgo": "String / 人性化发送时间",
        "readStatus": "Boolean / 阅读状态"
    }
}
```

::: details 开发说明
- 先判断全局是否开启了私信功能，配置表 `conversation_status` 键名。
- 再判断用户主角色是否有权发送私信 `user_roles->permission->conversation=true`，如果主角色有过期时间，并且已经过期，则以继承角色权限为主；如果无继承角色（或者该继承 ID 找不到角色），则以配置表 `default_role` 键名键值的角色权限为准；如果配置表键值为空（或找不到角色），则当无权处理。
- 如果是**私有模式**，当过期后 `users->expired_at` ，不允许发送消息。
- 如果对方已经注销 `users->deleted_at`，不可以发送。
- 符合对方的私信设置 `users->conversation_limit`
- 发送前需要判断过滤词规则，触发了过滤词则按选项处理，参见 `block_words` 数据表。
- 每次发送消息都需要查询 `conversations` 表 `a_user_id` 和 `b_user_id` 字段，确定对话消息表 `conversation_id` 的值，对话 ID 由系统查询录入，没有就新建。
- 发送消息后，需要更新的 `conversations` 表 `latest_message_at`、`a_is_display`、`b_is_display` 字段。
:::

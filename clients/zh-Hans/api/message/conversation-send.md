# [对话]发送消息

- 接口地址：`/api/fresns/v1/conversation/message`
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
- 发送文件，先使用[文件上传接口](../file/uploads.md)，上传后获得 `fid` 传参。

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

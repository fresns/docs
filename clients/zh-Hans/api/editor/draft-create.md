# 创建草稿

- 接口地址：`/api/fresns/v1/editor/{type}/draft`
- 请求方式：`POST`
- 传参方式：`Rest` + `application/json`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |
| X-Fresns-Uid | YES | YES |
| X-Fresns-Uid-Token | YES | YES |

## Path 变量

| 变量名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | String | YES | `post` 或 `comment` |

## Body 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| commentPid | String | NO | `评论专用` 评论该帖子 |
| commentCid | String | NO | `评论专用` 回复该评论 |
| quotePid | String | NO | `帖子专用` 引用的帖子 PID |
| gid | String | NO | `帖子专用` 小组 |
| title | String | NO | `帖子专用` 标题 |
| content | String | NO | 正文内容<br>内容中插入文件，格式为 `[file:{fid}]` |
| isMarkdown | Boolean | NO | 内容是否为 MD 格式 |
| isAnonymous | Boolean | NO | 是否匿名 |
| commentPolicy | Number | NO | `帖子专用` 谁可以评论<br>`1` 所有人 `2` 你关注的人 `3` 你关注的人和已认证的人 `4` 不允许所有人 `5` 仅限你提及到的用户 |
| commentPrivate | Boolean | NO | `帖子使用` 所有评论是否为私有<br>`评论使用` 本条评论是否为私有<br>私有则仅评论作者和帖子作者可见 |
| gtid | String | NO | 地理位置 ID |
| locationInfo | Object | NO | 地理位置信息 |
| archives | Array | NO | 扩展参数 |
| extends | Array | NO | 扩展内容 |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "detail": {
            // 通用数据结构->草稿信息
        },
        "controls": {
            "isEditDraft": "Boolean / 是否为编辑草稿",
            "editableStatus": "Boolean / 是否可编辑",
            "editableTime": "String / 剩余可编辑时长，例如 03:00 表示剩余 3 分钟",
            "deadlineTime": "String / 剩余可编辑截止具体日期时间，例如 2022-07-01 15:05:00"
        }
    }
}
```

- [通用数据结构->草稿信息](../../reference/data/draft.md)

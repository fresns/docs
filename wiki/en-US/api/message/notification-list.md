# [Notification] List

- Endpoint Path: `/api/v2/notification/list`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | **required** | **required** |
| X-Fresns-Uid-Token | **required** | **required** |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| types | String | *optional* | `1` System `2` Recommend `3` Like `4` Dislike `5` Follow `6` Block `7` Mention `8` Comment (reply) |
| status | Boolean | *optional* | `0` Unread<br>`1` Read<br>leave empty to output all |
| userWhitelistKeys | String | *optional* | Whitelist key names, only returns key-value pairs for the given key names<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays<br>Valid only for the `actionUser` parameter |
| userBlacklistKeys | String | *optional* | Blacklist key names, removes specified key-value pairs from the returned data<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays<br>Valid only for the `actionUser` parameter |
| whitelistKeys | String | *optional* | Whitelist key names, only returns key-value pairs for the given key names<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays<br>Valid only for the `actionInfo` parameter |
| blacklistKeys | String | *optional* | Blacklist key names, removes specified key-value pairs from the returned data<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays<br>Valid only for the `actionInfo` parameter |
| pageSize | Number | *optional* | Number of items per page (default 15 items) |
| page | Number | *optional* | Page number (default 1) |

**Request Description**

- `types` 留空输出全部，传参支持多个，以英文逗号隔开。
- 按时间倒序排列，最新的在前面。
- **系统消息解读：**
    - `types=1` 代表系统给你发了一条 `content` 消息内容
        - `isAccessPlugin` 是否访问插件页
        - `actionUser` 是否有触发用户
        - `actionObject + actionInfo` 是否有附带内容
- **推荐消息解读：**
    - `types=2` 代表系统给你推荐了内容
        - `content` 推荐语
        - `isAccessPlugin` 是否访问插件页
        - `actionUser` 是否有触发用户
        - `actionObject + actionInfo` 推荐的内容
- **互动消息解读：**
    - `types=3` 代表 `actionUser` 点赞了你的 `actionObject + actionInfo`
    - `types=4` 代表 `actionUser` 踩了你的 `actionObject + actionInfo`
    - `types=5` 代表 `actionUser` 关注了你的 `actionObject + actionInfo`
    - `types=6` 代表 `actionUser` 屏蔽了你的 `actionObject + actionInfo`
    - `types=7` 代表 `actionUser` 在 `actionObject + actionInfo` 中提及了你
        - `content` 提及内容的摘要
    - `types=8` 代表 `actionUser` 评论了你的 `actionObject + actionInfo`
        - `content` 评论内容的摘要
        - `actionCid` 他的评论 cid
- **触发行为 actionType 类型介绍：**
    - 1.点赞
    - 2.点踩
    - 3.关注
    - 4.屏蔽
    - 5.发表
    - 6.编辑
    - 7.删除
    - 8.置顶
    - 9.设精
    - 10.管理

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "pagination": {
            "total": "Number / How much data in total",
            "pageSize": "Number / How much data on each page",
            "currentPage": "Number / Current page number",
            "lastPage": "Number / Last page number"
        },
        "list": [
            {
                "id": "Number / 通知 ID",
                "type": "Number / 通知类型",
                "content": "String / 通知内容",
                "isMarkdown": "Boolean / 内容是否为 Markdown 格式",
                "isAccessPlugin": "Boolean / 是否访问插件页",
                "pluginUrl": "String / 插件页地址",
                "actionUser": {
                    // 触发消息的用户信息
                    // Common Data Structure -> User Info
                },
                "actionType": "Number / 触发行为类型",
                "actionObject": "Number / 触发目标",
                "actionInfo": {
                    // 触发关联内容（公共数据结构）
                    // actionObject=1  用户信息
                    // actionObject=2  小组信息
                    // actionObject=3  话题信息
                    // actionObject=4  帖子信息
                    // actionObject=5  评论信息
                },
                "actionCid": "String / 评论事件的 cid",
                "datetime": "String / 通知时间",
                "datetimeFormat": "String / 通知时间格式化",
                "readStatus": "Boolean / 阅读状态"
            }
        ]
    }
}
```

# [通知]获取消息列表

- 接口地址：`/api/fresns/v1/notification/list`
- 请求方式：`GET`
- 传参方式：`Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |
| X-Fresns-Uid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| types | String | NO | `1` 系统通知 `2` 推荐内容 `3` 点赞 `4` 踩 `5` 关注 `6` 屏蔽 `7` 提及（艾特） `8` 评论（回复） `9` 引用（转发） |
| status | Boolean | NO | `0` 未读<br>`1` 已读<br>留空输出全部 |
| whitelistUserKeys | String | NO | 白名单键名，只返回给定键名的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组<br>仅对 `actionUser` 参数有效 |
| blacklistUserKeys | String | NO | 黑名单键名，从返回数据中删除指定的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组<br>仅对 `actionUser` 参数有效 |
| whitelistInfoKeys | String | NO | 白名单键名，只返回给定键名的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组<br>仅对 `actionInfo` 参数有效 |
| blacklistInfoKeys | String | NO | 黑名单键名，从返回数据中删除指定的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组<br>仅对 `actionInfo` 参数有效 |
| pageSize | Number | NO | 每页显示条数（默认 15 条） |
| page | Number | NO | 页码（默认 1） |

**接口使用说明**

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
        - `contentFsid` 他的评论 cid
    - `types=9` 代表 `actionUser` 引用了你的帖子 `actionObject=4 + actionInfo`
        - `content` 他的内容摘要
        - `contentFsid` 他的帖子 pid
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

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "pagination": {
            "total": "Number / 一共有多少条数据",
            "pageSize": "Number / 每页有多少条数据",
            "currentPage": "Number / 当前页码",
            "lastPage": "Number / 最后一页页码"
        },
        "list": [
            {
                "nid": "String / 通知 ID",
                "type": "Number / 通知类型",
                "content": "String / 通知内容",
                "isMarkdown": "Boolean / 内容是否为 Markdown 格式",
                "isMention": "Boolean / 是否为提及通知（别人内容里提及了我，然后互动通知的我）",
                "isAccessApp": "Boolean / 是否访问应用页",
                "appUrl": "String / 应用页地址",
                "actionUser": {
                    // 触发消息的用户信息
                    // 通用数据结构->用户信息
                },
                "actionUserIsAnonymous": "Boolean / 是否匿名",
                "actionType": "Number / 触发行为类型",
                "actionObject": "Number / 触发目标",
                "actionInfo": {
                    // 触发关联内容（通用数据结构）
                    // actionObject=1  用户信息
                    // actionObject=2  小组信息
                    // actionObject=3  话题信息
                    // actionObject=4  帖子信息
                    // actionObject=5  评论信息
                },
                "contentFsid": "String / 内容事件的 pid 或 cid",
                "datetime": "String / 通知时间",
                "datetimeFormat": "String / 通知时间格式化",
                "timeAgo": "String / 人性化通知时间",
                "readStatus": "Boolean / 阅读状态"
            }
        ]
    }
}
```

- [通用数据结构->用户信息](../../reference/data/user.md)

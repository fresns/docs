# [通知]获取消息列表

- 接口地址：`/api/v2/notify/list`
- 请求方式：`GET`
- 传参方式：`Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| aid | YES | YES |
| uid | YES | YES |
| token | YES | YES |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| types | String | NO | 1.对全员的系统通知 / 2.系统通知 / 3.推荐 / 4.关注<br>5.点赞 / 6.提及（艾特） / 7.评论 |
| status | Boolean | NO | `0` 未读<br>`1` 已读<br>留空输出未读 |
| pageSize | Number | NO | 每页显示条数（默认 15 条） |
| page | Number | NO | 页码（默认 1） |

**接口使用说明**

- `types` 留空输出全部，传参支持多个，以英文逗号隔开。
- 按时间倒序排列，最新的在前面。
- **系统消息解读：**
    - `types=1` 代表系统给全员发了一条 `content` 消息内容（用户不可删除）
        - `isAccessPlugin` 是否访问插件页
        - `actionObject + actionInfo` 是否有附带内容
    - `types=2` 代表系统给你发了一条 `content` 消息内容
        - `isAccessPlugin` 是否访问插件页
        - `actionUser` 是否有触发用户
        - `actionObject + actionInfo` 是否有附带内容
- **推荐消息解读：**
    - `types=3` 代表系统给你推荐了内容
        - `content` 推荐语
        - `isAccessPlugin` 是否访问插件页
        - `actionUser` 是否有触发用户
        - `actionObject + actionInfo` 推荐的内容
- **互动消息解读：**
    - `types=4` 代表 `actionUser` 关注了你
    - `types=5` 代表 `actionUser` 点赞了你的 `actionObject + actionInfo`
    - `types=6` 代表 `actionUser` 在 `actionObject + actionInfo` 中提及了你
        - `content` 提及内容的摘要
    - `types=7` 代表 `actionUser` 发表 `actionObject + actionInfo` 评论了你
        - `content` 评论内容的摘要


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
                "notifyId": "Number / 通知 ID",
                "type": "Number / 通知类型",
                "content": "String / 通知内容",
                "isMarkdown": "Boolean / 内容是否为 Markdown 格式",
                "isAccessPlugin": "Boolean / 是否访问插件页",
                "pluginUrl": "String / 插件页地址",
                "actionUser": {
                    // 触发消息的用户信息
                    // 通用数据结构->用户信息 Profile
                },
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
                "notifyTime": "String / 通知时间",
                "notifyTimeFormat": "String / 通知时间格式化",
                "readStatus": "Boolean / 阅读状态"
            }
        ]
    }
}
```

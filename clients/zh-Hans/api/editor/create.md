# 创建草稿

- 接口地址：`/fresns-api/v1/editor/{type}/create`
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

| 参数名 | 类型 | 是否必传 | **帖子**说明 | **评论**说明 |
| --- | --- | --- | --- | --- |
| createType | Number | YES | 创建类型 1.快捷创建 2.编辑器创建 |  |
| editorFskey | String | NO | 是否插件编辑器，留空为否 |  |
| postQuotePid | String | NO | 引用的帖子 PID<br>非必填 | *帖子专用* |
| postGid | String | NO | 小组，默认选中了小组 | *帖子专用* |
| postTitle | String | NO | 标题，默认自带标题 | *帖子专用* |
| postCommentDisabled | Boolean | NO | 是否禁止评论 | *帖子专用* |
| postCommentPrivate | Boolean | NO | 是否私有评论<br>私有则仅评论作者和帖子作者可见 | *帖子专用* |
| commentPid | String | NO | *评论专用* | 评论哪个帖子，必传 |
| commentCid | String | NO | *评论专用* | 留空表示评论帖子<br>有值表示回复这条评论 |
| content | String | NO | 正文内容，默认自带内容 |  |
| isMarkdown | Boolean | NO | 内容是否为 MD 格式 |  |
| isAnonymous | Boolean | NO | 是否匿名 |  |
| map | Object | NO | 位置信息 |  |
| extends | Array | NO | 扩展内容 |  |
| archives | Array | NO | 扩展参数 |  |

**接口使用说明**

- 创建草稿时，如果数据库已经有 `createType=1` 的草稿，并且为空时（无内容、无文件、无扩展内容），则本次创建将直接返回该草稿。
- `createType=2` 表示为用户主动创建的草稿。

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "detail": {
            // 通用数据结构->历史帖子信息 或者 历史评论信息
        },
        "editControls": {
            "isEditDraft": "Boolean / 是否为编辑草稿",
            "editableStatus": "Boolean / 是否可编辑",
            "editableTime": "String / 剩余可编辑时长，例如 03:00 表示剩余 3 分钟",
            "deadlineTime": "String / 剩余可编辑截止具体日期时间，例如 2022-07-01 15:05:00"
        }
    }
}
```

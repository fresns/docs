# 创建草稿

- 接口地址：`/api/v2/editor/{type}/create`
- 请求方式：`POST`
- 传参方式：`Rest` + `application/json`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |
| X-Fresns-Uid | YES | YES |
| X-Fresns-Uid-Token | YES | YES |

## Rest 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | String | YES | `post` 或 `comment` |

## Body 参数

| 参数名 | 类型 | 是否必传 | **帖子**说明 | **评论**说明 |
| --- | --- | --- | --- | --- |
| createType | Number | YES | 创建类型 1.快捷创建 2.编辑器创建 |  |
| editorUnikey | String | NO | 是否插件编辑器，留空为否 |  |
| postGid | String | NO | 小组，默认选中了小组 | *帖子专用* |
| postTitle | String | NO | 标题，默认自带标题 | *帖子专用* |
| postIsComment | Boolean | NO | 默认配置：是否可以评论帖子 | *帖子专用* |
| postIsCommentPublic | Boolean | NO | 默认配置：是否公开评论<br>不公开则仅帖子作者可见 | *帖子专用* |
| commentPid | String | NO | *评论专用* | 评论哪个帖子，必传 |
| commentCid | String | NO | *评论专用* | 留空表示评论帖子<br>有值表示回复这条评论 |
| content | String | NO | 正文内容，默认自带内容 |  |
| isMarkdown | Boolean | NO | 默认配置：内容是否为 MD 格式 |  |
| isAnonymous | Boolean | NO | 默认配置：是否匿名 |  |
| mapJson | Object | NO | 默认配置：位置信息 |  |
| eid | String | NO | 默认配置：扩展内容 |  |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "detail": {
            // 通用数据结构->帖子日志信息 或者 评论日志信息
        }
    }
}
```

# Create Draft

- Endpoint Path: `/api/v2/editor/{type}/create`
- Method: `POST`
- Request: `Rest` + `application/json`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | **required** | **required** |
| X-Fresns-Uid-Token | **required** | **required** |

## Rest Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | **required** | `post` 或 `comment` |

## Body Params

| 参数名 | 类型 | 是否必传 | **帖子**说明 | **评论**说明 |
| --- | --- | --- | --- | --- |
| createType | Number | **required** | 创建类型 1.快捷创建 2.编辑器创建 |  |
| editorUnikey | String | *optional* | 是否插件编辑器，留空为否 |  |
| postGid | String | *optional* | 小组，默认选中了小组 | *帖子专用* |
| postTitle | String | *optional* | 标题，默认自带标题 | *帖子专用* |
| postIsComment | Boolean | *optional* | 默认配置：是否可以评论帖子 | *帖子专用* |
| postIsCommentPublic | Boolean | *optional* | 默认配置：是否公开评论<br>不公开则仅帖子作者可见 | *帖子专用* |
| commentPid | String | *optional* | *评论专用* | 评论哪个帖子，必传 |
| commentCid | String | *optional* | *评论专用* | 留空表示评论帖子<br>有值表示回复这条评论 |
| content | String | *optional* | 正文内容，默认自带内容 |  |
| isMarkdown | Boolean | *optional* | 默认配置：内容是否为 MD 格式 |  |
| isAnonymous | Boolean | *optional* | 默认配置：是否匿名 |  |
| map | Object | *optional* | 默认配置：位置信息 |  |
| extends | Array | *optional* | 默认配置：扩展内容 |  |
| archives | Array | *optional* | 默认配置：扩展参数 |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "detail": {
            // Common Data Structure -> Post Log Info 或者 评论日志信息
        }
    }
}
```

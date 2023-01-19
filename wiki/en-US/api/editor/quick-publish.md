# Quick Publish

- Endpoint Path: `/api/v2/editor/{type}/quick-publish`
- Method: `POST`
- Request: `multipart/form-data`

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
| postGid | String | *optional* | 小组<br>[post_editor_group_required](../../database/keyname/publish.md)<br>如果配置必填，则此处传参也必填 | *帖子专用* |
| postTitle | String | *optional* | 标题<br>[post_editor_title_required](../../database/keyname/publish.md)<br>如果配置必填，则此处传参也必填 | *帖子专用* |
| postIsComment | Boolean | *optional* | 是否可以评论帖子 | *帖子专用* |
| postIsCommentPublic | Boolean | *optional* | 是否公开评论<br>不公开则仅帖子作者可见 | *帖子专用* |
| commentPid | String | *optional* | *评论专用* | 评论哪个帖子，必传 |
| commentCid | String | *optional* | *评论专用* | 留空表示评论帖子<br>有值表示回复这条评论 |
| content | String | *optional* | 正文内容 |  |
| isMarkdown | Boolean | *optional* | 内容是否为 MD 格式 |  |
| isAnonymous | Boolean | *optional* | 是否匿名 |  |
| mapJson | Object | *optional* | 位置信息 |  |
| eid | String | *optional* | 扩展内容 |  |
| file | File | *optional* | 图片文件 | 图片文件 |

**Request Description**

- 跳过草稿逻辑，直接发表内容。发表内容不存草稿（日志）。
- 支持关联单个已有的扩展内容。
- 支持接口直传单个图片文件。

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```

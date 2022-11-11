# 快速发表

- 接口地址：`/api/v2/editor/{type}/quick-publish`
- 请求方式：`POST`
- 传参方式：`multipart/form-data`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| aid | YES | YES |
| uid | YES | YES |
| token | YES | YES |

## Rest 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | String | YES | `post` 或 `comment` |

## Body 参数

| 参数名 | 类型 | 是否必传 | **帖子**说明 | **评论**说明 |
| --- | --- | --- | --- | --- |
| postGid | String | NO | 小组<br>[post_editor_group_required](../../database/keyname/publish.md)<br>如果配置必填，则此处传参也必填 | *帖子专用* |
| postTitle | String | NO | 标题<br>[post_editor_title_required](../../database/keyname/publish.md)<br>如果配置必填，则此处传参也必填 | *帖子专用* |
| postIsComment | Boolean | NO | 是否可以评论帖子 | *帖子专用* |
| postIsCommentPublic | Boolean | NO | 是否公开评论<br>不公开则仅帖子作者可见 | *帖子专用* |
| commentPid | String | NO | *评论专用* | 评论哪个帖子，必传 |
| commentCid | String | NO | *评论专用* | 留空表示评论帖子<br>有值表示回复这条评论 |
| content | String | NO | 正文内容 |  |
| isMarkdown | Boolean | NO | 内容是否为 MD 格式 |  |
| isAnonymous | Boolean | NO | 是否匿名 |  |
| mapJson | Object | NO | 位置信息 |  |
| eid | String | NO | 扩展内容 |  |
| file | File | NO | 图片文件 | 图片文件 |

**接口使用说明**

- 跳过草稿逻辑，直接发表内容。发表内容不存草稿（日志）。
- 支持关联单个已有的扩展内容。
- 支持接口直传单个图片文件。

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```

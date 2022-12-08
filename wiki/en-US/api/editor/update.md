# Update Draft

- Endpoint Path: `/api/v2/editor/{type}/{draftId}`
- Method: `PUT`
- Request: `Rest` + `application/json`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | **required** | **required** |
| aidToken | **required** | **required** |
| uid | **required** | **required** |
| uidToken | **required** | **required** |

## Rest Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | **required** | `post` 或 `comment` |
| draftId | Number | **required** | 草稿 ID |

## Body Params

| 参数名 | 类型 | 是否必传 | **帖子**说明 | **评论**说明 |
| --- | --- | --- | --- | --- |
| editorUnikey | String | *optional* | 是否为编辑器插件<br>传参 `Fresns` 则重置为默认编辑器 |  |
| postGid | String | *optional* | 小组 | *帖子专用* |
| postTitle | String | *optional* | 标题 | *帖子专用* |
| postIsComment | Boolean | *optional* | 是否可以评论帖子 | *帖子专用* |
| postIsCommentPublic | Boolean | *optional* | 是否公开评论<br>不公开则仅帖子作者可见 | *帖子专用* |
| content | String | *optional* | 正文内容 |  |
| isMarkdown | Boolean | *optional* | 内容是否为 MD 格式 |  |
| isAnonymous | Boolean | *optional* | 是否匿名 |  |
| mapJson | Object | *optional* | 位置信息 |  |
| deleteMap | Boolean | *optional* | 删除位置信息 |  |
| deleteFile | String | *optional* | 删除文件，传参 `fid` |  |
| deleteExtend | String | *optional* | 删除扩展内容，传参 `eid` |  |

**Request Description**

- 参数留空表示不更新。
- 文件功能，使用[文件上传接口](../common/upload-file.md) 上传文件，参数示例：
    - `usageType` = 帖子 `7` 评论 `8`
    - `tableName` = 帖子 `post_logs` 评论 `comment_logs`
    - `tableColumn` = `id`
    - `tableId` = 当前草稿 ID `{draftId}`
    - `tableKey` = `null`
- 位置信息 `mapJson` 参数示例：
    - [查看 map id 信息](../../database/dictionary/maps.md)
    - 位置信息删除（清空）需使用 `deleteMap` 参数。
```json
// mapId,latitude,longitude,poi 这四个信息必传，其余可选
{
    "mapId": 2,
    "latitude": 113.324520,
    "longitude": 23.099994,
    "scale": "",
    "continent": "Asia",
    "continentCode": "AS",
    "country": "China",
    "countryCode": "CN",
    "region": "Jiangsu",
    "regionCode": "JS",
    "city": "Suzhou",
    "cityCode": "SZ",
    "district": "Taicang",
    "address": "",
    "zip": "215400",
    "poi": "",
    "poiId": "",
}
```

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```

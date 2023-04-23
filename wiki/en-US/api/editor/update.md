# Update Draft

- Endpoint Path: `/api/v2/editor/{type}/{draftId}`
- Method: `PUT`
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
| type | String | **required** | `post` or `comment` |
| draftId | Number | **required** | 草稿 ID |

## Body Params

| 参数名 | 类型 | 是否必传 | **帖子**说明 | **评论**说明 |
| --- | --- | --- | --- | --- |
| editorUnikey | String | *optional* | 是否为编辑器插件<br>传参 `Fresns` 则重置为默认编辑器 |  |
| postQuotePid | String | *optional* | 引用的帖子 PID<br>非必填 | *帖子专用* |
| postGid | String | *optional* | 小组 | *帖子专用* |
| postTitle | String | *optional* | 标题 | *帖子专用* |
| postIsComment | Boolean | *optional* | 是否可以评论帖子 | *帖子专用* |
| postIsCommentPublic | Boolean | *optional* | 是否公开评论<br>不公开则仅帖子作者可见 | *帖子专用* |
| content | String | *optional* | 正文内容 |  |
| isMarkdown | Boolean | *optional* | 内容是否为 MD 格式 |  |
| isAnonymous | Boolean | *optional* | 是否匿名 |  |
| map | Object | *optional* | 位置信息 |  |
| extends | Array | *optional* | 扩展内容 |  |
| archives | Array | *optional* | 扩展参数 |
| deleteMap | Boolean | *optional* | 删除位置信息 |  |
| deleteFile | String | *optional* | 删除文件，传参 `fid` |  |
| deleteExtend | String | *optional* | 删除扩展内容，传参 `eid` |  |
| deleteArchive | String | *optional* | 删除扩展参数，传参 `code` |  |

**Request Description**

- 参数留空表示不更新。
- 文件功能，使用[文件上传接口](../common/upload-file.md) 上传文件，参数示例：
    - `tableName` = 帖子 `post_logs` 评论 `comment_logs`
    - `tableColumn` = `id`
    - `tableId` = 当前草稿 ID `{draftId}`
- 位置信息 `map` 参数示例：
    - 位置信息 `mapId`,`latitude`,`longitude`,`poi` 这四个信息必传，其余可选
    - `mapId` 来自数据字典，[地图服务商编号](../../database/dictionary/maps.md)
    - 位置信息删除（清空）需使用 `deleteMap` 参数。

**Example Parameters**

::: code-group
```json [Location Info]
{
    "mapId": 2,
    "latitude": 37.3185039,
    "longitude": -122.0288017,
    "scale": 14,
    "continent": "North America",
    "continentCode": "NA",
    "country": "United States",
    "countryCode": "US",
    "region": "California",
    "regionCode": "CA",
    "city": "Santa Clara",
    "cityCode": "SC",
    "district": "Cupertino",
    "address": "10800 Torre Ave, Cupertino, CA 95014",
    "zip": "95014",
    "poi": "Cupertino Library",
    "poiId": "TRDucfBPkhuzzR9a7",
}
```

```json [Extend Content Info]
[
    {
        "eid": "eid",
        "canDelete": true, // 用户是否可以直接删除
        "rating": 9, // 排序
        "pluginUnikey": null
    }
]
```

```json [Extend Archive Info]
[
    {
        "code": "code",
        "value": "value",
        "isPrivate": false, // 是否私有（是否对外公开展示）
        "pluginUnikey": null
    }
]
```
:::

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```

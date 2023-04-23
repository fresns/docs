# 更新草稿内容

- 接口地址：`/api/v2/editor/{type}/{draftId}`
- 请求方式：`PUT`
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
| draftId | Number | YES | 草稿 ID |

## Body 参数

| 参数名 | 类型 | 是否必传 | **帖子**说明 | **评论**说明 |
| --- | --- | --- | --- | --- |
| editorUnikey | String | NO | 是否为编辑器插件<br>传参 `Fresns` 则重置为默认编辑器 |  |
| postQuotePid | String | NO | 引用的帖子 PID<br>非必填 | *帖子专用* |
| postGid | String | NO | 小组 | *帖子专用* |
| postTitle | String | NO | 标题 | *帖子专用* |
| postIsComment | Boolean | NO | 是否可以评论帖子 | *帖子专用* |
| postIsCommentPublic | Boolean | NO | 是否公开评论<br>不公开则仅帖子作者可见 | *帖子专用* |
| content | String | NO | 正文内容 |  |
| isMarkdown | Boolean | NO | 内容是否为 MD 格式 |  |
| isAnonymous | Boolean | NO | 是否匿名 |  |
| map | Object | NO | 位置信息 |  |
| extends | Array | NO | 扩展内容 |  |
| archives | Array | NO | 扩展参数 |  |
| deleteMap | Boolean | NO | 删除位置信息 |  |
| deleteFile | String | NO | 删除文件，传参 `fid` |  |
| deleteExtend | String | NO | 删除扩展内容，传参 `eid` |  |
| deleteArchive | String | NO | 删除扩展参数，传参 `code` |  |

**接口使用说明**

- 文件功能，使用[文件上传接口](../common/upload-file.md) 上传文件，参数示例：
    - `tableName` = 帖子 `post_logs` 评论 `comment_logs`
    - `tableColumn` = `id`
    - `tableId` = 当前草稿 ID `{draftId}`
- 位置信息 `map` 参数示例：
    - 位置信息 `mapId`,`latitude`,`longitude`,`poi` 这四个信息必传，其余可选
    - `mapId` 来自数据字典，[地图服务商编号](../../database/dictionary/maps.md)
    - 位置信息删除（清空）需使用 `deleteMap` 参数。

**参数示例**

::: code-group
```json [位置信息示例: en]
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

```json [位置信息示例: zh-Hans]
{
    "mapId": 4,
    "latitude": 31.299,
    "longitude": 120.585,
    "scale": 6,
    "continent": "亚洲",
    "continentCode": "AS",
    "country": "中国",
    "countryCode": "CN",
    "region": "江苏",
    "regionCode": "JS",
    "city": "苏州",
    "cityCode": "SZ",
    "district": "工业园区",
    "address": "苏州工业园区星港街199号",
    "zip": "215000",
    "poi": "东方之门",
    "poiId": "B020017GRH",
}
```

```json [扩展内容示例]
[
    {
        "eid": "eid",
        "canDelete": true, // 用户是否可以直接删除
        "rating": 9, // 排序
        "pluginUnikey": null
    }
]
```

```json [扩展参数示例]
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

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```

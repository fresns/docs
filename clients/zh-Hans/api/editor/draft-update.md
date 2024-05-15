# 更新草稿内容

- 接口地址：`/api/fresns/v1/editor/{type}/draft/{did}`
- 请求方式：`PATCH`
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
| did | String | YES | 草稿 ID |

## Body 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| editorFskey | String | NO | 是否为编辑器插件<br>传参 `Fresns` 则重置为默认编辑器 |
| quotePid | String | NO | `帖子专用`: 引用的帖子 PID |
| gid | String | NO | `帖子专用`: 小组 |
| title | String | NO | `帖子专用`: 标题 |
| content | String | NO | 正文内容<br>内容中插入文件，格式为 `[file:{fid}]` |
| isMarkdown | Boolean | NO | 内容是否为 MD 格式 |
| isAnonymous | Boolean | NO | 是否匿名 |
| commentPolicy | Number | NO | `帖子专用`: 谁可以评论<br>`1` 所有人 `2` 你关注的人 `3` 你关注的人和已认证的人 `4` 不允许所有人 `5` 仅限你提及到的用户 |
| commentPrivate | Boolean | NO | `帖子使用` 所有评论是否为私有<br>`评论使用` 本条评论是否为私有<br>私有则仅评论作者和帖子作者可见 |
| gtid | String | NO | 地理位置 ID |
| locationInfo | Object | NO | 地理位置信息 |
| fileInfo | Array | NO | 文件信息 |
| archives | Array | NO | 扩展参数 |
| extends | Array | NO | 扩展内容 |
| deleteLocation | Boolean | NO | 删除位置信息 |
| deleteExtend | String | NO | 删除扩展内容，传参 `eid` |
| deleteFile | String | NO | 删除文件，传参 `fid` |

**接口使用说明**

- 文件功能，使用[文件上传接口](../common/file-upload.md)上传文件。
- 发表时，如果有 `gtid` 值，位置信息 `locationInfo` 有值也不被使用。

**参数示例**

::: code-group
```json [位置信息示例: en]
{
    "langTag": "en", // 以下信息文字是什么语言，留空则使用 X-Fresns-Client-Lang-Tag
    "name": "Cupertino Library", // 必须
    "description": "",
    "placeId": "TRDucfBPkhuzzR9a7", // 参考 Google Map
    "placeType": "building", // 参考 Google Map
    "mapId": 2, // 必须
    "latitude": 37.3185039, // 必须
    "longitude": -122.0288017, // 必须
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
    "moreInfo": {}
}
```

```json [位置信息示例: zh-Hans]
{
    "langTag": "zh-Hans", // 以下信息文字是什么语言，留空则使用 X-Fresns-Client-Lang-Tag
    "name": "东方之门", // 必须
    "description": "",
    "placeId": "B020017GRH", // 参考 Google Map
    "placeType": "building", // 参考 Google Map
    "mapId": 4, // 必须
    "latitude": 31.299, // 必须
    "longitude": 120.585, // 必须
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
    "moreInfo": {}
}
```

```json [文件信息]
[
    {
        "fid": "fid",
        "warning": "", // 文件警告: none, nudity, violence, sensitive
        "sortOrder": 9, // 排序
        "moreInfo": {} // 有参数则替换（空值则替换为空），无参数则不修改
    }
]
```

```json [扩展参数示例]
[
    {
        "code": "code",
        "value": "value", // 如果是 json 则转换为字符串
        "isPrivate": false, // 是否私有（是否对外公开展示）
        "fskey": null
    }
]
```

```json [扩展内容示例]
[
    {
        "eid": "eid",
        "canDelete": true, // 用户是否可以直接删除
        "sortOrder": 9, // 排序
        "fskey": null
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

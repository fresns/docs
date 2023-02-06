# User Edit

- Endpoint Path: `/api/v2/user/edit`
- Method: `PUT`
- Request: `application/json`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | **required** | **required** |
| X-Fresns-Uid-Token | **required** | **required** |

## Body Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| username | String | *optional* | 用户名（留空代表不修改） |
| nickname | String | *optional* | 用户昵称（留空代表不修改） |
| avatarFid | String | *optional* | 头像图文件 FID（留空代表不修改） |
| avatarUrl | String | *optional* | 头像图地址（留空代表不修改） |
| bannerFid | String | *optional* | 背景条幅图文件 FID（留空代表不修改） |
| bannerUrl | String | *optional* | 背景条幅图地址（留空代表不修改） |
| gender | Number | *optional* | 性别（留空代表不修改） |
| birthday | String | *optional* | 生日（留空代表不修改，格式为 Y-m-d H:i:s） |
| bio | String | *optional* | 简介（留空代表不修改） |
| location | String | *optional* | 位置（留空代表不修改） |
| conversationLimit | Number | *optional* | 对话设置（留空代表不修改） |
| commentLimit | Number | *optional* | 评论设置（留空代表不修改） |
| timezone | String | *optional* | 偏好时区（留空代表不修改） |
| archives | Array | *optional* | 扩展资料（留空代表不修改） |
| deviceToken | String | *optional* | iOS 或 Android 设备 Token（留空代表不修改） |

**Request Description**

- `avatarFid` 和 `avatarUrl` 两者留空表示不修改，传参时二选一。
- `bannerFid` 和 `bannerUrl` 两者留空表示不修改，传参时二选一。
- 头像和背景条幅图如果使用 `fid`，先使用[文件上传接口](../common/upload-file.md)，上传后获得 `fid` 传参。
- 上传参数例子：
    - `tableName` = `users`
    - `tableColumn` = `avatar_file_id` 或 `banner_file_id`
    - `tableKey` = 当前用户的 uid 或 username
- 扩展资料示例：

```json
[
    {
        "code": "code",
        "value": "value",
        "isPrivate": false, // 是否私有（是否对外公开展示）
        "pluginUnikey": null
    },
    {
        "code": "code",
        "value": "value",
        "isPrivate": true, // 是私有（0/1 或者布尔型）
        "pluginUnikey": "可空"
    }
]
```

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```

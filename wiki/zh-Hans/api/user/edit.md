# 修改用户资料

- 接口地址：`/api/v2/user/edit`
- 请求方式：`PUT`
- 传参方式：`application/json`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |
| X-Fresns-Uid | YES | YES |
| X-Fresns-Uid-Token | YES | YES |

## Body 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| username | String | NO | 用户名（留空代表不修改） |
| nickname | String | NO | 用户昵称（留空代表不修改） |
| avatarFid | String | NO | 头像图文件 FID（留空代表不修改） |
| avatarUrl | String | NO | 头像图地址（留空代表不修改） |
| bannerFid | String | NO | 背景条幅图文件 FID（留空代表不修改） |
| bannerUrl | String | NO | 背景条幅图地址（留空代表不修改） |
| gender | Number | NO | 性别（留空代表不修改） |
| birthday | String | NO | 生日（留空代表不修改，格式为 Y-m-d H:i:s） |
| bio | String | NO | 简介（留空代表不修改） |
| location | String | NO | 位置（留空代表不修改） |
| conversationLimit | Number | NO | 对话设置（留空代表不修改） |
| commentLimit | Number | NO | 评论设置（留空代表不修改） |
| timezone | String | NO | 偏好时区（留空代表不修改） |
| archives | Array | NO | 扩展资料（留空代表不修改） |
| deviceToken | String | NO | iOS 或 Android 设备 Token（留空代表不修改） |

**接口使用说明**

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

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```

::: details 开发说明
- 修改 `username` 参数，需要结合 `last_username_at` 字段验证配置表设置的间隔天数，以及修改后更新 `last_username_at` 字段值。
    - 1、只能是包含字母、数字和单个连字符 -
    - 2、不能是纯数字、连字符只能包含一个、不能带标点符号或特殊符号、不能是 emoji 表情符、不能为空、不能有空格
    - 3、存储时字母大小写保持原样
    - 4、唯一性不区分大小写，比如 Jarvis 和 jarvis 属于重复
    - 5、字段类型 varchar(64)
- 修改 `nickname` 参数，需要结合 `last_nickname_at` 字段验证配置表设置的间隔天数，以及修改后更新 `last_nickname_at` 字段值。
    - 1、不能带标点符号或特殊符号，包括连字符
    - 2、允许有单个空格，但空格不能在开头或结尾
    - 3、如果空格有多个，或者在开头和结尾，直接过滤掉，不作错误状态提示
    - 4、不能为空，不能为纯空格
    - 5、字段类型 varchar(64)
- 修改 `username` 需要判断配置表 `disable_names` 键名里是否禁止使用（字典键值“禁用名”）。
- 修改 `nickname` 和 `bio` 参数，修改前需要判断过滤词规则 `block_words` 表。
:::
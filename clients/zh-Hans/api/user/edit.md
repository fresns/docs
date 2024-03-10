# 修改用户资料

- 接口地址：`/api/fresns/v1/user/profile`
- 请求方式：`PATCH`
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
| username | String | NO | 用户名 |
| nickname | String | NO | 用户昵称 |
| avatarFid | String | NO | 头像图文件 FID |
| avatarUrl | String | NO | 头像图地址 |
| bannerFid | String | NO | 背景条幅图文件 FID |
| bannerUrl | String | NO | 背景条幅图地址 |
| gender | Number | NO | 性别: 1.未知 2.男 3.女 4.自定义 |
| genderCustom | String | NO | 性别自定义 |
| genderPronoun | Number | NO | 性别代称: 1.She / 2.He / 3.They |
| birthdayDisplayType | Number | NO | 生日: 1.完整显示 / 2.显示年份 / 3.显示月和日 / 4.不显示 |
| bio | String | NO | 简介 |
| location | String | NO | 位置 |
| conversationPolicy | Number | NO | 对话设置 |
| commentPolicy | Number | NO | 评论设置 |
| moreInfo | Object | NO | 自定义信息 |
| archives | Array | NO | 扩展资料 |

**接口使用说明**

- 留空代表不修改。
- `avatarFid` 和 `avatarUrl` 两者留空表示不修改，传参时二选一。
- `bannerFid` 和 `bannerUrl` 两者留空表示不修改，传参时二选一。
- 头像和背景条幅图如果使用 `fid`，先使用[文件上传接口](../common/file-uploads.md)，上传后获得 `fid` 传参。
- 扩展资料示例：

```json
[
    {
        "code": "code",
        "value": "value",
        "isPrivate": false, // 是否私有（是否对外公开展示）
        "fskey": null
    },
    {
        "code": "code",
        "value": "value",
        "isPrivate": true, // 是私有（0/1 或者布尔型）
        "fskey": "可空"
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

# [对话]获取对话详情

- 接口地址：`/api/fresns/v1/conversation/{uidOrUsername}/detail`
- 请求方式：`GET`
- 传参方式：`Rest` + `Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |
| X-Fresns-Uid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |

## Path 变量

| 变量名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| uidOrUsername | Number / String | YES | 用户 `uid` 或者 `username` |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| filterUserType | String | NO | `whitelist` 只返回给定键名的键值对<br>`blacklist` 从返回数据中删除指定的键值对<br>仅对返回结果中 `user` 参数有效 |
| filterUserKeys | String | NO | 多个以英文逗号隔开，支持「点表示法」表示多维数组 |

**接口使用说明**

- 上传文件 `uploadType`
    - `api` 使用上传接口 [/api/fresns/v1/common/file-upload](../common/file-upload.md)
    - `page` 使用 WebView 访问 `uploadUrl` 参数的地址上传，规则见[回调返参](../../reference/callback/index.md)
    - `sdk` 使用 [S3 SDK 上传](../common/file-upload-token.md)，上传完成后，更新文件信息为上传成功 [/api/fresns/v1/common/file-info](../common/file-update.md)

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "configs": {
            "status": "Boolean / 是否允许发送消息",
            "files": {
                "image": {
                    "status": "Boolean / 是否允许发送图片",
                    "extensions": "String / 支持的扩展名，示例 png,gif,jpg,jpeg,bmp,heic",
                    "inputAccept": "String / 支持的扩展名，示例 image/png,image/gif,image/jpeg,image/jpeg,image/bmp",
                    "maxSize": "Number / 最大文件尺寸，单位 MB",
                    "uploadType": "String / 上传类型: api, page, sdk",
                    "uploadUrl": "String / page 上传类型的地址"
                },
                "video": {
                    "status": "Boolean / 是否允许发送视频",
                    "extensions": "String / 支持的扩展名，示例 wmv,rm,mov,mpeg,mp4,3gp,flv,avi,rmvb",
                    "inputAccept": "String / 支持的扩展名，示例 video/x-ms-wmv,application/vnd.rn-realmedia,video/quicktime,video/mpeg,video/mp4,video/3gpp,video/x-flv,video/x-msvideo,application/vnd.rn-realmedia-vbr",
                    "maxSize": "Number / 最大文件尺寸，单位 MB",
                    "maxDuration": "Number / 最大文件时长，单位 秒",
                    "uploadType": "String / 上传类型: api, page, sdk",
                    "uploadUrl": "String / page 上传类型的地址"
                },
                "audio": {
                    "status": "Boolean / 是否允许发送音频",
                    "extensions": "String / 支持的扩展名，示例 mp3,wav,m4a",
                    "inputAccept": "String / 支持的扩展名，示例 audio/mpeg,audio/x-wav,audio/mp4",
                    "maxSize": "Number / 最大文件尺寸，单位 MB",
                    "maxDuration": "Number / 最大文件时长，单位 秒",
                    "uploadType": "String / 上传类型: api, page, sdk",
                    "uploadUrl": "String / page 上传类型的地址"
                },
                "document": {
                    "status": "Boolean / 是否允许发送文档",
                    "extensions": "String / 支持的扩展名，示例 doc,docx,xls,xlsx,csv,ppt,pptx,pps,ppts,pdf,txt,md,markdown,rar,zip,7z,epub,mobi",
                    "inputAccept": "String / 支持的扩展名，示例 application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel",
                    "maxSize": "Number / 最大文件尺寸，单位 MB",
                    "uploadType": "String / 上传类型: api, page, sdk",
                    "uploadUrl": "String / page 上传类型的地址"
                }
            }
        },
        "detail": {
            "user": {
                // 与我对话的用户信息，为空表示用户已注销
                // 通用数据结构->用户信息
            },
            "messageCount": "Number / 全部消息数",
            "unreadCount": "Number / 对话框未读消息数"
        }
    }
}
```

- [通用数据结构->用户信息](../../reference/data/user.md)

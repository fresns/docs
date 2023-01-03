# Editor Config

- Endpoint Path: `/api/v2/editor/{type}/config`
- Method: `GET`
- Request: `Rest`

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

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "editor": {
            "toolbar": {
                "sticker": "Boolean / 是否启用表情",
                "image": {
                    "status": "Boolean / 是否启用图片",
                    "extensions": "String / 支持的扩展名，示例 png,gif,jpg,jpeg,bmp,heic",
                    "inputAccept": "String / 支持的扩展名，示例 image/png,image/gif,image/jpeg,image/jpeg,image/bmp",
                    "maxSize": "Number / 最大文件尺寸，单位 MB",
                    "uploadForm": "String / 上传方式 fresns 或 plugin",
                    "uploadUrl": "String / Plugin 上传方式的地址",
                    "uploadNumber": "Number / 允许上传个数"
                },
                "video": {
                    "status": "Boolean / 是否启用视频",
                    "extensions": "String / 支持的扩展名，示例 wmv,rm,mov,mpeg,mp4,3gp,flv,avi,rmvb",
                    "inputAccept": "String / 支持的扩展名，示例 video/x-ms-wmv,application/vnd.rn-realmedia,video/quicktime,video/mpeg,video/mp4,video/3gpp,video/x-flv,video/x-msvideo,application/vnd.rn-realmedia-vbr",
                    "maxSize": "Number / 最大文件尺寸，单位 MB",
                    "maxTime": "Number / 最大文件时长，单位 秒",
                    "uploadForm": "String / 上传方式 fresns 或 plugin",
                    "uploadUrl": "String / Plugin 上传方式的地址",
                    "uploadNumber": "Number / 允许上传个数"
                },
                "audio": {
                    "status": "Boolean / 是否启用音频",
                    "extensions": "String / 支持的扩展名，示例 mp3,wav,m4a",
                    "inputAccept": "String / 支持的扩展名，示例 audio/mpeg,audio/x-wav,audio/mp4",
                    "maxSize": "Number / 最大文件尺寸，单位 MB",
                    "maxTime": "Number / 最大文件时长，单位 秒",
                    "uploadForm": "String / 上传方式 fresns 或 plugin",
                    "uploadUrl": "String / Plugin 上传方式的地址",
                    "uploadNumber": "Number / 允许上传个数"
                },
                "document": {
                    "status": "Boolean / 是否启用文档",
                    "extensions": "String / 支持的扩展名，示例 doc,docx,xls,xlsx,csv,ppt,pptx,pps,ppts,pdf,txt,md,markdown,rar,zip,7z,epub,mobi",
                    "inputAccept": "String / 支持的扩展名，示例 application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel",
                    "maxSize": "Number / 最大文件尺寸，单位 MB",
                    "uploadForm": "String / 上传方式 fresns 或 plugin",
                    "uploadUrl": "String / Plugin 上传方式的地址",
                    "uploadNumber": "Number / 允许上传个数"
                },
                "title": {
                    "status": "Boolean / 是否启用标题",
                    "view": "Number / 1.默认显示 2.默认隐藏",
                    "required": "Boolean / 是否必填",
                    "length": "Number / 最大长度"
                },
                "mention": "Boolean / 是否显示艾特按钮",
                "hashtag": {
                    "status": "Boolean / 是否显示话题按钮",
                    "showMode": "Number / 话题格式 1.单 # 2.双 #"
                },
                "expand": {
                    "status": "Boolean / 是否启用扩展",
                    "list": [
                        {
                            // Common Data Structure -> Extend Function Info
                        }
                    ]
                }
            },
            "features": {
                "group": {
                    "status": "Boolean / 是否启用小组",
                    "required": "Boolean / 是否必选"
                },
                "location": {
                    "status": "Boolean / 是否启用位置",
                    "maps": [
                        {
                            // Common Data Structure -> Extend Function Info
                        }
                    ]
                },
                "anonymous": "Boolean / 是否支持匿名",
                "contentLength": "Number / 内容最大长度"
            }
        },
        "publish": {
            "perm": {
                "draft": "Boolean / 是否可以创建新草稿",
                "publish": "Boolean / 是否有权限表表",
                "review": "Boolean / 发表是否需要审核",
                "emailRequired": "Boolean / 邮箱要求是否通过",
                "phoneRequired": "Boolean / 手机要求是否通过",
                "realNameRequired": "Boolean / 实名制要求是否通过",
                "tips": [
                    "String / 无要求的请求语 1",
                    "String / 无要求的请求语 2"
                ]
            },
            "limit": {
                "status": "Boolean / 是否有特殊规则",
                "isInTime": "Boolean / 是否在执行时间范围内",
                "type": "Number / 1.指定某个时间段范围内生效 2.指定每天的某个时间段范围内循环生效",
                "periodStart": "String / type=1 专用，开始日期时间",
                "periodEnd": "String / type=1 专用，结束日期时间",
                "cycleStart": "String / type=2 专用，开始时间",
                "cycleEnd": "String / type=2 专用，结束时间",
                "rule": "Number / 1.可以发表，但是需要审核 2.禁止发表",
                "tip": "String / 提示语"
            }
        },
        "editPerm": {
            "status": "Boolean / 是否有权编辑",
            "timeLimit": "Number / 多长时间内可以编辑",
            "editSticky": "Boolean / 帖子置顶后是否可编辑",
            "editDigest": "Boolean / 帖子加精后是否可编辑"
        }
    }
}
```

- 编辑器文件配置的 `uploadForm` 参数
    - `fresns` 则使用上传接口 [/api/v2/common/upload-file](../common/upload-file.md)
    - `plugin` 则使用 WebView 访问 `uploadUrl` 参数的地址上传，规则见[回调返参](../../extensions/callback/index.md)。

# 编辑器配置信息

- 接口地址：`/api/fresns/v1/editor/{type}/configs`
- 请求方式：`GET`
- 传参方式：`Rest`

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

**接口使用说明**

- 额外参数
    - 使用 [/api/fresns/v1/global/{type}/archives](../global/archives.md) 获取编辑器是否有额外表单。
    - 获取 `post` 或 `comment` 的额外参数的表单配置。
    - 当选择小组后，获取 `group` 类型，附加 Query 参数获取该小组发表帖子或评论的额外参数。
- 上传文件 `uploadType`
    - `api` 使用上传接口 [/api/fresns/v1/file/upload](../file/upload.md) `uploadMode=file`
    - `page` 使用 WebView 访问 `uploadUrl` 参数的地址上传，规则见[回调返参](../../reference/callback/index.md)
    - `sdk` 使用 [s3 客户端 SDK 上传](../file/storage-token.md)，上传完成后将数据传递给接口入库 [/api/fresns/v1/file/upload](../file/upload.md) `uploadMode=fileInfo`

## 返回结果

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
                    "uploadType": "String / 上传类型: api, page, sdk",
                    "uploadUrl": "String / page 上传类型的地址",
                    "uploadNumber": "Number / 允许上传个数"
                },
                "video": {
                    "status": "Boolean / 是否启用视频",
                    "extensions": "String / 支持的扩展名，示例 wmv,rm,mov,mpeg,mp4,3gp,flv,avi,rmvb",
                    "inputAccept": "String / 支持的扩展名，示例 video/x-ms-wmv,application/vnd.rn-realmedia,video/quicktime,video/mpeg,video/mp4,video/3gpp,video/x-flv,video/x-msvideo,application/vnd.rn-realmedia-vbr",
                    "maxSize": "Number / 最大文件尺寸，单位 MB",
                    "maxTime": "Number / 最大文件时长，单位 秒",
                    "uploadType": "String / 上传类型: api, page, sdk",
                    "uploadUrl": "String / page 上传类型的地址",
                    "uploadNumber": "Number / 允许上传个数"
                },
                "audio": {
                    "status": "Boolean / 是否启用音频",
                    "extensions": "String / 支持的扩展名，示例 mp3,wav,m4a",
                    "inputAccept": "String / 支持的扩展名，示例 audio/mpeg,audio/x-wav,audio/mp4",
                    "maxSize": "Number / 最大文件尺寸，单位 MB",
                    "maxTime": "Number / 最大文件时长，单位 秒",
                    "uploadType": "String / 上传类型: api, page, sdk",
                    "uploadUrl": "String / page 上传类型的地址",
                    "uploadNumber": "Number / 允许上传个数"
                },
                "document": {
                    "status": "Boolean / 是否启用文档",
                    "extensions": "String / 支持的扩展名，示例 doc,docx,xls,xlsx,csv,ppt,pptx,pps,ppts,pdf,txt,md,markdown,rar,zip,7z,epub,mobi",
                    "inputAccept": "String / 支持的扩展名，示例 application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel",
                    "maxSize": "Number / 最大文件尺寸，单位 MB",
                    "uploadType": "String / 上传类型: api, page, sdk",
                    "uploadUrl": "String / page 上传类型的地址",
                    "uploadNumber": "Number / 允许上传个数"
                },
                "title": {
                    "status": "Boolean / 是否启用标题",
                    "required": "Boolean / 是否必填",
                    "show": "Boolean / 是否默认显示 input",
                    "length": "Number / 最大长度"
                },
                "mention": {
                    "status": "Boolean / 是否启用艾特",
                    "display": "Boolean / 工具栏是否显示艾特操作按钮"
                },
                "hashtag": {
                    "status": "Boolean / 是否启用话题",
                    "display": "Boolean / 工具栏是否显示话题操作按钮",
                    "format": "Number / 话题格式 1.单 # 2.双 #"
                },
                "extend": {
                    "status": "Boolean / 是否启用扩展",
                    "list": [
                        {
                            "fskey": "String / 应用 Fskey",
                            "icon": "String / 图标地址",
                            "name": "String / 名称",
                            "appUrl": "String / 应用访问地址",
                            "editorToolbar": "Boolean / 编辑器专用，是否在 toolbar 显示",
                            "editorNumber": "Number / 编辑器专用，可使用数量",
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
                    "mapUrl": "String / 地图 Web 页面"
                },
                "anonymous": "Boolean / 是否支持匿名",
                "contentLength": "Number / 内容最大长度"
            }
        },
        "publish": {
            "perm": {
                "draft": "Boolean / 是否可以创建新草稿",
                "publish": "Boolean / 是否有权限发表",
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

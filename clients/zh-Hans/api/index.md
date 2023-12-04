# API 总览

## 全局配置

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `GET` | /status.json<br>/fresns-api/v1/global/status | 客户端状态 |
| `GET` | /fresns-api/v1/global/configs | 配置信息 |
| `GET` | /fresns-api/v1/global/code-messages | 状态码信息 |
| `GET` | /fresns-api/v1/global/language-pack | 语言包信息 |
| `GET` | /fresns-api/v1/global/channels | 扩展频道 |
| `GET` | /fresns-api/v1/global/`{type}`/archives | 扩展档案配置 |
| `GET` | /fresns-api/v1/global/storage-token | 存储桶令牌 |
| `GET` | /fresns-api/v1/global/roles | 用户角色 |
| `GET` | /fresns-api/v1/global/`{type}`/content-types | 内容类型 |
| `GET` | /fresns-api/v1/global/stickers | 表情图 |

## 公共业务

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `GET` | /fresns-api/v1/common/ip-info | IP 信息 |
| `GET` | /fresns-api/v1/common/input-tips | 输入提示信息 |
| `GET` | /fresns-api/v1/common/callback | 回调返参查询 |
| `PUT` | /fresns-api/v1/common/update-device-token | 更新设备凭证 |
| `POST` | /fresns-api/v1/common/cmd-word | 命令字请求 |
| `POST` | /fresns-api/v1/common/extend-action | 扩展交互请求 |
| `POST` | /fresns-api/v1/common/upload-log | 上传日志 |
| `POST` | /fresns-api/v1/common/upload-file | 上传文件 |
| `GET` | /fresns-api/v1/common/file/`{fid}`/link | 文件下载链接 |
| `GET` | /fresns-api/v1/common/file/`{fid}`/users | 下载过文件的用户 |

## 账号

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `POST` | /fresns-api/v1/account/login | 登录 |
| `GET` | /fresns-api/v1/account/detail | 获取账号详情 |
| `GET` | /fresns-api/v1/account/wallet-records | 钱包交易记录 |
| `DELETE` | /fresns-api/v1/account/logout | 退出登录 |

## 用户

**功能**

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `POST` | /fresns-api/v1/user/auth | 用户登录 |
| `GET` | /fresns-api/v1/user/overview | 用户概览 |
| `GET` | /fresns-api/v1/user/extcredits-records | 用户扩展分值记录 |
| `PUT` | /fresns-api/v1/user/edit | 修改用户资料 |
| `POST` | /fresns-api/v1/user/mark | 操作标记 |
| `PUT` | /fresns-api/v1/user/mark-note | 标记备注 |

**互动**

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `GET` | /fresns-api/v1/user/list | 获取用户列表 |
| `GET` | /fresns-api/v1/user/`{uidOrUsername}`/detail | 获取用户详情 |
| `GET` | /fresns-api/v1/user/`{uidOrUsername}`/followers-you-follow | 获取用户认识的关注者 |
| `GET` | /fresns-api/v1/user/`{uidOrUsername}`/interaction/`{type}` | 获取用户互动的用户列表 |
| `GET` | /fresns-api/v1/user/`{uidOrUsername}`/mark/`{markType}`/`{listType}` | 获取用户标记的内容列表 |

## 消息

**通知**

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `GET` | /fresns-api/v1/notification/list | 获取消息列表 |
| `PUT` | /fresns-api/v1/notification/mark-as-read | 更新阅读状态 |
| `DELETE` | /fresns-api/v1/notification/delete | 删除消息 |

**对话**

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `GET` | /fresns-api/v1/conversation/list | 获取对话列表 |
| `GET` | /fresns-api/v1/conversation/`{cvid}`/detail | 获取对话详情 |
| `GET` | /fresns-api/v1/conversation/`{cvid}`/messages | 获取消息列表 |
| `PUT` | /fresns-api/v1/conversation/pin | 置顶对话 |
| `PUT` | /fresns-api/v1/conversation/mark-as-read | 更新阅读状态 |
| `POST` | /fresns-api/v1/conversation/send-message | 发送消息 |
| `DELETE` | /fresns-api/v1/conversation/delete | 删除对话或对话的消息 |

## 小组

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `GET` | /fresns-api/v1/group/tree | 获取树结构小组列表 |
| `GET` | /fresns-api/v1/group/list | 获取小组列表 |
| `GET` | /fresns-api/v1/group/`{gid}`/detail | 获取小组详情 |
| `GET` | /fresns-api/v1/group/`{gid}`/interaction/`{type}` | 获取小组互动的用户列表 |

## 话题

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `GET` | /fresns-api/v1/hashtag/list | 获取话题列表 |
| `GET` | /fresns-api/v1/hashtag/`{htid}`/detail | 获取话题详情 |
| `GET` | /fresns-api/v1/hashtag/`{htid}`/interaction/`{type}` | 获取话题互动的用户列表 |

## 地理

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `GET` | /fresns-api/v1/geotag/list | 获取地理列表 |
| `GET` | /fresns-api/v1/geotag/`{gtid}`/detail | 获取地理详情 |
| `GET` | /fresns-api/v1/geotag/`{gtid}`/interaction/`{type}` | 获取地理互动的用户列表 |

## 帖子

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `GET` | /fresns-api/v1/post/list | 获取帖子列表 |
| `GET` | /fresns-api/v1/post/timelines | 获取时间线的帖子列表 |
| `GET` | /fresns-api/v1/post/nearby | 获取附近的帖子列表 |
| `GET` | /fresns-api/v1/post/`{pid}`/detail | 获取帖子详情 |
| `GET` | /fresns-api/v1/post/`{pid}`/interaction/`{type}` | 获取帖子互动的用户列表 |
| `GET` | /fresns-api/v1/post/`{pid}`/users | 获取帖子的附属用户列表 |
| `GET` | /fresns-api/v1/post/`{pid}`/quotes | 获取帖子的引用它的帖子列表 |
| `GET` | /fresns-api/v1/post/`{pid}`/histories | 获取帖子的历史列表 |
| `GET` | /fresns-api/v1/post/history/`{hpid}`/detail | 获取历史帖子详情 |
| `DELETE` | /fresns-api/v1/post/`{pid}` | 删除帖子 |

## 评论

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `GET` | /fresns-api/v1/comment/list | 获取评论列表 |
| `GET` | /fresns-api/v1/comment/timelines | 获取时间线的评论列表 |
| `GET` | /fresns-api/v1/comment/nearby | 获取附近的评论列表 |
| `GET` | /fresns-api/v1/comment/`{cid}`/detail | 获取评论详情 |
| `GET` | /fresns-api/v1/comment/`{cid}`/interaction/`{type}` | 获取评论互动的用户列表 |
| `GET` | /fresns-api/v1/comment/`{cid}`/histories | 获取评论的历史列表 |
| `GET` | /fresns-api/v1/comment/history/`{hcid}`/detail | 获取历史评论详情 |
| `DELETE` | /fresns-api/v1/comment/`{cid}` | 删除评论 |

## 编辑器

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `POST` | /fresns-api/v1/editor/`{type}`/quick-publish | 快速发表 |
| `GET` | /fresns-api/v1/editor/`{type}`/config | 编辑器配置信息 |
| `GET` | /fresns-api/v1/editor/`{type}`/drafts | 获取草稿列表 |
| `POST` | /fresns-api/v1/editor/`{type}`/create | 创建草稿 |
| `POST` | /fresns-api/v1/editor/`{type}`/generate/`{fsid}` | 生成编辑草稿 |
| `GET` | /fresns-api/v1/editor/`{type}`/`{did}` | 获取草稿详情 |
| `PUT` | /fresns-api/v1/editor/`{type}`/`{did}` | 更新草稿内容 |
| `POST` | /fresns-api/v1/editor/`{type}`/`{did}` | 提交发表（或审核） |
| `PATCH` | /fresns-api/v1/editor/`{type}`/`{did}` | 撤回审核中草稿 |
| `DELETE` | /fresns-api/v1/editor/`{type}`/`{did}` | 删除草稿 |

## 搜索

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `GET` | /fresns-api/v1/search/users | 用户 |
| `GET` | /fresns-api/v1/search/groups | 小组 |
| `GET` | /fresns-api/v1/search/hashtags | 话题 |
| `GET` | /fresns-api/v1/search/posts | 帖子 |
| `GET` | /fresns-api/v1/search/comments | 评论 |

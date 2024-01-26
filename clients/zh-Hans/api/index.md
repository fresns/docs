# API 总览

## 全局配置

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `GET` | /status.json<br>/api/fresns/v1/global/status | 客户端状态 |
| `GET` | /api/fresns/v1/global/configs | 配置信息 |
| `GET` | /api/fresns/v1/global/language-pack | 语言包信息 |
| `GET` | /api/fresns/v1/global/channels | 扩展频道 |
| `GET` | /api/fresns/v1/global/`{type}`/archives | 扩展档案配置 |
| `GET` | /api/fresns/v1/global/`{type}`/content-types | 内容类型 |
| `GET` | /api/fresns/v1/global/roles | 用户角色 |
| `GET` | /api/fresns/v1/global/stickers | 表情图 |

## 公共业务

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `GET` | /api/fresns/v1/common/ip-info | IP 信息 |
| `GET` | /api/fresns/v1/common/input-tips | 输入提示信息 |
| `GET` | /api/fresns/v1/common/callback | 回调返参查询 |
| `POST` | /api/fresns/v1/common/cmd-word | 命令字请求 |

## 文件

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `GET` | /api/fresns/v1/file/storage-token | 存储桶令牌 |
| `POST` | /api/fresns/v1/file/uploads | 上传文件 |
| `PATCH` | /api/fresns/v1/file/`{fid}`/warning | 更新文件警告 |
| `GET` | /api/fresns/v1/file/`{fid}`/link | 文件下载链接 |
| `GET` | /api/fresns/v1/file/`{fid}`/users | 下载过文件的用户 |

## 账号

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `POST` | /api/fresns/v1/account/auth-token | 账号登录 |
| `DELETE` | /api/fresns/v1/account/auth-token | 退出登录 |
| `GET` | /api/fresns/v1/account/detail | 获取账号详情 |
| `GET` | /api/fresns/v1/account/wallet-records | 钱包交易记录 |

## 用户

**功能**

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `POST` | /api/fresns/v1/user/auth-token | 用户登录 |
| `GET` | /api/fresns/v1/user/overview | 用户概览 |
| `GET` | /api/fresns/v1/user/extcredits-records | 用户扩展分值记录 |
| `PATCH` | /api/fresns/v1/user/profile | 修改用户资料 |
| `PATCH` | /api/fresns/v1/user/device-token | 更新设备凭证 |
| `POST` | /api/fresns/v1/user/mark | 操作标记 |
| `PATCH` | /api/fresns/v1/user/mark-note | 标记备注 |
| `POST` | /api/fresns/v1/user/extend-action | 操作扩展交互 |

**互动**

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `GET` | /api/fresns/v1/user/list | 获取用户列表 |
| `GET` | /api/fresns/v1/user/`{uidOrUsername}`/detail | 获取用户详情 |
| `GET` | /api/fresns/v1/user/`{uidOrUsername}`/followers-you-follow | 获取用户认识的关注者 |
| `GET` | /api/fresns/v1/user/`{uidOrUsername}`/interaction/`{type}` | 获取用户互动的用户列表 |
| `GET` | /api/fresns/v1/user/`{uidOrUsername}`/mark/`{markType}`/`{listType}` | 获取用户标记的内容列表 |

## 消息

**通知**

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `GET` | /api/fresns/v1/notification/list | 获取消息列表 |
| `PATCH` | /api/fresns/v1/notification/read-status | 更新阅读状态 |
| `DELETE` | /api/fresns/v1/notification/messages | 删除消息 |

**对话**

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `GET` | /api/fresns/v1/conversation/list | 获取对话列表 |
| `GET` | /api/fresns/v1/conversation/`{uidOrUsername}`/detail | 获取对话详情 |
| `GET` | /api/fresns/v1/conversation/`{uidOrUsername}`/messages | 获取消息列表 |
| `PATCH` | /api/fresns/v1/conversation/`{uidOrUsername}`/pin | 置顶对话 |
| `PATCH` | /api/fresns/v1/conversation/`{uidOrUsername}`/read-status | 更新阅读状态 |
| `DELETE` | /api/fresns/v1/conversation/`{uidOrUsername}` | 删除对话或消息 |
| `POST` | /api/fresns/v1/conversation/message | 发送消息 |

## 小组

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `GET` | /api/fresns/v1/group/tree | 获取树结构小组列表 |
| `GET` | /api/fresns/v1/group/list | 获取小组列表 |
| `GET` | /api/fresns/v1/group/`{gid}`/detail | 获取小组详情 |
| `GET` | /api/fresns/v1/group/`{gid}`/creator | 获取小组创建者 |
| `GET` | /api/fresns/v1/group/`{gid}`/admins | 获取小组管理员 |
| `GET` | /api/fresns/v1/group/`{gid}`/interaction/`{type}` | 获取小组互动的用户列表 |

## 话题

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `GET` | /api/fresns/v1/hashtag/list | 获取话题列表 |
| `GET` | /api/fresns/v1/hashtag/`{htid}`/detail | 获取话题详情 |
| `GET` | /api/fresns/v1/hashtag/`{htid}`/interaction/`{type}` | 获取话题互动的用户列表 |

## 地理

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `GET` | /api/fresns/v1/geotag/list | 获取地理列表 |
| `GET` | /api/fresns/v1/geotag/`{gtid}`/detail | 获取地理详情 |
| `GET` | /api/fresns/v1/geotag/`{gtid}`/interaction/`{type}` | 获取地理互动的用户列表 |

## 帖子

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `GET` | /api/fresns/v1/post/list | 获取帖子列表 |
| `GET` | /api/fresns/v1/post/timelines | 获取时间线的帖子列表 |
| `GET` | /api/fresns/v1/post/nearby | 获取附近的帖子列表 |
| `GET` | /api/fresns/v1/post/`{pid}`/detail | 获取帖子详情 |
| `GET` | /api/fresns/v1/post/`{pid}`/interaction/`{type}` | 获取帖子互动的用户列表 |
| `GET` | /api/fresns/v1/post/`{pid}`/users | 获取帖子的附属用户列表 |
| `GET` | /api/fresns/v1/post/`{pid}`/quotes | 获取帖子的引用它的帖子列表 |
| `GET` | /api/fresns/v1/post/`{pid}`/histories | 获取帖子的历史列表 |
| `GET` | /api/fresns/v1/post/history/`{hpid}`/detail | 获取历史帖子详情 |
| `DELETE` | /api/fresns/v1/post/`{pid}` | 删除帖子 |

## 评论

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `GET` | /api/fresns/v1/comment/list | 获取评论列表 |
| `GET` | /api/fresns/v1/comment/timelines | 获取时间线的评论列表 |
| `GET` | /api/fresns/v1/comment/nearby | 获取附近的评论列表 |
| `GET` | /api/fresns/v1/comment/`{cid}`/detail | 获取评论详情 |
| `GET` | /api/fresns/v1/comment/`{cid}`/interaction/`{type}` | 获取评论互动的用户列表 |
| `GET` | /api/fresns/v1/comment/`{cid}`/histories | 获取评论的历史列表 |
| `GET` | /api/fresns/v1/comment/history/`{hcid}`/detail | 获取历史评论详情 |
| `DELETE` | /api/fresns/v1/comment/`{cid}` | 删除评论 |

## 编辑器

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `GET` | /api/fresns/v1/editor/`{type}`/configs | 编辑器配置信息 |
| `POST` | /api/fresns/v1/editor/`{type}`/publish | 直接发表 |
| `POST` | /api/fresns/v1/editor/`{type}`/edit/`{fsid}` | 编辑帖子或评论 |
| `GET` | /api/fresns/v1/editor/`{type}`/drafts | 获取草稿列表 |
| `POST` | /api/fresns/v1/editor/`{type}`/draft | 创建空草稿 |
| `GET` | /api/fresns/v1/editor/`{type}`/draft/`{did}` | 获取草稿详情 |
| `PATCH` | /api/fresns/v1/editor/`{type}`/draft/`{did}` | 更新草稿内容 |
| `POST` | /api/fresns/v1/editor/`{type}`/draft/`{did}` | 提交发表（或审核） |
| `PUT` | /api/fresns/v1/editor/`{type}`/draft/`{did}` | 撤回审核中草稿 |
| `DELETE` | /api/fresns/v1/editor/`{type}`/draft/`{did}` | 删除草稿 |

## 搜索

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `GET` | /api/fresns/v1/search/users | 用户 |
| `GET` | /api/fresns/v1/search/groups | 小组 |
| `GET` | /api/fresns/v1/search/hashtags | 话题 |
| `GET` | /api/fresns/v1/search/geotags | 地理 |
| `GET` | /api/fresns/v1/search/posts | 帖子 |
| `GET` | /api/fresns/v1/search/comments | 评论 |

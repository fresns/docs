# API 总览

## 全局配置

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `GET` | /api/v2/global/configs | 全局配置信息 |
| `GET` | /api/v2/global/code-messages | 状态码信息 |
| `GET` | /api/v2/global/`{type}`/archives | 扩展档案配置 |
| `GET` | /api/v2/global/upload-token | 上传用的令牌 |
| `GET` | /api/v2/global/roles | 用户角色 |
| `GET` | /api/v2/global/maps | 地图服务商 |
| `GET` | /api/v2/global/`{type}`/content-types | 内容类型 |
| `GET` | /api/v2/global/stickers | 表情图 |
| `GET` | /api/v2/global/block-words | 阻止词 |

## 公共业务

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `GET` | /api/v2/common/input-tips | 输入提示信息 |
| `GET` | /api/v2/common/callback | 回调返参查询 |
| `POST` | /api/v2/common/send-verify-code | 发送验证码 |
| `POST` | /api/v2/common/upload-log | 上传日志 |
| `POST` | /api/v2/common/upload-file | 上传文件 |
| `GET` | /api/v2/common/file/`{fid}`/link | 文件下载链接 |
| `GET` | /api/v2/common/file/`{fid}`/users | 下载过文件的用户 |

## 账号

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `POST` | /api/v2/account/register | 注册 |
| `POST` | /api/v2/account/login | 登录 |
| `PUT` | /api/v2/account/reset-password | 重置密码 |
| `GET` | /api/v2/account/detail | 获取账号详情 |
| `GET` | /api/v2/account/wallet-logs | 钱包交易记录 |
| `POST` | /api/v2/account/verify-identity | 身份验证 |
| `PUT` | /api/v2/account/edit | 修改账号资料 |
| `DELETE` | /api/v2/account/logout | 退出登录 |
| `POST` | /api/v2/account/apply-delete | 申请删除账号 |
| `POST` | /api/v2/account/recall-delete | 撤销删除申请 |

## 用户

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `GET` | /api/v2/user/list | 获取用户列表 |
| `GET` | /api/v2/user/`{uidOrUsername}`/detail | 获取用户详情 |
| `GET` | /api/v2/user/`{uidOrUsername}`/followers-you-follow | 获取用户认识的关注者 |
| `GET` | /api/v2/user/`{uidOrUsername}`/interaction/`{type}` | 获取用户互动的用户列表 |
| `GET` | /api/v2/user/`{uidOrUsername}`/mark/`{markType}`/`{listType}` | 获取用户标记的内容列表 |
| `POST` | /api/v2/user/auth | 用户登录 |
| `GET` | /api/v2/user/panel | 用户面板 |
| `PUT` | /api/v2/user/edit | 修改用户资料 |
| `POST` | /api/v2/user/mark | 操作标记 |
| `PUT` | /api/v2/user/mark-note | 标记备注 |

## 消息

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `GET` | /api/v2/notification/list | [通知]获取消息列表 |
| `PUT` | /api/v2/notification/mark-as-read | [通知]更新阅读状态 |
| `DELETE` | /api/v2/notification/delete | [通知]删除消息 |
| `GET` | /api/v2/conversation/list | [对话]获取对话列表 |
| `GET` | /api/v2/conversation/`{conversationId}`/detail | [对话]获取对话详情 |
| `GET` | /api/v2/conversation/`{conversationId}`/messages | [对话]获取消息列表 |
| `PUT` | /api/v2/conversation/pin | [对话]置顶对话 |
| `PUT` | /api/v2/conversation/mark-as-read | [对话]更新阅读状态 |
| `POST` | /api/v2/conversation/send-message | [对话]发送消息 |
| `DELETE` | /api/v2/conversation/delete | [对话]删除对话或对话的消息 |

## 小组

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `GET` | /api/v2/group/tree | 获取树结构小组列表 |
| `GET` | /api/v2/group/categories | 获取小组分类 |
| `GET` | /api/v2/group/list | 获取小组列表 |
| `GET` | /api/v2/group/`{gid}`/detail | 获取小组详情 |
| `GET` | /api/v2/group/`{gid}`/interaction/`{type}` | 获取小组互动的用户列表 |

## 话题

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `GET` | /api/v2/hashtag/list | 获取话题列表 |
| `GET` | /api/v2/hashtag/`{hid}`/detail | 获取话题详情 |
| `GET` | /api/v2/hashtag/`{hid}`/interaction/`{type}` | 获取话题互动的用户列表 |

## 帖子

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `GET` | /api/v2/post/list | 获取帖子列表 |
| `GET` | /api/v2/post/follow/`{type}` | 获取关注对象的帖子列表 |
| `GET` | /api/v2/post/nearby | 获取位置附近的帖子列表 |
| `GET` | /api/v2/post/`{pid}`/detail | 获取帖子详情 |
| `GET` | /api/v2/post/`{pid}`/interaction/`{type}` | 获取帖子互动的用户列表 |
| `GET` | /api/v2/post/`{pid}`/user-list | 获取帖子的附属用户列表 |
| `GET` | /api/v2/post/`{pid}`/logs | 获取帖子的日志列表 |
| `GET` | /api/v2/post/`{pid}`/log/`{logId}` | 获取帖子日志详情 |
| `DELETE` | /api/v2/post/`{pid}` | 删除帖子 |

## 评论

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `GET` | /api/v2/comment/list | 获取评论列表 |
| `GET` | /api/v2/comment/follow/`{type}` | 获取关注对象的评论列表 |
| `GET` | /api/v2/comment/nearby | 获取位置附近的评论列表 |
| `GET` | /api/v2/comment/`{cid}`/detail | 获取评论详情 |
| `GET` | /api/v2/comment/`{cid}`/interaction/`{type}` | 获取评论互动的用户列表 |
| `GET` | /api/v2/comment/`{cid}`/logs | 获取评论的日志列表 |
| `GET` | /api/v2/comment/`{cid}`/log/`{logId}` | 获取评论日志详情 |
| `DELETE` | /api/v2/comment/`{pid}` | 删除评论 |

## 编辑器

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `POST` | /api/v2/editor/`{type}`/quick-publish | 快速发表 |
| `GET` | /api/v2/editor/`{type}`/config | 编辑器配置信息 |
| `GET` | /api/v2/editor/`{type}`/drafts | 获取草稿列表 |
| `POST` | /api/v2/editor/`{type}`/create | 创建草稿 |
| `POST` | /api/v2/editor/`{type}`/generate/`{fsid}` | 生成编辑草稿 |
| `GET` | /api/v2/editor/`{type}`/`{draftId}` | 获取草稿详情 |
| `PUT` | /api/v2/editor/`{type}`/`{draftId}` | 更新草稿内容 |
| `POST` | /api/v2/editor/`{type}`/`{draftId}` | 提交发表（或审核） |
| `PATCH` | /api/v2/editor/`{type}`/`{draftId}` | 撤回审核中草稿 |
| `DELETE` | /api/v2/editor/`{type}`/`{draftId}` | 删除草稿 |

## 搜索

| 请求方式 | 接口路径 | 描述 |
| --- | --- | --- |
| `GET` | /api/v2/search/users | 用户 |
| `GET` | /api/v2/search/groups | 小组 |
| `GET` | /api/v2/search/hashtags | 话题 |
| `GET` | /api/v2/search/posts | 帖子 |
| `GET` | /api/v2/search/comments | 评论 |

# 更新记录

Fresns 主程序所有版本更新日志都将记录在这个文件中。


## 2.16.0 (2023-06-23)

### Added
- API: 新增站点状态文件 `/status.json`
- Panel: 新增客户端状态配置 `管理面板 -> 客户端 -> 状态`
- Panel: 应用中心新增下载操作

### Fixes
- Words: 检测期末数值的记录查询问题
- Words: 互联创建账号时 `connectToken` 为空时报错
- Words: 修复上传日志验证 fskey 导致执行异常
- Helpers: 域名提取兼容处理失败
- Utilities: 修复链接替换的控制失效

### BREAKING CHANGES
- Data: `plugin_callbacks` 插件回调表字段调整
    - 字段 `is_use` 修改为 `is_used`
    - 字段 `use_plugin_fskey` 修改为 `used_plugin_fskey`


## 2.15.0 (2023-06-12)

### Fixes
- Panel: 安装插件输出信息视图问题
- API: 修复接口请求数据插件时 `body` 为空的问题

### BREAKING CHANGES
- Data: `account_connects` 账号互联表字段调整
    - 字段 `connect_id` 修改为 `connect_platform_id`
    - 字段 `connect_token` 修改为 `connect_account_id`，比如 github id
    - 字段 `connect_token` 的用途修改为凭证平台的请求 token，比如 github token
- Words: 互联凭证相关命令字调整
    - 命令字 `createAccount` 修改数组参数 `connectInfo`
    - 命令字 `setAccountConnect` 修改参数 `connectId` 和 `connectToken`
    - 命令字 `disconnectAccountConnect` 修改参数 `connectId` 修改为 `connectPlatformId`
    - 修改后的新介绍请阅读官网文档。
- Panel: 重构扩展应用安装方式，用户无需选择插件或主题，由程序自行判断
- Panel: 支持一键安装扩展应用，无需用户复制操作


## 2.14.0 (2023-05-30)

### Added
- API: 新增频道扩展接口 `/api/v2/global/channels`
- Panel: 新增频道扩展配置功能
- Data: 用户表新增最后活跃时间字段 `users->last_activity_at`
- Words: 增加「设置用户徽章」命令字 `setUserBadge`
- Words: 增加「清除用户徽章」命令字 `clearUserBadge`
- Words: 增加「清除用户所有徽章」命令字 `clearUserAllBadges`

### Fixes
- API: 引用帖子的过滤缓存问题
- API: 删除对话消息后未清理对话模型缓存
- API: 查看小组里帖子时，角色白名单未生效
- Panel: 小组封面图编辑样式问题

### BREAKING CHANGES
- Panel: 仪表盘数据采用异步加载


## 2.13.2 (2023-05-23)

### Fixes
- Utilities: 订阅用户活跃的队列问题


## 2.13.1 (2023-05-23)

### Fixes
- Utilities: 修复获取角色缓存问题


## 2.13.0 (2023-05-23)

### Added
- API: 用户、小组、话题、帖子、评论，数据结构增加 `viewCount` 参数
- API: 五种内容列表页支持 `view` 筛选和排序参数
- Words: 订阅命令字新增类型 `4` 查看事件通知

### Fixes
- Utilities: 发表触发通知失效
- Words: 账号互联凭证查重时缺少 `connectId`
- Words: 用户扩展分值 ID 错误 `extcreditsId`

### BREAKING CHANGES
- Words: 订阅功能命令字 `subTableName` 参数修改为 `subject`
- Words: 用户扩展分值命令字 `extcredits` 参数修改为 `extcreditsId`


## 2.12.0 (2023-05-18)

### Added
- API: 帖子和评论数据的插件服务可单独配置
- API: 消息通知增加「引用」类型
- API: 消息通知支持提及者互动通知（别人内容提及了我，然后互动操作通知我）
- API: 评论全量列表不输出仅作者可见评论
- API: 用户、小组、话题、帖子、评论，列表支持随机排序 `orderType=random`
- Words: 新增「检测 API 请求标头」命令字 `checkHeaders`
- Words: 新增「设置账号互联凭证」命令字 `setAccountConnect`
- Words: 新增「解除账号互联凭证」命令字 `disconnectAccountConnect`

### Fixes
- Panel: 主题无法卸载
- API: 地图经纬度存反了
- API: 搜索命令字错误
- API: 内容详情页命令字缺少 fsid 参数
- Utilities: 私有模式白名单数组为空时 `in_array` 报错

### BREAKING CHANGES
- API: 消息列表接口 `actionCid` 修改为 `contentFsid`
- API: 互动列表修改类型 `type` 参数值 `likers`,`dislikers`,`followers`,`blockers`
    - /api/v2/user/`{uidOrUsername}`/interaction/`{type}`
    - /api/v2/group/`{gid}`/interaction/`{type}`
    - /api/v2/hashtag/`{hid}`/interaction/`{type}`
    - /api/v2/post/`{pid}`/interaction/`{type}`
    - /api/v2/comment/`{cid}`/interaction/`{type}`
- API: 上传文件接口，如果上传的是用户图，则自动更新用户资料（头像图或条幅图），无需再请求用户修改资料接口。


## 2.11.2 (2023-05-08)

### Fixes
- API: 帖子和评论数据的插件服务配置


## 2.11.1 (2023-05-08)

### Fixes
- API: 帖子内容预览的百分比计算不准
- Data: 语言包 key 名错误
- Data: 升级功能的数据冲突


## 2.11.0 (2023-05-06)

### Added
- API: 编辑器上传文件判断内容类型是否开启上传
- API: 钱包日志接口增加 `user` 参数
- API: 新增「用户扩展分值记录」接口 `/api/v2/user/extcredits-logs`
- Words: 增加「设置用户扩展分值」命令字 `setUserExtcredits`
- Data: 新增数据表 `user_extcredits_logs`
- Subscribe: 订阅数据变化支持 `updated` 类型 `SubscribeUtility::CHANGE_TYPE_UPDATED`
- Panel: 增加「用户扩展分值」设置功能
- Panel: 密钥支持创建只读密钥
- Console: 支持在终端中安装 Fresns

### Fixes
- API: 非公开评论没有隐藏附件内容
- Panel: 升级功能的迁移数据冲突
- Panel: 角色权限配置视图问题

### BREAKING CHANGES
- API: 帖子和评论数据结构 `creator` 参数修改为 `author`
- 框架: 插件管理器 `unikey` 修改为 `fskey`
- 框架: 插件数据 `pluginUnikey` 修改为 `pluginFskey`
- 框架: 命令字管理器 `unikeyName` 修改为 `fsKeyName`


## 2.10.2 (2023-04-27)

### Fixes
- Words: `verifyUrlAuthorization` 验证账号或用户登录
- Words: `ipInfo` 修正冗余的 DTO 配置


## 2.10.1 (2023-04-27)

### Fixes
- API: 帖子授权参数错误
- Words: 待审核中的草稿无法发表


## 2.10.0 (2023-04-27)

### Added
- API: 私有模式支持配置白名单角色
- API: 通知消息和私信会话接口新增人性化时间参数 `timeAgo`
- API: 角色列表接口增加 `type` 参数
- Words: 校验账号命令字支持互联凭证 `verifyAccount`
- Words: 增加「钱包密码验证」命令字 `walletCheckPassword`
- Words: 增加「添加内容更多信息」命令字 `addContentMoreInfo`
- Words: 增加「设置内容置顶」命令字 `setContentSticky`
- Words: 增加「设置内容精华」命令字 `setContentDigest`
- Words: 增加「设置内容禁止删除」命令字 `setContentCloseDelete`
- Words: 增加「设置帖子授权」命令字 `setPostAuth`
- Words: 增加「设置帖子附属用户」命令字 `setPostAffiliateUser`
- Words: 增加「设置评论扩展按钮」命令字 `setCommentExtendButton`
- Words: 增加「设置用户有效期」命令字 `setUserExpiryDatetime`
- Words: 增加「设置用户的小组有效期」命令字 `setUserGroupExpiryDatetime`

### Fixes
- API: 私有模式下未兼容有效期为 null
- API: 私有模式下 IP 接口无法请求
- API: 账号和用户资料编辑，空请求时不执行数据操作
- API: 评论的 `replyToComment` 数据错误
- Words: 钱包交易命令字 `originAid` 和 `originUid` 参数错误
- Helpers: 配置文件为空时报错

### BREAKING CHANGES
- API: `/api/v2/common/file/{fid}/users`
    - `downloadTime` 修改为 `datetime`
    - `downloadTimeFormat` 修改为 `timeAgo`
    - `downloadUser` 修改为 `user`
- API: 帖子和评论数据结构修改编辑控件参数名
    - `editStatus` 修改为 `editControls`
- API: 编辑器里草稿详情参数修改
    - 草稿是否为编辑状态，参数名由 `edit` 修改为 `editControls`
    - 判断是否为编辑草稿的参数名由 `isEdit` 修改为 `isEditDraft`


## 2.9.0 (2023-04-22)

### Added
- Panel: 角色权限可配置每日发表数量上限

### Fixes
- API: 上传文件接口未判断私信上传文件类型
- API: 评论信息 `replyToComment` 参数格式错误
- API: 用户 mark 接口未判断小组是否有权关注
- Words: 修复增加账号命令字的互联信息错误
- Words: 发表评论时检测空草稿错误
- Words: 钱包命令字未注册
- Model: 帖子和评论附属表缺失时报错

### BREAKING CHANGES
- API: 帖子和评论数据结构修改创建和修改的键名
    - `createTime` 修改为 `createdDatetime`
    - `createTimeFormat` 修改为 `createdTimeAgo`
    - `editTime` 修改为 `editedDatetime`
    - `editTimeFormat` 修改为 `editedTimeAgo`
    - `editCount` 修改为 `editedCount`
    - `latestCommentTime` 修改为 `latestCommentDatetime`
    - `latestCommentTimeFormat` 修改为 `latestCommentTimeAgo`
- Install: 安装功能由 AlpineJS 方案修改为 jQuery
- Utilities: 弃用数字版本号，仅采用语义版本号
- Marketplace: 应用市场有接口调整，升级前不适配，将无法使用应用市场


## 2.8.1 (2023-04-15)

### Fixes
- Data: 修复数据表字段错误

### BREAKING CHANGES
- Data: 优化数据索引
- Panel: 移除 cookie.js 文件


## 2.8.0 (2023-04-14)

### Added
- Data: 支持五种数据库 `MySQL`, `MariaDB`, `PostgreSQL`, `SQL Server`, `SQLite`
- API: 帖子数据结构新增 `isMultiLevelQuote` 和 `quotedPost` 参数
- API: 编辑器接口增加 `postQuotePid` 参数
- API: 新增 `/api/v2/common/ip-info` 接口
- API: 新增 `/api/v2/post/{pid}/quotes` 接口
- Panel: 用户昵称可以配置是否为唯一值
- Panel: 话题可以配置长度限制
- Panel: 话题解析可以自定义正则表达式
- Panel: 小组非公开模式支持角色白名单

### Fixes
- API: 互动操作 fsid 格式判断未兼容话题 hid
- API: 密码格式的特殊符号正则匹配错误
- API: 缺少实名认证的语言标识和内容
- API: 角色发表开启审核但是未检测
- Helper: maskName 判断为空的键名错误
- Utility: 话题限制 20 个字符，避免超长话题
- Models: 帖子和评论未声明 map json 字段

### BREAKING CHANGES
- API: 快速发表接口，`file` 参数修改为 `image`
- API: 评论数据结构 `post` 键名修改为 `replyToPost`
- API: 评论数据结构删除 `pid` 参数
- API: 帖子和评论数据结构移除 `fileCount` 参数
- API: 帖子和评论数据结构，`ipLocation` 参数移动到 `moreJson` 参数中
- API: 小组信息结构增加 `canViewContent` 参数
- Marketplace: 不区分中国和国际，统一应用市场
- Composer: 不再使用镜像环境，采用官方源


## 2.7.2 (2023-03-05)

### Fixes
- API: 互动操作的缓存计数未清理
- API: 私有模式的中间件配置
- Helper: 域名后缀未去重，导致重复时异常
- Words: 账号注销的命令字字段更新问题

### Changed
- API: 语言包新增三个私有模式文案
- API: 配置接口 `/api/v2/global/configs` 取消翻页功能
- 框架: fresns/plugin-manager 升级到 v2.4.6


## 2.7.1 (2023-03-02)

### Fixes
- Panel: 状态码无法指定 `0` 参数
- Panel: 表单组件 input url 类型，填写路径时无法保存问题
- Panel: 升级状态前后端不同步问题
- API: 评论的帖子删除后，访问评论报错
- API: 评论的子级预览的参数过滤被缓存问题
- API: 防盗链开启后，内容缓存时间处理问题

### Changed
- Panel: 「物理升级」更名为「手动升级」
- Panel: 邮箱和手机号登录支持由主程序管理
- API: 编辑器自定义参数的支持
- Data: 默认首页修改为 `post`
- Install: 移除 PHP 扩展 `exif` 要求


## 2.7.0 (2023-02-26)

### Added
- API: 列表接口新增创建日期的周期参数，支持今天、昨天、本周、上周、本月、上月、今年、上年
- API: 通知消息列表可以过滤 `actionUser` 和 `actionInfo` 键值对
- API: 会话消息列表可以过滤 `user` 键值对
- API: 用户、小组、话题、帖子、评论，详情页接口支持过滤键值对
- API: 帖子列表支持过滤小组和话题
- API: 内容支持文件混排 `[file:fid]`
- API: 小组支持分类信息
- API: 帖子和评论列表，支持输出子级多级内容
- 系统: 适配代理环境，新增 `.env` 配置 `TRUSTED_PROXIES` 多个以英文逗号隔开

### Fixes
- API: 键值对过滤功能部分接口未生效
- API: 布尔型参数 false 未生效问题
- API: 客户端乱传语言标签的兼容问题
- Panel: 优化阻止词导入和导出，解决兼容问题

### Changed
- API: 列表接口的用户计数数据采用缓存
- 系统: 系统网址取消后台配置，采用 .env 配置值
- 系统: 重构缓存标签机制
- 框架: laravel/framework 升级到 v10

### BREAKING CHANGES
- API: 帖子和评论删除 following 参数，移植到搜索接口
- API: 评论数据结构移除`replyToUser` 参数，新增 `replyToComment` 参数
- API: 文件信息移除 `documentUrl` 参数，封装 `documentPreviewUrl` 参数的 URL 组装方法 `FileHelper::fresnsFileDocumentPreviewUrl()`
- API: 输入提示 `common/input-tips` 接口，移除 `nickname` 参数
- 框架: PHP 版本要求最低 8.1


## 2.6.1 (2023-02-17)

### Fixes
- API: 阻止词接口参数判断语法错误
- API: 消息列表数组倒序时格式错误
- API: 列表接口键值对过滤功能错误
- API: 内容作者为空时，补位停用参数
- API: 配置项插件 URL 为空时补位插件 Unikey
- Panel: 修改内容类型的数据来源描述文案


## 2.6.0 (2023-02-16)

### Added
- Model: 音视频支持处理路径配置
- API: 对话消息支持排序参数
- API: 用户封禁和注销的内容处理方案
- API: 各类列表接口支持自定义过滤参数
- Panel: 可以启用或停用艾特
- Panel: 可以启用或停用话题
- 框架: 新增开发者模式（仪表盘->设置）
- 框架: 兼容反向代理部署

### Fixes
- Install: 修复 Windows 系统安装失败问题
- API: 小组发表权限字符串数字导致权限验证不识别
- API: 帖子和评论列表页过滤 HTML 标签，避免摘要截断导致页面结构冲突
- API: 本地存储的文件域名未使用存储配置
- API: 发表特殊规则日期循环报错
- API: 编辑时间限制问题和时间格式人性化
- API: 编辑超时还能提交编辑
- Helper: 用户模型缓存清理问题
- Helper: 文件开启防盗链后缓存时间不准

### Changed
- API: 账号和用户的资料修改不使用缓存模型，避免修改失败
- API: 改良人性化时间计算，增加“年”单位配置
- API: 私有小组可以获取详情介绍
- Panel: 存储插件不支持 Plugin Page 上传时，编辑器配置隐藏选项
- Panel: 插件安装和更新失败后，输出错误信息
- 框架: laravel/framework 升级到 v9.52.0
- 框架: fresns/plugin-manager 升级到 v2.4.5
- 框架: fresns/theme-manager 升级到 v2.1.2

### BREAKING CHANGES
- Data: 文件表 `files` 移除 `video_gif_path` 字段
- Data: 文件表 `files` 字段 `video_cover_path` 修改为 `video_poster_path`


## 2.5.0 (2023-02-09)

### Added
- API: 通知消息支持标注已读全部类型的消息
- API: 同一个评论产生的回复，如果旧通知已读则再次通知

### Fixes
- API: 删除通知和会话消息，未处理用户面板缓存
- API: 通知消息列表 `status` 布尔参数 0 未被接受
- API: 帖子删除后，还能发表评论
- API: 编辑器配置参数的数字值问题
- Helper: 文件使用的缓存清理
- Panel: 插件卸载失败
- Utilities: 修复文件逻辑删除的封装功能

### Changed
- Utilities: 优化文件上传功能
- 框架: laravel/framework 升级到 v9.51.0
- 框架: fresns/cmd-word-manager 升级到 v1.3.1
- 框架: fresns/plugin-manager 升级到 v2.4.2
- 框架: fresns/theme-manager 升级到 v2.1.1
- 框架: 使用迁移作为数据变更的升级方案

### BREAKING CHANGES
- Data: Fresns 项目不再使用远程资源，局域网也可以使用。
- Data: 配置图和表情图不再使用 Fresns 远程链接，请各位尽快替换。


## 2.4.0 (2023-02-01)

### Added
- API: 当帖子或评论被禁用时，仅作者自己可见
- API: 增加白名单和黑名单 CheckHeader 中间件
- API: 快速发表请求返回草稿 ID 或 fsid
- Panel: 登录后台，可被动触发版本检测

### Fixes
- API: 关注列表的筛选条件必须为数组格式
- API: 内容中没有艾特记录，但也解析了 @ 符号
- API: 回复权配置后，自己无法回复自己帖子
- API: 刚发表的内容，人性化时间为负数

### Changed
- Data: 回调返参查询键由 UUID 改为 ULID
- API: 话题以 slug 为唯一值
- API: headers 登录检测使用黑名单机制
- API: 优化上传文件接口
- Panel: 插件管理，名称链接到应用市场
- 框架: laravel/framework 升级到 v9.49.0
- 框架: fresns/plugin-manager 升级到 v2.4.0


## 2.3.1 (2023-01-21)

### Fixes
- Console: 修复升级命令加载问题

### Changed
- Console: 重构升级功能的数据更新


## 2.3.0 (2023-01-21)

### Added
- Helper: 获取插件主机地址 `PluginHelper::fresnsPluginHostByUnikey($unikey);`

### Fixes
- Console: 编号升级指令无法被执行
- Console: 主程序定时任务未执行问题

### Changed
- Console: 优化命令字 schedule
- Helper: 修改 artisan facades
- Helper: 调整扩展缓存 tag


## 2.2.0 (2023-01-20)

### Added
- Data: 文件表 `files` 新增 `disk` 字段
- Helper: 文件信息增加“文件磁盘”判断
- Command: 升级命令增加 `storage:link` 指令

### Fixes
- API: 登录错误日志计数判断错误
- Subscribe: 兼容订阅项为空

### Changed
- Words: 重构验证路径凭证命令字
- 框架: 由引擎接管 404 页面
- 框架: fresns/cmd-word-manager 升级到 v1.3.0
- 框架: fresns/plugin-manager 升级到 v2.3.4

### BREAKING CHANGES
- API: 重构 headers 参数命名，采用 `X-` 前缀和大驼峰命名


## 2.1.0 (2023-01-18)

### Added
- Helper: 新增按标签清空缓存 `CacheHelper::forgetFresnsTag();`
- Subscribe: 支持订阅账号和用户的登录通知
- 框架: 自定义 404 页面

### Fixes
- API: 修复角色配置的缓存
- API: 评论无法查询到帖子时报错
- API: 内容最后部分的话题解析失效问题
- API: 修复用户主角色为空时报错
- API: 无时区时，日期时间格式问题
- Panel: 命令行安装插件报错问题

### Changed
- API: 子级评论列表支持嵌套显示
- API: 树结构数据为空时输出为 `[]` 空数组格式
- API: 优化内容话题的提取和替换
- 框架: laravel/framework 升级到 v9.48.0
- 框架: laravel/ui 升级到 v4.2.0
- 框架: fresns/plugin-manager 升级到 v2.3.3
- 框架: fresns/theme-manager 升级到 v2.0.8
- 框架: fresns/market-manager 升级到 v2.1.1


## 2.0.1 (2023-01-11)

### Changed
- 优化缓存标签


## 2.0.0 (2023-01-09)

### Added
- Panel: 支持仅清空文件缓存

### Fixes
- API: 评论自己时也会产生通知消息
- API: 变更用户资料后，未清理发表权限缓存
- API: 删除评论时，帖子的评论计数未减少
- API: 验证码登录时自动注册，发送验证码未处理兼容

### Changed
- API: 帖子和评论的创作者信息独立缓存，修改用户资料后，同步变化资料
- Helper: 优化文件查找模型
- 框架: laravel/framework 升级到 v9.46.0


## 2.0.0-beta.8 (2022-12-24)

### Added
- API: 请求标头 `contentFormat` 参数，允许获取指定格式的内容
- API: 帖子信息可以预览多条评论
- API: 帖子信息可以预览多条点赞用户
- Panel: 互动配置新增评论预览设置
- Panel: 互动配置新增点赞用户预览设置
- Panel: 引擎远程 API Host 保存时自动处理 `/` 结尾
- Panel: 新增缓存管理页面

### Fixes
- API: 修复帖子编辑后缓存未自动清理问题
- API: 编辑器上传文件时，未判断数量限制
- Panel: 地图设置字段错误

### Changed
- API: 优化缓存机制
- Data: `post_appends->is_allow` 字段默认值改为 `1`
- 框架: composer 升级到 v2.5.1
- 框架: laravel/framework 升级到 v9.45.1
- 框架: fresns/plugin-manager 升级到 v2.3.2


## 2.0.0-beta.7 (2022-12-13)

### Added
- API: 评论信息增加 `latestCommentTime` 子级评论时间参数

### Fixes
- API: 评论发表成功后，帖子 `latest_comment_at` 时间字段错误
- Data: cookies 语言标签未更改成功
- Panel: 站点网址保存失败

### Changed
- API: 账号和用户凭证验证时忽略 App ID
- Data: 重置初始语言包


## 2.0.0-beta.6 (2022-12-12)

### Added
- API: 发表评论后，更新帖子最后评论时间
- API: 帖子和评论列表接口，新增 `allDigest` 和 `following` 参数
- Helper: 根据文件名获取文件类型编号，不区分大小写

### Fixes
- API: 退出登录错误
- API: 验证码模板 ID 不匹配问题
- API: 内容类型筛选大小写匹配
- Panel: 检测版本为空时报错

### Changed
- API: 内容类型命名采用复数 `/api/v2/global/{type}/content-types`
- 框架: fresns/plugin-manager 升级到 v2.3.0


## 2.0.0-beta.5 (2022-12-08)

### Added
- API: 验证 headers deviceInfo 是否格式匹配
- API: 评论列表，当所属帖子已删除，则不跳过

### Fixes
- API: 帖子和评论详情页内容缓存错误
- API: 回复评论时层级错误
- API: 删除帖子和评论时，计数没有回滚

### Changed
- API: 角色发表时间间隔限制单位，由`分钟`修改为`秒`
- API: headers 参数中 `token` 拆分成 `aidToken` 和 `uidToken`
- 框架: laravel/framework 升级到 v9.43.0


## 2.0.0-beta.4 (2022-12-01)

### Added
- API: 新增缓存，提升访问速度
- Panel: 保存 `URL` 和 `Path` 时，过滤左右空格和结尾 `/` 符号
- Model: 文件信息增加 `middle` 选项，从文件名开头拼接图片参数
- Data: 数据表 `user_follows` 增加 `is_enable` 字段
- 主程序内置资源增加 Font Awesome Free 6.2.1

### Fixes
- Panel: 扩展安装失败时提示文案不匹配

### Changed
- `interactive` 修改为 `interaction`
- API: 验证码移至参数格式判断之后，避免格式错误导致验证码提前失效
- API: 签名的 `App Secret` 拼接由 `&key=` 修改为 `&appSecret=`
- Panel: 配置保存时 `foreach` 循环中模型为空时 `continue` 跳过
- 框架: laravel/framework 升级到 v9.42.2


## 2.0.0-beta.3 (2022-11-28)

### Added
- Panel: 引擎 cookie 前缀可选
- Panel: 自动检验并修正插件启用状态
- Panel: 小组发表权限配置，增加选项仅限管理员
- Panel: 仪表盘升级插件增加进度条
- Panel: 发表配置插件上传页增加状态判断

### Features
- Subscribe: 移除订阅表限制，开放所有表

### Fixes
- API: 修复 DTO 提示信息未使用问题
- API: 小组列表 sublevel_public 逻辑处理
- Panel: 中文缺失语言 site_mode_public_register_type_phone
- Panel: 避免小组自定义配置被覆盖

### Changed
- API: 修改小组权限检测的文案 code
- API: 优化验证码登录时，无账号自动注册
- Data: 配置键名 account_cookie_status 修改为 account_cookies_status
- Data: 配置键名 account_cookie 修改为 account_cookies
- Data: 语言包标识名 accountPoliciesCookie 修改为 accountPoliciesCookies
- Panel: 移除控制面板的 ConfigHelper 使用，避免缓存
- Panel: 优化自动和物理升级功能
- 框架: fresns/plugin-manager 升级到 v2.2.0


## 2.0.0-beta.2 (2022-11-23)

### Added
- API: 重构 token 逻辑，有效期增加小时和天数参数
- Panel: 站点设置支持配置“验证码登录时，无账号则自动注册”

### Fixes
- API: 当 site url 未设置时内容链接处理报错
- Panel: 无法从应用市场下载应用
- Panel: 清空缓存报错

### Changed
- 框架: laravel/framework 升级到 v9.41.0
- 框架: fresns/plugin-manager 升级到 v2.1.1
- 框架: fresns/market-manager 升级到 v2.1.0
- 引擎: FresnsEngine 升级到 v2.0.0-beta.2
- 主题: ThemeFrame 升级到 v2.0.0-beta.2


## 2.0.0-beta.1 (2022-11-22)

- 2.x 首个公测版

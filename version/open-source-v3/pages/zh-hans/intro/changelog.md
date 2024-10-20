# 更新记录

Fresns 主程序所有版本更新日志都将记录在这个文件中。


## 3.6.2 (2024-10-21)

### Fixes
- API: 文件下载链接错误问题


## 3.6.1 (2024-10-18)

### Fixes
- API: 下载对话附件错误
- API: 修复 MySQL 经纬度字段问题
- API: 修复写错的字段名
- Account: 修复中件间顺序
- Words: 修复钱包 update state
- Task Scheduling: 修复框架引用


## 3.6.0 (2024-08-12)

### Added
- Panel: 仪表盘添加异步检测插件运行状态

### Fixes
- API: 查看用户互动数据时用户 ID 使用错误

### Changed
- Account: 重构账户登录的 User Auth 功能
- Models: 变更 `AccountConnect` 互联平台的常量名


## 3.5.3 (2024-07-22)

### Fixes
- Account: 纯手机号和国际区号识别问题


## 3.5.2 (2024-07-21)

### Fixes
- Account: 修改资料后，未清理用户缓存
- API: 检查用户下载文件次数问题


## 3.5.1 (2024-07-20)

### Fixes
- Data: 修正国际电话区号的单词错误，由 `countryCode` 修改为 `countryCallingCode`
    - 受影响的命令字 `sendCode`, `checkCode`, `sendSms`, `createAccount`, `verifyAccount`
    - 受影响的数据表 `accounts`


## 3.5.0 (2024-07-07)

### Added
- Console: 新增重置密码指令 `php artisan fresns:reset-password`
- Console: 新增面板信息查看指令 `php artisan fresns:panel`

### Fixes
- API: 修复对话消息中对方无法查看文件消息
- API: 修复 S3 预签名 URL 上传文件类型问题
- Utilities: 发表评论时，未更新帖子的最后评论时间
- Utilities: 优化设备信息数据结构


## 3.4.1 (2024-06-30)

### Fixes
- Data: 修复 stickers 表名称为空时错误
- Words: 修复发信的 action target 为空时的错误
- API: 评论列表 cache key
- API: 修复不能给自己会话时的提示文案


## 3.4.0 (2024-06-11)

### Added
- Jobs: 订阅通知采用 Job 实现
- Helpers: 清理 schedule 缓存时同步删除 failed_jobs 记录

### Fixes
- API: 用户列表指定多个角色时只生效一个角色
- API: 创建评论草稿时，因缺少 commentPrivate 参数时报错
- API: 评论草稿附属文件错误

### Changed
- API: 用户和小组的互动数据 `followType` 参数名修改为 `followMethod`
- API: 用户和小组的互动数据 `followUrl` 参数名修改为 `followAppUrl`
- API: `followMethod` 参数值修改为字符串类型，值为 `api` 或 `page`
- API: 编辑器上传配置 `uploadType` 参数名修改为 `uploadMethod`
- API: 编辑器上传配置 `uploadUrl` 参数名修改为 `uploadAppUrl`


## 3.3.2 (2024-06-04)

### Changed
- API: 内容数据 `editControls` 参数名修改为 `controls`


## 3.3.1 (2024-06-03)

### Fixes
- API: 关注用户参数报错
- Data: SQLite 数据库地理空间兼容问题


## 3.3.0 (2024-06-01)

### Added
- API: 用户扩展分值记录列表新增 `name` 和 `unit` 参数
- Models: 视频文件信息，有海报图处理参数时，如果没有海报图路径则使用文件路径，实现视频文件直接处理成海报图
- Account: 互联配置支持上传自定义图标

### Fixes
- API: 帖子和评论列表接口缓存键名冲突
- API: 小组列表查询条件缺失可见度条件
- API: 帖子和评论列表 block 失效
- Words: 设置用户扩展分值，期末分值重新查库获取，避免异常执行导致数据不一致
- Utilities: 创建城市数据写错模型名

### Changed
- Data: 修改钱包和扩展分值的语言包 Key 命名，将单词 Log 替换为 Record
- Models: 当配置项 `site_url` 为空时，内容 URL 也为空


## 3.2.1 (2024-05-20)

### Fixes
- Panel: 小组编辑没有禁止指定自己为父级小组

### Changed
- Panel: 存储设置重构，请参考插件介绍重新配置
- Panel: 移除 cookie 前缀自定义功能
- Words: 重命名获取文件临时 URL 的命令字


## 3.2.0 (2024-05-18)

### Added
- API: 树结构小组列表支持按类型查询

### Fixes
- API: 优化编辑器和草稿参数
- API: 小组关注类型参数值问题
- Data: 修正扩展档案的参数
- Panel: 保存角色权限配置时丢失配置项

### Changed
- API: 重构扩展档案接口 `/api/fresns/v1/global/{type}/archives`


## 3.1.3 (2024-05-12)

### Fixes
- Data: 修改账户互联信息表 token 字段长度，兼容长字符保存
- Panel: 主题升级未自动清除版本号缓存
- Panel: JS 语言包链接错误 302
- Framework: 优化 404 和 500 错误页面视图


## 3.1.2 (2024-05-06)

### Fixes
- API: 用户资料更新接口 `gender_custom` 和 `gender_pronoun` 参数错误
- API: 评论草稿的 `hcid` 参数错误
- API: 用户生日格式错误
- Panel: 面板语言的 Cookie 更改为永久保存
- Console: 修复 http proxy 配置错误


## 3.1.1 (2024-04-30)

### Fixes
- API: 通知消息列表，当帖子被删除后，评论信息报错
- Account: 中间件获取语言标签顺序问题
- Account: 验证码发送和验证的模板 ID 不匹配
- Panel: 中间件类注册问题，导致路由缓存无法使用

### Changed
- Models: `TempVerifyCode::TEMPLATE_EDIT_PROFILE` 常量名修改为 `TempVerifyCode::TEMPLATE_UPDATE_PROFILE`


## 3.1.0 (2024-04-28)

### Added
- API: 内容列表接口，查询结果增加缓存
- API: 帖子和评论删除时创建日志记录
- Account: 新增「儿童保护」设置项

### Fixes
- API: 用户计数的字段名错误
- API: 帖子和评论列表 contentType 参数失效
- Account: 修复应用服务者 URL 错误
- Models: 优化回调内容表和日志表的常量编号
- Panel: 框架 `encryptCookies` 不支持小数点，面板保存时转换为下划线

### Changed
- API: 重构用户资料和设置信息接口
    - `/api/fresns/v1/user/profile`
    - `/api/fresns/v1/user/setting`
- Helpers: 优化缓存 `CacheHelper::put` 参数顺序
- Data: 语言包 `darkMode` 修改为 `appearance`，新增语言 `light` 和 `dark`
- Website-Engine: 重构多语言逻辑，多语言切换不再改变 URL，切换语言采用 `?language={langTag}`


## 3.0.0 (2024-04-15)

- 3.x 首个版本

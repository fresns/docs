# 更新记录

Fresns 主程序所有版本更新日志都将记录在这个文件中。


## 3.1.4 (2024-05-18)

### Added
- API: 树结构小组列表支持按类型查询

### Fixes
- API: 优化编辑器和草稿参数
- API: 小组关注类型参数值问题
- Data: 修正扩展档案的参数
- Panel: 保存角色权限配置时丢失配置项


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

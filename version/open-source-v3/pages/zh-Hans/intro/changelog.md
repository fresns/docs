# 更新记录

Fresns 主程序所有版本更新日志都将记录在这个文件中。


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

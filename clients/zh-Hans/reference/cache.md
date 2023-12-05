# 缓存

- [状态码](error-codes.md)
- [语言包](language-pack.md)
- [全局配置](configs.md)

以上三个客户端基础信息，可能每一个页面都会用到，为了避免频繁请求接口影响加载速度，我们建议客户端采用缓存。

> 当前登录的账号和用户资料，我们也建议缓存，比如 1 分钟时间，这样也能避免频繁请求用户信息接口。当用户操作了互动功能，比如点赞、发表、修改资料等操作后，可以重新再获取用户资料再缓存。

## 缓存时间

`/api/fresns/v1/global/configs?keys=cache_datetime,cache_minutes`

- `cache_datetime` 服务端最后一次配置的时间。
- `cache_minutes` 建议客户端缓存保存最长分钟数，为空 `null` 表示不限制。不限制则建议定期请求接口只获取 `cache_datetime,cache_minutes` 配置，对比有效期是否和本地一致，不一致则表示服务端已经更新配置，请重新缓存。

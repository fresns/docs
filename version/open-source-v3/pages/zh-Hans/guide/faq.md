# 常见问题

- 访问官方互动社区「[使用指南](https://discuss.fresns.org/group/guide)」和「[安装使用（精华内容）](https://discuss.fresns.org/group/use?allDigest=1)」版区，可以浏览到全部常见问题解决方案。
- 以下内容为【常见问题】解决方案导览列表。

## 必看

- [一键分享 Fresns 报错信息的方法](https://discuss.fresns.org/post/4IJjps9p)
- [Fresns 管理面板的登录页面路径](https://discuss.fresns.org/post/Y7fyxKMs)
- [Fresns 客户端（用户界面）使用说明](https://discuss.fresns.org/post/V2VphDSx)

## 环境问题

- [因夏令时导致的时区异常，可以忽略](https://discuss.fresns.org/post/h8ZIjVAZ)
- [404 Page Not Found](https://discuss.fresns.org/post/X3JF7qRf)
- [500 Internal Server Error](https://discuss.fresns.org/post/Cp8JUfzQ)
- [502 Bad Gateway](https://discuss.fresns.org/post/sh2EQ8I0)

## 使用说明

- [Fresns 客户端频道默认参数配置解说](https://discuss.fresns.org/post/NTBRTFwa)

## 终端清理缓存

- 如果无法登录后台处理缓存，可以在终端中执行以下命令清理缓存。

```sh
php artisan cache:clear     #清除数据缓存

php artisan config:clear    #清除框架配置缓存
php artisan route:clear     #清除路由缓存

php artisan config:cache    #清除并重新生成框架配置缓存
php artisan route:cache     #清除并重新生成路由缓存
```

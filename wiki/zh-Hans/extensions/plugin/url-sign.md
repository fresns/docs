# 验证路径签名

如果插件页面需要验证用户登录身份，可以在路径中增加签名变量名，客户端访问时会生成并使用路径签名，详情参见[回调路径变量名](../callback/variables.md)说明。

## 命令字

插件获取 URL 中参数传给命令字 [verifyUrlSign](../../supports/cmd-word/basic.md#校验-url-签名) 校验即可。

```php
\FresnsCmdWord::plugin('Fresns')->verifyUrlSign($wordBody)
```

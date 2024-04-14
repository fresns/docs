# 登录流程

- 注册与登录逻辑一致。
- 访问账户中心，未登录时会自动跳转到登录页。
- 登录页和注册页完成业务流程后，均会回调 `loginToken` 参数。

## Web 客户端

- 1. 获取「全局配置项」里账户设置项 [account_login_service](configs.md#账户设置)
- 2. 使用[扩展回调](callback/variables.md)的逻辑替换路径变量值，得到最终登录页 URL。
- 3. 访问登录页
    - 方法 1: 使用 `iframe` 访问登录页面。
    - 方法 2: 直接跳转到登录页（当前窗口或者新窗口）。
- 4. 监听回调（需要同时支持两种方法）
    - 方法 1: 监听 [postMessage](callback/index.md#postmessage-说明) 消息，获取 `loginToken` 参数。
    - 方法 2: 使用 `URL` 获取 `loginToken` 参数。
- 5. 凭 `loginToken` 参数请求登录接口 [/api/fresns/v1/account/auth-token](../api/account/login.md)
- 6. 登录成功后，获取账号凭证
    - **aid**: `data.authToken.aid`
    - **aidToken**: `data.authToken.aidToken`
    - **uid**: `data.authToken.uid`
    - **uidToken**: `data.authToken.uidToken`

::: details 使用 `URL` 获取 `loginToken` 参数
- 登录页路径中 `{redirectUrl}` 变量值支持 `{loginToken}` 变量名。
- 当登录完成后，如果登录页已经不在 `iframe` 中时，则通过 `{redirectUrl}` 跳转回来。
- 在跳转前，如果 `{redirectUrl}` 地址中有 `{loginToken}` 变量名，则替换为登录凭证。
- 落地页获取 `loginToken` 之后处理后续流程。
:::

## App 客户端

- 1. 获取「全局配置项」里账户设置项 [account_login_service](configs.md#账户设置)
- 2. 使用[扩展回调](callback/variables.md)的逻辑替换路径变量值，得到最终登录页 URL。
- 3. 使用 `WebView` 访问 URL 页面，用户在登录页面操作登录。
- 4. 监听 [postMessage](callback/index.md#postmessage-说明) 消息，获取 `loginToken` 参数。
- 5. 凭 `loginToken` 参数请求登录接口 [/api/fresns/v1/account/auth-token](../api/account/login.md)
- 6. 登录成功后，获得账号授权凭证
    - **aid**: `data.authToken.aid`
    - **aidToken**: `data.authToken.aidToken`
    - **uid**: `data.authToken.uid`
    - **uidToken**: `data.authToken.uidToken`

## 切换用户

- 1. 如果[账号信息](data/account.md)有多个用户，凭用户信息可以切换登录。
- 2. 凭 `uidOrUsername` 请求登录接口 [/api/fresns/v1/user/auth-token](../api/user/login.md)
- 3. 登录成功后，替换用户凭证
    - **uid**: `data.authToken.uid`
    - **uidToken**: `data.authToken.uidToken`

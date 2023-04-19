# 基础功能

## 校验签名

```php
\FresnsCmdWord::plugin('Fresns')->verifySign($wordBody)
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| platformId | Number | YES | 平台编号（配置表 [platforms](../../database/dictionary/platforms.md) 键名的键值） |
| version | String | YES | 语义化版本号 |
| appId | String | YES | App ID |
| timestamp | Number | YES | 签名生成时间（当前 Unix 时间戳，精确到秒或毫秒都支持） |
| sign | String | YES | 请求签名 |
| aid | String | NO/YES | 账号参数（账号主表 `accounts->aid` 字段） |
| aidToken | String | NO/YES | 账号身份凭证 |
| uid | Number | NO/YES | 用户参数（用户主表 `users->uid` 字段） |
| uidToken | String | NO/YES | 用户身份凭证 |
| verifyType | Number | NO | 验证 [session_keys->type](../../database/systems/session-keys.md)，留空则默认为 1 |
| verifyUnikey | String | NO | 类型为 3 时专用，验证关联插件 |

## 校验 URL 凭证

```php
\FresnsCmdWord::plugin('Fresns')->verifyUrlAuthorization($wordBody)
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| urlAuthorization | String | YES | 参见：[为插件生成路径凭证](../../extensions/callback/url-authorization.md) |

::: details 逻辑说明
用户将通过 URL 访问插件页面，URL 中会传参凭证信息，用于一键登录。

- 1、先使用 URL Encode 解码 `{authorization}` 变量名的值，得到 base64 加密字符串
- 2、再使用 base64 解密字符串，得到 json object 格式的 `headers` 数据（包括 MD5 签名）
- 3、获取 headers 中生成签名的信息，校验签名是否正确，正确则 `code` 为 `0`
- 4、无论是否正确，都输出 headers 信息，格式见下方结果示例。
:::

::: details 结果示例
```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "appId": "qe12345",
        "platformId": 4,
        "version": "2.0.0",
        "deviceInfo": "",
        "langTag": "zh-Hans",
        "timezone": "+8",
        "contentFormat": "",
        "aid": "6a3bb3bc",
        "aidToken": "uoX1hk6SHUgB2MFGJwNx38dem9DA7Vsz",
        "uid": 782622,
        "uidToken": "PqBpwPLJgfd1sH0X5JffYFGxTSc8RW7c",
        "signature": "d5db4371a0c2d7e17009dea8d53ecf15a7ec07b9",
        "timestamp": 1626426833
    }
}
```
:::

## 上传交互日志

```php
\FresnsCmdWord::plugin('Fresns')->uploadSessionLog($wordBody)
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | YES | [记录类型](../../database/systems/session-logs.md#日志类型-type) |
| platformId | Number | YES | 平台编号（配置表 [platforms](../../database/dictionary/platforms.md) 键名的键值） |
| version | String | YES | 语义化版本号，例如: `2.0.0` |
| appId | String | NO | 密钥 App ID |
| langTag | String | NO | 语言标签 |
| pluginUnikey | String | NO | 插件 Unikey |
| aid | String | NO | 账号 |
| uid | Number | NO | 用户 |
| objectName | String | YES | 功能模型名或者接口路径<br>例如模型名 App\Models\Post<br>例如接口路径：/api/v2/account/login |
| objectAction | String | YES | 行为描述，自定义输入内容 |
| objectResult | Number | YES | 1.未知或执行中 / 2.成功 / 3.失败 |
| objectOrderId | String | NO | 例如发表行为，则代表发表内容的 ID<br>插件行为，凭此 ID 可查询对应插件那边记录的关联信息 |
| deviceInfo | Object | NO | 交互设备信息 |
| deviceToken | String | NO | 交互设备 Token<br>例如 iOS Device Token 或 Android Device Token<br>可应用于推送消息 |
| moreJson | Object | NO | 其他自定义信息 |

## 发送验证码

```php
\FresnsCmdWord::plugin('Fresns')->sendCode($wordBody)
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | YES | 类型：1.邮件验证码 / 2.短信验证码 |
| account | String | YES | 账号（邮箱或手机号） |
| countryCode | Number | NO | 国际区号（手机号专用） |
| templateId | Number | YES | [验证码模板 ID](../../database/keyname/send.md#验证码模板设置) |
| langTag | String | YES | 语言标签 |

## 核对验证码

```php
\FresnsCmdWord::plugin('Fresns')->checkCode($wordBody)
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | Number | YES | 类型：1.邮件验证码 / 2.短信验证码 |
| account | String | YES | 账号（邮箱或手机号） |
| countryCode | Number | NO | 国际区号（手机号专用） |
| verifyCode | String | YES | 验证码 |
| templateId | Number | YES | [验证码模板 ID](../../database/keyname/send.md#验证码模板设置) |

## 获取 IP 信息

```php
\FresnsCmdWord::plugin('Fresns')->ipInfo($wordBody)
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| ip | String | YES | 支持 IPv4 或 IPv6 |

- 输出结果同 [IP 信息接口](../../api/common/ip-info.md)

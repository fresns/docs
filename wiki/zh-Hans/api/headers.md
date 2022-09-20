# 请求标头

## Headers 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| platformId | Number | YES | 平台编号，与密钥匹配，参见 [platforms](../database/dictionary/platforms.md) |
| version | String | YES | 语义化版本号 |
| appId | String | YES | App ID |
| timestamp | String | YES | 签名生成时间（当前 Unix 时间戳，精确到秒或毫秒都支持） |
| sign | String | YES | 请求签名 |
| langTag | String | NO | 语言标签（留空则输出默认语言） |
| timezone | String | NO | UTC 时区（留空则使用默认时区） |
| aid | String | YES/NO | 账号参数（留空则视为未登录账号） |
| uid | Number | YES/NO | 用户参数（留空则视为未登录用户） |
| token | String | YES/NO | 身份凭证（传参 `aid` 或 `uid` 时必传） |
| deviceInfo | String | YES | [交互设备信息](../database/systems/session-logs.md#设备信息-json) `session_logs > device_info`<br>压缩 Object 信息为字符串传参 |

## 运行模式介绍

- [配置表](../database/systems/configs.md)键名 `site_mode`
    - 公开模式，键值为 `public`
    - 私有模式，键值为 `private`
- 获取方法 `/api/v2/global/configs?keys=site_mode`

## 签名生成规则

```php
// headers 中参与签名的参数
const SIGN_PARAM_ARR = [
    'platformId',
    'version',
    'appId',
    'timestamp',
    'aid',
    'uid',
    'token'
];
```

- PHP 可引用封装方法 `App\Helpers\SignHelper::makeSign($signMap, $appSecret)`
- 其他客户端请参考下方流程：

**1、提取参与签名的 headers 参数**

```json
// 未登录
{
	"platformId": 1,
    "version": "2.0.0",
    "appId": "TDh15qYay3x0sARo",
    "timestamp": 1656653400000,
}

// 已登录账号
{
	"platformId": 1,
    "version": "2.0.0",
    "appId": "TDh15qYay3x0sARo",
    "timestamp": 1656653400000,
    "aid": "wIfu6jaF",
    "token": "uoX1hk6SHUgB2MFGJwNx38dem9DA7Vsz"
}

// 已登录用户
{
	"platformId": 1,
    "version": "2.0.0",
    "appId": "TDh15qYay3x0sARo",
    "timestamp": 1656653400000,
    "aid": "wIfu6jaF",
    "uid": 782622,
    "token": "uoX1hk6SHUgB2MFGJwNx38dem9DA7Vsz"
}
```

**2、以参数名按照 ASCII 码从小到大排序（字典序）**

```json
{
    "aid": "wIfu6jaF",
    "appId": "TDh15qYay3x0sARo",
	"platformId": 1,
    "timestamp": 1656653400000,
    "token": "uoX1hk6SHUgB2MFGJwNx38dem9DA7Vsz",
    "uid": 782622,
    "version": "2.0.0",
}
```

**3、对排序后的新参数使用 URL 键值对的格式拼接成字符串。**

```
aid=wIfu6jaF&appId=TDh15qYay3x0sARo&platformId=1&timestamp=1656653400000&token=uoX1hk6SHUgB2MFGJwNx38dem9DA7Vsz&uid=782622&version=2.0.0
```

**4、再拼接上** `&key={app_secret}` **得到待签名字符串。**

```
aid=wIfu6jaF&appId=TDh15qYay3x0sARo&platformId=1&timestamp=1656653400000&token=uoX1hk6SHUgB2MFGJwNx38dem9DA7Vsz&uid=782622&version=2.0.0&key=qUiEaDNQh2IpvGHOKlTMx7ujn8t1CZWX
```

**5、对签名字符串进行 MD5 运算（32 位小写），得到签名值**

```
3443b2e74710a1293e4250c930e18c8f
```

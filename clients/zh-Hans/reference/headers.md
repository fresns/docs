# 请求标头

## Headers 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| X-Fresns-Space-Id | String | NO | 云空间 ID，留空则表示为开源版 |
| X-Fresns-App-Id | String | YES | 密钥 App ID<br>密钥位置：`控制面板->客户端->应用密钥` |
| X-Fresns-Client-Platform-Id | Number | YES | [平台编号](dictionary/platforms.md)，与密钥的「平台」匹配 |
| X-Fresns-Client-Version | String | YES | 你的客户端版本号，推荐使用语义化版本号 |
| X-Fresns-Client-Device-Info | String | YES | [交互设备信息](#设备信息) <br>先压缩 Object 信息并转换为字符串，再将字符串以 Base64 编码 |
| X-Fresns-Client-Timezone | String | NO | UTC 时区（用于处理内容时间值）<br>留空则使用数据库时区 |
| X-Fresns-Client-Lang-Tag | String | NO | [客户端的语言标签](configs.md#语言设置)（留空则输出默认语言） |
| X-Fresns-Client-Content-Format | String | NO | 富文本内容格式，留空则原样输出。<br>默认富文本为 `markdown`，支持参数 `html` |
| X-Fresns-Aid | String | YES/NO | 账号参数（留空则视为未登录账号） |
| X-Fresns-Aid-Token | String | YES/NO | 账号身份凭证（传参 `aid` 时必传） |
| X-Fresns-Uid | Number | YES/NO | 用户参数（留空则视为未登录用户） |
| X-Fresns-Uid-Token | String | YES/NO | 用户身份凭证（传参 `uid` 时必传） |
| X-Fresns-Signature | String | YES | [查看签名生成规则](#签名生成规则) |
| X-Fresns-Signature-Timestamp | String | YES | 签名生成时间<br>当前 UTC+0 Unix 时间戳，秒或者毫秒 |

## 签名生成规则

```php
// headers 中参与签名的参数
const SIGN_PARAM_ARR = [
    'X-Fresns-Space-Id',
    'X-Fresns-App-Id',
    'X-Fresns-Client-Platform-Id',
    'X-Fresns-Client-Version',
    'X-Fresns-Aid',
    'X-Fresns-Aid-Token',
    'X-Fresns-Uid',
    'X-Fresns-Uid-Token',
    'X-Fresns-Signature-Timestamp',
];
```

- 开源版可以引用封装方法 `App\Helpers\SignHelper::makeSign($signMap, $appKey)`
- 其他客户端请参考下方流程：

**1、提取参与签名的 headers 参数**

```json
// 未登录
{
    "X-Fresns-App-Id": "yh1OJ7WL",
    "X-Fresns-Client-Platform-Id": 2,
    "X-Fresns-Client-Version": "2.0.0",
    "X-Fresns-Signature-Timestamp": 1674161913192
}

// 已登录账号
{
    "X-Fresns-App-Id": "yh1OJ7WL",
    "X-Fresns-Client-Platform-Id": 2,
    "X-Fresns-Client-Version": "2.0.0",
    "X-Fresns-Aid": "wIfu6jaF",
    "X-Fresns-Aid-Token": "uoX1hk6SHUgB2MFGJwNx38dem9DA7Vsz",
    "X-Fresns-Signature-Timestamp": 1674161913192
}

// 已登录用户
{
    "X-Fresns-App-Id": "yh1OJ7WL",
    "X-Fresns-Client-Platform-Id": 2,
    "X-Fresns-Client-Version": "2.0.0",
    "X-Fresns-Aid": "wIfu6jaF",
    "X-Fresns-Aid-Token": "uoX1hk6SHUgB2MFGJwNx38dem9DA7Vsz",
    "X-Fresns-Uid": 782622,
    "X-Fresns-Uid-Token": "PqBpwPLJgfd1sH0X5JffYFGxTSc8RW7c",
    "X-Fresns-Signature-Timestamp": 1674161913192
}
```

**2、以参数名按照 ASCII 码从小到大排序（字典序）**

```json
{
    "X-Fresns-App-Id": "yh1OJ7WL",
    "X-Fresns-Client-Platform-Id": 2,
    "X-Fresns-Client-Version": "2.0.0",
    "X-Fresns-Aid": "wIfu6jaF",
    "X-Fresns-Aid-Token": "uoX1hk6SHUgB2MFGJwNx38dem9DA7Vsz",
    "X-Fresns-Uid": 782622,
    "X-Fresns-Uid-Token": "PqBpwPLJgfd1sH0X5JffYFGxTSc8RW7c",
    "X-Fresns-Signature-Timestamp": 1674161913192
}
```

**3、对排序后的新参数使用 URL 键值对的格式拼接成字符串。**

```
X-Fresns-Aid=wIfu6jaF&X-Fresns-Aid-Token=uoX1hk6SHUgB2MFGJwNx38dem9DA7Vsz&X-Fresns-App-Id=yh1OJ7WL&X-Fresns-Client-Platform-Id=2&X-Fresns-Client-Version=2.0.0&X-Fresns-Signature-Timestamp=1674161913192&X-Fresns-Uid=782622&X-Fresns-Uid-Token=PqBpwPLJgfd1sH0X5JffYFGxTSc8RW7c
```

**4、再拼接上** `&AppKey={app_key}` **得到待签名字符串。**

```
X-Fresns-Aid=wIfu6jaF&X-Fresns-Aid-Token=uoX1hk6SHUgB2MFGJwNx38dem9DA7Vsz&X-Fresns-App-Id=yh1OJ7WL&X-Fresns-Client-Platform-Id=2&X-Fresns-Client-Version=2.0.0&X-Fresns-Signature-Timestamp=1674161913192&X-Fresns-Uid=782622&X-Fresns-Uid-Token=PqBpwPLJgfd1sH0X5JffYFGxTSc8RW7c&AppKey=qUiEaDNQh2IpvGHOKlTMx7ujn8t1CZWX
```

**5、对签名字符串进行 `hash sha256` 运算（64 位小写），得到签名值**

```
2174eaeab76fb6a3790ed4f7ebb2edfb2174eaeab76fb6a3790ed4f7ebb2edfb
```

## 设备信息

> `networkIpv4` 和 `networkIpv6` 必填一项，或者两项都填写。其余项可留空。

```json
{
    "agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/14.0.835.202 Safari/535.1",
    "type": "Desktop", // Desktop, Mobile, Tablet, Bot
    "mac": "2c:89:dc:71:b6:12",
    "brand": "Apple",
    "model": "Mac",
    "platformName": "Mac",
    "platformVersion": "10.15.7",
    "browserName": "Chrome",
    "browserVersion": "100.0.4896",
    "browserEngine": "Blink",
    "appImei": null, // 国际移动设备识别码
    "appAndroidId": null, // 安卓设备的唯一标识符
    "appOaid": null, // 开放匿名设备标识符
    "appIdfa": null, // 苹果设备广告标识符
    "simImsi": null, // 国际移动用户识别码
    "networkType": "wifi",
    "networkIpv4": "137.132.250.10",
    "networkIpv6": null,
    "networkPort": "8080",
    "networkTimezone": "Asia/Singapore",
    "networkOffset": 28800,
    "networkIsp": "National University of Singapore",
    "networkOrg": "National University of Singapore",
    "networkAs": "AS7472 NUS Information Technology",
    "networkAsName": "NUS-AS-AP",
    "networkReverse": null,
    "networkMobile": false,
    "networkProxy": false,
    "networkHosting": false,
    "mapId": 2, // 字典数据: 地图服务商编号
    "latitude": 1.29758,
    "longitude": 103.773,
    "continent": "Asia",
    "continentCode": "AS",
    "country": "Singapore",
    "countryCode": "SG",
    "region": "Central Singapore",
    "regionCode": "01",
    "city": "Singapore",
    "cityCode": "SG",
    "district": "Queenstown",
    "address": null,
    "zip": "119259"
}
```

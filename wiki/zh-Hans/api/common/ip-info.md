# IP 信息

- 接口地址：`/api/v2/common/ip-info`
- 请求方式：`GET`
- 传参方式：`Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | NO | NO |
| X-Fresns-Aid-Token | NO | NO |
| X-Fresns-Uid | NO | NO |
| X-Fresns-Uid-Token | NO | NO |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| ip | String | NO | 留空将输出当前请求者的 IP 信息 |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "networkIpv4": "127.0.0.1",
        "networkIpv6": "",
        "networkPort": "8080",
        "networkTimezone": "Asia/Shanghai",
        "networkOffset": 28800,
        "networkCurrency": "CNY",
        "networkIsp": "China Mobile communications corporation",
        "networkOrg": "China Mobile",
        "networkAs": "AS56046 China Mobile communications corporation",
        "networkAsName": "CMNET-Jiangsu-AP",
        "networkMobile": true,
        "networkProxy": false,
        "networkHosting": false,
        "appImei": "",
        "appAndroidId": "",
        "appOaid": "",
        "appIdfa": "",
        "simImsi": "",
        "mapId": 1, // 字典数据: 地图服务商编号
        "latitude": 113.324520,
        "longitude": 23.099994,
        "scale": "",
        "continent": "Asia",
        "continentCode": "AS",
        "country": "China",
        "countryCode": "CN",
        "region": "Jiangsu",
        "regionCode": "JS",
        "city": "Suzhou",
        "cityCode": "SZ",
        "district": "Taicang",
        "address": "",
        "zip": "215400",
    }
}
```

# IP 信息

- 接口地址：`/api/fresns/v1/common/ip-info`
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
        "scale": null,
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
}
```

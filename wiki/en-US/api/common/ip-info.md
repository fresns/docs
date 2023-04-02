# IP Information

- Endpoint Path: `/api/v2/common/ip-info`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | *optional* | *optional* |
| X-Fresns-Aid-Token | *optional* | *optional* |
| X-Fresns-Uid | *optional* | *optional* |
| X-Fresns-Uid-Token | *optional* | *optional* |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| ip | String | *optional* | 留空将输出当前请求者的 IP 信息 |

## Return

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

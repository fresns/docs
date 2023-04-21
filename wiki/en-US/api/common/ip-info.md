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
        "mapId": 2, // Dictionary data: Map service provider number
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

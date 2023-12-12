# 内容类型

- 接口地址：`/api/fresns/v1/global/{type}/content-types`
- 请求方式：`GET`
- 传参方式：`Rest`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | NO | YES |
| X-Fresns-Aid-Token | NO | YES |
| X-Fresns-Uid | NO | YES |
| X-Fresns-Uid-Token | NO | YES |

## Path 变量

| 变量名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | String | YES | `post`, `comment` |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": [
        {
            "fskey": "String / 类型 Fskey",
            "name": "String / 名称",
            "icon": "String / 图标 URL"
        }
    ]
}
```

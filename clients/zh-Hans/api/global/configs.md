# 全局配置信息

- 接口地址：`/fresns-api/v1/global/configs`
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
| keys | String | NO | 键名，获取指定键名的配置项<br>多个以英文逗号隔开，留空则输出全部 |

**接口使用说明**

- 查看[全局配置](../../reference/configs.md)

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "键名": "键值",
        "itemKey": "itemValue",
    }
}
```

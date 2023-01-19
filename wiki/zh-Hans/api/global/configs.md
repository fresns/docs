# 全局配置信息

- 接口地址：`/api/v2/global/configs`
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
| keys | String | NO | 键名，获取指定键名的配置项，多个以英文逗号隔开 |
| tags | String | NO | 键标签，获取指定键标签的配置项，多个以英文逗号隔开 |
| isAll | Boolean | NO | 是否输出全部结果（不分页） |
| pageSize | Number | NO | 每页显示条数（默认 50 条） |
| page | Number | NO | 页码（默认 1） |

**接口使用说明**

- 该接口查询 [configs](../../database/systems/configs.md) 表内容，详情可参见[配置键名](../../database/keyname/)介绍。
- 输入 `keys` 参数，查询 `item_key` 字段，输出指定的键名键值。
- 输入 `tags` 参数，查询 `item_tag` 字段，指定输出该 Tag 的所有参数。
- `keys` 和 `tags` 两个参数留空代表输出全部配置。
- 两个参数均填写，凡是符合其中一个条件，即输出，不需要同时满足两个条件。

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "pagination": {
            "total": "Number / 一共有多少条数据",
            "pageSize": "Number / 每页有多少条数据",
            "currentPage": "Number / 当前页码",
            "lastPage": "Number / 最后一页页码"
        },
        "list": {
            "键名": "键值",
            "itemKey": "itemValue",
        }
    }
}
```

::: details 开发说明
- 当 `is_api` 字段为 0 时，接口不输出参数。
- 当 `is_multilingual` 字段为 1 时，代表该键值为多语言，输出 `header` 语言标签对应的语言内容。
- 当 `item_type` 字段为 `file` 时，输出文件链接。
- 当 `item_type` 字段为 `plugin` 或 `plugins` 时，代表为插件键值，输出插件访问链接。
:::

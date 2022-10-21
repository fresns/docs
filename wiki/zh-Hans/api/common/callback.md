# 回调返参查询

- 接口地址：`/api/v2/common/callback`
- 请求方式：`GET`
- 传参方式：`Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| aid | NO | YES |
| uid | NO | YES |
| token | NO | YES |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| unikey | String | YES | 数据使用者 unikey |
| uuid | String | YES | Universally unique identifier |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        // plugin_callbacks->content
    }
}
```

::: details 开发说明
- 该接口查询 [plugin_callbacks](../../database/plugins/plugin-callbacks.md) 表内容。
- 查询要求：
    - 凭 uuid 传参查询数据表记录
    - 记录创建时间 created_at 必须为 30 分钟内（相当于 30 分钟内未被使用自动过期）
    - 记录状态 is_use 值必须为 0，表示未被使用过（相当于记录只能被输出一次）
- 返回数据后，将 Query 传参的 unikey 参数填入 use_plugin_unikey 字段，并更新 is_use 字段为 1 值。
:::
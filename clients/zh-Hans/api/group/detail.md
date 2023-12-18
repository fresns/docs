# 获取小组[详情]

- 接口地址：`/api/fresns/v1/group/{gid}/detail`
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
| gid | String | YES | 小组 GID |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| whitelistKeys | String | NO | 白名单键名，只返回给定键名的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| blacklistKeys | String | NO | 黑名单键名，从返回数据中删除指定的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| whitelistCreatorKeys | String | NO | 针对小组信息中的 `creator` 参数 |
| blacklistCreatorKeys | String | NO | 针对小组信息中的 `creator` 参数 |
| whitelistAdminKeys | String | NO | 针对小组信息中的 `admins` 参数 |
| blacklistAdminKeys | String | NO | 针对小组信息中的 `admins` 参数 |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "items": {
            "title": "String / SEO 标题",
            "keywords": "String / SEO 关键词",
            "description": "String / SEO 描述",
            "extensions": [
                {
                    // 小组的扩展
                    // 通用数据结构->扩展功能信息
                }
            ]
        },
        "detail": {
            // 通用数据结构->小组信息
        }
    }
}
```

- [通用数据结构->扩展->扩展功能信息](../../reference/data/extends.md#扩展功能信息)
- [通用数据结构->小组信息](../../reference/data/group.md)

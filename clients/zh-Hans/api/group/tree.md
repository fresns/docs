# 获取小组[树结构列表]

- 接口地址：`/fresns-api/v1/group/tree`
- 请求方式：`GET`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | NO | YES |
| X-Fresns-Aid-Token | NO | YES |
| X-Fresns-Uid | NO | YES |
| X-Fresns-Uid-Token | NO | YES |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| whitelistKeys | String | NO | 白名单键名，只返回给定键名的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组 |
| blacklistKeys | String | NO | 黑名单键名，从返回数据中删除指定的键值对<br>多个以英文逗号隔开，支持「点表示法」表示多维数组 |

**接口使用说明**

- 本接口将获取全部小组，然后组装成树结构输出。
- 当全部小组数超过 100 个时，该接口不可使用。
- 本接口使用场景类似于传统 BBS 版区，以树结构平铺所有小组（版区）。

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": [
        {
            // 通用数据结构->小组信息
            "groups": [
                {
                    // 通用数据结构->小组信息
                }
            ]
        }
    ]
}
```

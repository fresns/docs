# 获取帖子[详情] 日志详情

- 接口地址：`/api/v2/post/{pid}/log/{logId}`
- 请求方式：`GET`
- 传参方式：`Rest` + `Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| aid | NO | YES |
| aidToken | NO | YES |
| uid | NO | YES |
| uidToken | NO | YES |

## Rest 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| pid | String | YES | 帖子 PID |
| logId | Number | YES | 帖子日志 ID |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "detail": {
            // 通用数据结构->帖子日志信息
        }
    }
}
```

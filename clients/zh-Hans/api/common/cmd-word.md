# 命令字请求

- 接口地址：`/fresns-api/v1/common/cmd-word`
- 请求方式：`POST`
- 传参方式：`application/json`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | NO | NO |
| X-Fresns-Aid-Token | NO | NO |
| X-Fresns-Uid | NO | NO |
| X-Fresns-Uid-Token | NO | NO |

## Body 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| fskey | String | YES | 应用 fskey |
| cmdWord | String | YES | 命令字 |
| wordBody | Object | NO | 命令参数 |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        // 命令字输出结果
    }
}
```

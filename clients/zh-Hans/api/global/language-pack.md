# 语言包信息

- 接口地址：`/api/fresns/v1/global/language-pack`
- 请求方式：`GET`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | NO | NO |
| X-Fresns-Aid-Token | NO | NO |
| X-Fresns-Uid | NO | NO |
| X-Fresns-Uid-Token | NO | NO |

**接口使用说明**

- 语言标签使用请求标头 `X-Fresns-Client-Lang-Tag`
- [全部语言包内容](../../reference/language-pack.md)

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "键名": "键值",
        "darkMode": "深色模式",
    }
}
```

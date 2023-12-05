# 语言包信息

- 接口地址：`/api/fresns/v1/global/language-pack`
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
| langTag | String | NO | 语言标签，获取哪个语言的语言包<br>留空则输出默认语言 |

**接口使用说明**

- 语言状态和语言标签参见「[语言设置](../../reference/configs.md#语言设置)」
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

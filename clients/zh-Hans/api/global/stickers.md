# 表情图

- 接口地址：`/api/fresns/v1/global/stickers`
- 请求方式：`GET`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | NO | YES |
| X-Fresns-Aid-Token | NO | YES |
| X-Fresns-Uid | NO | YES |
| X-Fresns-Uid-Token | NO | YES |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": [
        {
            "parentCode": "String / 父级表情组 Code",
            "name": "String / 组名称",
            "code": "String / 表情组 Code",
            "codeFormat": "String / 表情组 Code 格式",
            "image": "String / 表情组图 URL",
            "stickers": [
                {
                    "parentCode": "String / 父级表情组 Code",
                    "name": "String / 名称",
                    "code": "String / 表情 Code",
                    "codeFormat": "String / 表情 Code 格式",
                    "image": "String / 表情图 URL",
                }
            ]
        }
    ]
}
```

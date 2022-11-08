# 阻止词

- 接口地址：`/api/v2/global/block-words`
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
| type | String | NO | 三选一传参 `content`,`user`,`dialog`<br>留空输出全部 |
| pageSize | Number | NO | 每页显示条数（默认 50 条） |
| page | Number | NO | 页码（默认 1） |

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
        "list": [
            {
                "word": "String / 处理词",
                "contentMode": "Number / 内容处理方式（帖子和评论）", // 1.不处理 2.自动替换 3.禁止发表 4.发表后需审核
                "userMode": "Number / 用户处理方式（昵称和签名）", // 1.不处理 2.自动替换 3.禁止使用
                "dialogMode": "Number / 消息处理方式（对话私信）", // 1.不处理 2.自动替换 3.禁止发送
                "replaceWord": "String / 处理词替换词"
            },
            {
                "word": "String / 处理词",
                "contentMode": "Number / 内容处理方式（帖子和评论）",
                "userMode": "Number / 用户处理方式（昵称和签名）",
                "dialogMode": "Number / 消息处理方式（对话私信）",
                "replaceWord": "String / 处理词替换词"
            }
        ]
    }
}
```

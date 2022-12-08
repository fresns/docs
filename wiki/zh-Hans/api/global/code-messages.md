# 状态码信息

- 接口地址：`/api/v2/global/code-messages`
- 请求方式：`GET`
- 传参方式：`Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| aid | NO | NO |
| aidToken | NO | NO |
| uid | NO | NO |
| uidToken | NO | NO |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| unikey | String | NO | 状态码 Unikey，留空将使用默认 Fresns |
| isAll | Boolean | NO | 是否输出全部 `unikey` 结果 |
| codes | String | NO | [状态码编号](../error-code.md)，多个以英文逗号隔开 |

**接口使用说明**

- 该接口查询[状态码](../error-code.md) Message 信息，来自数据表 [code_messages](../../database/systems/code-messages.md)。
- `isAll` 和 `codes` 二选一传参。
- 可以用于视图界面显示多语言提示信息，可与[语言包](../../database/dictionary/language-pack.md)配合使用。

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "code": "message",
        "30000": "参数格式错误",
    }
}
```

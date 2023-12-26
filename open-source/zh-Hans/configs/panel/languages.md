# 语言设置

> 控制面板 > 系统 > 语言设置

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 是否开启多语言 | language_status | true | boolean |  true 或 false |
| 多语言配置列表 | language_menus |  | array | [语言列表 JSON 数据](#语言列表-json-数据) |
| 默认语言 | default_language | zh-Hans | string | 语言标签 |

[多语言唯一性逻辑](../../extensions/multilingual.md)

## 语言列表 JSON 数据

```json
[
    {
        "order": "顺序",
        "langCode": "语言代码",
        "langName": "语言名称（从字典中读取存入）",
        "continentId": "洲 ID",
        "areaStatus": "地区启用状态，true 或者 false",
        "areaCode": "地区代码（可留空）",
        "areaName": "地区名称（可留空，从字典中读取存入）",
        "langTag": "语言标签（语言名称和地区代码组合）",
        "writingDirection": "语言写作方向（从字典中读取存入）",
        "lengthUnit": "长度单位",
        "dateFormat": "日期格式",
        "timeFormatMinute": "分钟时间格式命名",
        "timeFormatHour": "小时时间格式命名",
        "timeFormatDay": "天时间格式命名",
        "timeFormatMonth": "月时间格式命名",
        "timeFormatYear": "年时间格式命名",
        "isEnabled": "true 或者 false"
    },
    {
        "order": 1,
        "langCode": "zh-Hans",
        "langName": "简体中文",
        "continentId": 1,
        "areaStatus": true,
        "areaCode": "SG",
        "areaName": "新加坡",
        "langTag": "zh-Hans-SG",
        "writingDirection": "ltr",
        "lengthUnit": "km",
        "dateFormat": "yyyy-mm-dd",
        "timeFormatMinute": "{n} 分钟前",
        "timeFormatHour": "{n} 小时前",
        "timeFormatDay": "{n} 天前",
        "timeFormatMonth": "{n} 个月前",
        "timeFormatYear": "{n} 个年前",
        "isEnabled": true
    }
]
```

## 人性化时间格式

*API 输出内容时，对时间做人性化处理*

| 格式 | 示例 | 说明 |
| --- | --- | --- |
| n 分钟前 | 5 分钟前 | 发表时间在 60 分钟以内 |
| n 小时前 | 5 小时前 | 发表时间超过 60 分钟，但在 24 小时以内 |
| n 天前 | 5 天前 | 发表时间超过 24 小时，但在 30 天以内 |
| n 个月前 | 5 月前 | 发表时间超过 30 天，但在今年以内 |
| n 年前 | 1 年前 | 发表时间超过 365 天 |

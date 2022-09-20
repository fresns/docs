# Languages

> Panel > Systems > Languages

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| 是否开启多语言 | language_status | true | boolean |  true 或 false |
| 多语言配置列表 | language_menus |  | array | [语言列表 JSON 数据](#语言列表-json-数据) |
| 默认语言 | default_language | zh-Hans | string | Language Tag |

## Composition of language tags

[查看示例和逻辑流程图](../../extensions/multilingual.md)

## Language List JSON Data

```json
[
    {
        "rating": "排序",
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
        "packVersion": "语言包版本",
        "isEnable": "true 或者 false"
    },
    {
        "rating": 1,
        "langCode": "zh-Hans",
        "langName": "简体中文",
        "continentId": 1,
        "areaStatus": true,
        "areaCode": "CN",
        "areaName": "中国大陆",
        "langTag": "zh-Hans-CN",
        "writingDirection": "ltr",
        "lengthUnit": "km",
        "dateFormat": "yyyy-mm-dd",
        "timeFormatMinute": "{n} 分钟前",
        "timeFormatHour": "{n} 小时前",
        "timeFormatDay": "{n} 天前",
        "timeFormatMonth": "{n} 个月前",
        "packVersion": 1,
        "isEnable": true
    }
]
```

## Humanized Time Format

*API 输出内容时，对时间做人性化处理*

| 格式 | 示例 | 说明 |
| --- | --- | --- |
| n 分钟前 | 5 分钟前 | 发表时间在 60 分钟以内 |
| n 小时前 | 5 小时前 | 发表时间超过 60 分钟，但在 24 小时以内 |
| n 天前 | 5 天前 | 发表时间超过 24 小时，但在 30 天以内 |
| n 个月前 | 5 月前 | 发表时间超过 30 天，但在今年以内 |

## Help

| 支持多语言的配置项 | Panel Path |
| --- | --- |
| 站点名称 | Systems > General |
| 站点介绍 | Systems > General |
| 服务条款 | Systems > Policy > Content |
| 隐私权政策 | Systems > Policy > Content |
| Cookie 政策 | Systems > Policy > Content |
| 注销说明 | Systems > Policy > Content |
| 验证码模板 | Systems > Send > Template > Config Template |
| 钱包支付扩展名称 | Systems > Wallet > Recharge Services > Name |
| 钱包提现扩展名称 | Systems > Wallet > Withdraw Services > Name |
| 命名配置 | Operations > Rename |
| 表情包名称 | Operations > Stickers > Group Name |
| 发表帖子规则提示 | Operations > Publish > Post > Publish Post Rules > Rule Tip |
| 发表评论规则提示 | Operations > Publish > Comment > Publish Post Rules > Rule Tip |
| 用户角色名 | Operations > Roles > Name |
| 内容小组名称 | Operations > Groups > Name |
| 内容小组描述 | Operations > Groups > Description |
| 编辑器扩展名称 | Expands > Editor > Name |
| 搜索类型扩展名称 | Expands > Content Type > Name |
| 管理扩展名称 | Expands > Manage > Name |
| 小组扩展名称 | Expands > Group > Name |
| 用户功能扩展名称 | Expands > User Feature > Name |
| 用户资料扩展名称 | Expands > User Profile > Name |
| 菜单配置 | Clients > Menus |
| 栏目配置 | Clients > Columns |
| 语言包配置 | Clients > Language Packs |
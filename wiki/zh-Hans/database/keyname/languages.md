# 语言设置

> 控制面板 > 系统 > 语言设置

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 是否开启多语言 | language_status | true | boolean |  true 或 false |
| 多语言配置列表 | language_menus |  | array | [语言列表 JSON 数据](#语言列表-json-数据) |
| 默认语言 | default_language | zh-Hans | string | 语言标签 |

## 多语言唯一性逻辑

[查看示例和逻辑流程图](../../extensions/multilingual.md)

## 语言列表 JSON 数据

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
        "timeFormatYear": "年时间格式命名",
        "packVersion": "语言包版本",
        "isEnabled": "true 或者 false"
    },
    {
        "rating": 1,
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
        "packVersion": 1,
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

## 帮助说明

| 支持多语言的配置项 | 操作路径 |
| --- | --- |
| 服务条款 | 系统 > 政策设置 > 政策内容 |
| 隐私权政策 | 系统 > 政策设置 > 政策内容 |
| Cookies 政策 | 系统 > 政策设置 > 政策内容 |
| 注销说明 | 系统 > 政策设置 > 政策内容 |
| 站点名称 | 系统 > 站点设置 |
| 站点介绍 | 系统 > 站点设置 |
| 验证码模板 | 系统 > 发信设置 > 验证码模板 > 配置模板 |
| 钱包支付扩展名称 | 系统 > 钱包设置 > 支付服务商 > 显示名称 |
| 钱包提现扩展名称 | 系统 > 钱包设置 > 提现支持渠道 > 显示名称 |
| 命名配置 | 运营 > 命名配置 |
| 表情包名称 | 运营 > 表情配置 > 表情小组名 |
| 发表帖子规则提示 | 运营 > 发表配置 > 发表帖子 > 发表帖子特殊规则 > 规则提示 |
| 发表评论规则提示 | 运营 > 发表配置 > 发表评论 > 发表帖子特殊规则 > 规则提示 |
| 用户角色名 | 运营 > 用户角色 > 角色名 |
| 内容小组名称 | 运营 > 内容小组 > 小组名称 |
| 内容小组描述 | 运营 > 内容小组 > 小组描述 |
| 编辑器扩展名称 | 扩展 > 编辑器扩展 > 显示名称 |
| 搜索类型扩展名称 | 扩展 > 内容类型扩展 > 显示名称 |
| 管理扩展名称 | 扩展 > 管理扩展 > 显示名称 |
| 小组扩展名称 | 扩展 > 小组扩展 > 显示名称 |
| 用户功能扩展名称 | 扩展 > 用户功能扩展 > 显示名称 |
| 用户资料扩展名称 | 扩展 > 用户资料扩展 > 显示名称 |
| 菜单配置 | 客户端 > 菜单配置 |
| 栏目配置 | 客户端 > 栏目配置 |
| 语言包配置 | 客户端 > 语言包配置 |
# 预设键名

## 系统事件配置

| 栏目标题 | 键名 | 说明 |
| --- | --- | --- |
| [插件订阅记录](../../extensions/plugin/functions.md#订阅数据表数据活动) | subscribe_items | 插件向主程序订阅事件 `item_tag = systems` |
| [插件定时任务](../../extensions/plugin/functions.md#定时任务) | crontab_items | 插件向主程序标注定时任务 `item_tag = systems` |

::: details 查看「插件订阅记录」示例
```json
[
    {
        "type": "订阅类型",
        "unikey": "订阅者（插件）",
        "cmdWord": "订阅者的命令字",
        "subTableName": "订阅的表，类型 1 专用"
    },
    {
        "type": 1,
        "unikey": "AqSms",
        "cmdWord": "sendSms",
        "subTableName": "users"
    }
]
```
:::
::: details 查看「插件定时任务」示例
```json
[
    {
        "unikey": "定时任务插件",
        "cmdWord": "定时任务插件命令字",
        "cronTableFormat": "定时任务执行周期（定时任务表达式）"
    },
    {
        "unikey": "Fresns",
        "cmdWord": "checkDeleteAccount",
        "cronTableFormat": "* * /6 * *"
    }
]
```
:::

## 用户扩展分值

数据表 [user_stats](../users/user-stats.md)

| 键标签 | 键名 | 备注 | 是否接口输出 |
| --- | --- | --- | --- |
| users | extcredits1_name | 扩展 1 名称 | 1 |
| users | extcredits1_unit | 扩展 1 单位 | 1 |
| users | extcredits1_status | 扩展 1 状态（1.不启用 2.私有 3.公开） | 1 |
| users | extcredits2_name | 扩展 2 名称 | 1 |
| users | extcredits2_unit | 扩展 2 单位 | 1 |
| users | extcredits2_status | 扩展 2 状态（1.不启用 2.私有 3.公开） | 1 |
| users | extcredits3_name | 扩展 3 名称 | 1 |
| users | extcredits3_unit | 扩展 3 单位 | 1 |
| users | extcredits3_status | 扩展 3 状态（1.不启用 2.私有 3.公开） | 1 |
| users | extcredits4_name | 扩展 4 名称 | 1 |
| users | extcredits4_unit | 扩展 4 单位 | 1 |
| users | extcredits4_status | 扩展 4 状态（1.不启用 2.私有 3.公开） | 1 |
| users | extcredits5_name | 扩展 5 名称 | 1 |
| users | extcredits5_unit | 扩展 5 单位 | 1 |
| users | extcredits5_status | 扩展 5 状态（1.不启用 2.私有 3.公开） | 1 |

## 运营配置

| 键标签 | 键名 | 备注 | 是否接口输出 |
| --- | --- | --- | --- |
| commons | bulletin_name | 系统公告名称，多语言 | 1 |
| commons | bulletin_contents | 系统公告内容，数组，多语言 | 1 |
| commons | advertising | 广告内容的数组 | 1 |

### 示例: bulletin_contents

```json
[
    {
        "date": "10/18/2022",
        "title": "[Must Read] Guide to give feedback to Fresns official questions",
        "titleColor": "#f40",
        "description": "Guide to give feedback to Fresns official questions",
        "descriptionColor": null,
        "buttonName": "Learn more",
        "buttonLink": "https://fresns.org/guide/feedback.html",
    }
]
```

### 示例: advertising

```json
[
    {
        "code": "webAd",
        "content": "", // html code
    }
]
```

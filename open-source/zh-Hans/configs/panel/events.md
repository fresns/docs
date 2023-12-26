# 事件

> 控制面板 > 仪表盘 > 事件

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 定时任务 | crontab_items | [] | array |  |
| 订阅事件 | subscribe_items | [] | array |  |

**定时任务**

```json
[
    {
        "fskey": "定时任务插件",
        "cmdWord": "定时任务插件命令字",
        "cronTableFormat": "定时任务执行周期（定时任务表达式）"
    },
    {
        "fskey": "Fresns",
        "cmdWord": "checkDeleteAccount",
        "cronTableFormat": "* * /6 * *"
    }
]
```

**订阅事件**

```json
[
    {
        "type": "订阅类型",
        "fskey": "订阅者（插件）",
        "cmdWord": "订阅者的命令字",
        "subject": "订阅的表名或查看类型"
    },
    {
        "type": 1,
        "fskey": "AqSms",
        "cmdWord": "sendSms",
        "subject": "users"
    }
]
```

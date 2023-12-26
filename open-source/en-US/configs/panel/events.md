# Events

> Panel > Dashboard > Events

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Crontab | crontab_items | [] | array |  |
| Subscribe | subscribe_items | [] | array |  |

**Crontab**

```json
[
    {
        "fskey": "Scheduled Task Plugin",
        "cmdWord": "Scheduled Task Plugin Command Word",
        "cronTableFormat": "Scheduled Task Execution Cycle (Cron Expression)"
    },
    {
        "fskey": "Fresns",
        "cmdWord": "checkDeleteAccount",
        "cronTableFormat": "* * /6 * *"
    }
]
```

**Subscribe**

```json
[
    {
        "type": "Subscription type",
        "fskey": "Subscriber (Plugin)",
        "cmdWord": "Subscriber's command word",
        "subject": "Subscribed table or view type"
    },
    {
        "type": 1,
        "fskey": "AqSms",
        "cmdWord": "sendSms",
        "subject": "users"
    }
]
```

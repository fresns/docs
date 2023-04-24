# User Panel

- Endpoint Path: `/api/v2/user/panel`
- Method: `GET`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | **required** | **required** |
| X-Fresns-Uid-Token | **required** | **required** |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "multiUser": {
            "status": "Boolean / Whether they have the right to use",
            "service": "String / Service plugin URL parameter"
        },
        "features": [
            {
                // User Feature Extensions
                // Common Data Structure -> Extend Function Info
            }
        ],
        "profiles": [
            {
                // User Profile Extensions
                // Common Data Structure -> Extend Function Info
            }
        ],
        "conversations": {
            "conversationCount": "Number / Conversation count",
            "unreadMessages": "Number / Unread conversation message count"
        },
        "unreadNotifications":{
            "systems": "Number / Unread system notifications",
            "recommends": "Number / Unread recommendations",
            "likes": "Number / Unread likes",
            "dislikes": "Number / Unread dislikes",
            "follows": "Number / Unread follows",
            "blocks": "Number / Unread blocks",
            "mentions": "Number / Unread mentions (at)",
            "comments": "Number / Unread comments (replies)"
        },
        "draftCount": {
            "posts": "Number / Post draft count",
            "comments": "Number / Comment draft count"
        },
        "publishConfig": {
            // Post publishing permission configuration
            "post": {
                "perm": {
                    "draft": "Boolean / Can create new drafts",
                    "publish": "Boolean / Has permission to publish",
                    "review": "Boolean / Publishing requires review",
                    "emailRequired": "Boolean / Email requirement met",
                    "phoneRequired": "Boolean / Phone requirement met",
                    "realNameRequired": "Boolean / Real name requirement met",
                    "tips": [
                        "String / Request language without requirements 1",
                        "String / Request language without requirements 2"
                    ]
                },
                "limit": {
                    "status": "Boolean / Are there special rules",
                    "isInTime": "Boolean / Is within the execution time range",
                    "type": "Number / 1. Effective within a specified time period 2. Recurring effective within a specified time period every day",
                    "periodStart": "String / type=1 exclusive, start date and time",
                    "periodEnd": "String / type=1 exclusive, end date and time",
                    "cycleStart": "String / type=2 exclusive, start time",
                    "cycleEnd": "String / type=2 exclusive, end time",
                    "rule": "Number / 1. Can be published but needs review 2. Forbidden to publish",
                    "tip": "String / Tips"
                }
            },
            // Comment publishing permission configuration
            "comment": {
                "perm": {
                    "draft": "Boolean / Can create new drafts",
                    "publish": "Boolean / Has permission to publish",
                    "review": "Boolean / Publishing requires review",
                    "emailRequired": "Boolean / Email requirement met",
                    "phoneRequired": "Boolean / Phone requirement met",
                    "realNameRequired": "Boolean / Real name requirement met",
                    "tips": [
                        "String / Request language without requirements 1",
                        "String / Request language without requirements 2"
                    ]
                },
                "limit": {
                    "status": "Boolean / Are there special rules",
                    "isInTime": "Boolean / Is within the execution time range",
                    "type": "Number / 1. Effective within a specified time period 2. Recurring effective within a specified time period every day",
                    "periodStart": "String / type=1 exclusive, start date and time",
                    "periodEnd": "String / type=1 exclusive, end date and time",
                    "cycleStart": "String / type=2 exclusive, start time",
                    "cycleEnd": "String / type=2 exclusive, end time",
                    "rule": "Number / 1. Can be published but needs review 2. Forbidden to publish",
                    "tip": "String / Tips"
                }
            },
        },
        "fileAccept": {
            "images": "String / Allowed image extensions",
            "videos": "String / Allowed video extensions",
            "audios": "String / Allowed audio extensions",
            "documents": "String / Allowed document extensions"
        }
    }
}
```

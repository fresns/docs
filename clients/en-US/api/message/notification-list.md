# [Notification] List

- Endpoint Path: `/api/fresns/v1/notification/list`
- Method: `GET`
- Request: `Query`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | **required** | **required** |
| X-Fresns-Uid-Token | **required** | **required** |

## Query Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| types | String | *optional* | `1` System `2` Recommend `3` Like `4` Dislike `5` Follow `6` Block `7` Mention `8` Comment `9` Quote |
| status | Boolean | *optional* | `0` Unread<br>`1` Read<br>Null to output all |
| whitelistUserKeys | String | *optional* | Whitelist key names, only returns key-value pairs for the given key names<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays<br>Valid only for the `actionUser` parameter |
| blacklistUserKeys | String | *optional* | Blacklist key names, removes specified key-value pairs from the returned data<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays<br>Valid only for the `actionUser` parameter |
| whitelistInfoKeys | String | *optional* | Whitelist key names, only returns key-value pairs for the given key names<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays<br>Valid only for the `actionInfo` parameter |
| blacklistInfoKeys | String | *optional* | Blacklist key names, removes specified key-value pairs from the returned data<br>Multiple separated by English commas, supports "dot notation" for multi-dimensional arrays<br>Valid only for the `actionInfo` parameter |
| pageSize | Number | *optional* | Number of items per page (default 15 items) |
| page | Number | *optional* | Page number (default 1) |

**Request Description**

- Leave `types` empty to output all, or pass multiple parameters separated by English commas.
- Sorted in descending order by time, with the latest ones at the top.
- **System message interpretation:**
    - `types=1` means the system sent you a `content` message.
        - `isAccessPlugin`: Whether to visit the plugin page.
        - `actionUser`: Whether there is a triggering user.
        - `actionObject + actionInfo`: Whether there is additional content.
- **Recommended message interpretation:**
    - `types=2` means the system recommended content for you.
        - `content`: Recommendation text.
        - `isAccessPlugin`: Whether to visit the plugin page.
        - `actionUser`: Whether there is a triggering user.
        - `actionObject + actionInfo`: Recommended content.
- **Interaction message interpretation:**
    - `types=3` means `actionUser` liked your `actionObject + actionInfo`.
    - `types=4` means `actionUser` disliked your `actionObject + actionInfo`.
    - `types=5` means `actionUser` followed your `actionObject + actionInfo`.
    - `types=6` means `actionUser` blocked your `actionObject + actionInfo`.
    - `types=7` means `actionUser` mentioned you in `actionObject + actionInfo`.
        - `content`: Summary of the mentioned content.
    - `types=8` means `actionUser` commented on your `actionObject + actionInfo`.
        - `content`: Summary of the comment content.
        - `contentFsid`: Their comment cid.
    - `types=9` means `actionUser` quoted on your `actionObject=4 + actionInfo`.
        - `content`: Summary of the post content.
        - `contentFsid`: Their post pid.
- **Trigger action `actionType` type introduction:**
    - 1. Like
    - 2. Dislike
    - 3. Follow
    - 4. Block
    - 5. Publish
    - 6. Edit
    - 7. Delete
    - 8. Sticky
    - 9. Digest
    - 10. Manage

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "pagination": {
            "total": "Number / How much data in total",
            "pageSize": "Number / How much data on each page",
            "currentPage": "Number / Current page number",
            "lastPage": "Number / Last page number"
        },
        "list": [
            {
                "nmid": "String / Notification Message ID",
                "type": "Number / Notification type",
                "content": "String / Notification content",
                "isMarkdown": "Boolean / Whether the content is in Markdown format",
                "isMention": "Boolean / Is mention to a notice (I was mentioned in someone else's content and then notified of the interactive action)",
                "isAccessApp": "Boolean / Whether to visit the app page",
                "appUrl": "String / App page URL",
                "actionUser": {
                    // User information of the user who triggered the message
                    // Common Data Structure -> User Info
                },
                "actionUserIsAnonymous": "Boolean / Whether anonymous",
                "actionType": "Number / Trigger action type",
                "actionObject": "Number / Trigger target",
                "actionInfo": {
                    // Trigger-related content (Common Data Structure)
                    // actionObject=1  User information
                    // actionObject=2  Group information
                    // actionObject=3  Hashtag information
                    // actionObject=4  Post information
                    // actionObject=5  Comment information
                },
                "contentFsid": "String / Content event pid or cid",
                "datetime": "String / Notification time",
                "datetimeFormat": "String / Formatted notification time",
                "timeAgo": "String / Humanized notification time",
                "readStatus": "Boolean / Read status"
            }
        ]
    }
}
```

- [Common Data Structure -> User Info](../../reference/data/user.md)

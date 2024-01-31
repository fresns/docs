---
aside: false
---

# Draft Info

```json
{
    "did": "String / Draft ID",
    "quotedPid": "String / Quoted Post ID", // Post Only
    "replyToPid": "String / Reply to post id", // Comment Only
    "replyToCid": "String / Reply to comment id", // Comment Only
    "title": "String / Title", // Post Only
    "content": "String / Content",
    "contentLength": "Number / Total Content Length",
    "isMarkdown": "Boolean / Whether it is in MD format",
    "isAnonymous": "Boolean / Whether anonymous",
    "locationInfo": {
        // Location Info
    },
    "moreInfo": {
        // The following keys are known
    },
    "permissions": {
        // Permissions
    },
    "archives": [
        // Common Data Structure -> Extend Archive Info
    ],
    "files": {
        "images": [
            {
                // Common Data Structure -> File Info
            }
        ],
        "videos": [
            {
                // Common Data Structure -> File Info
            }
        ],
        "audios": [
            {
                // Common Data Structure -> File Info
            }
        ],
        "documents": [
            {
                // Common Data Structure -> File Info
            }
        ]
    },
    "extends": {
        "texts": [
            {
                // Common Data Structure -> Extend Content Info -> texts
            }
        ],
        "infos": [
            {
                // Common Data Structure -> Extend Content Info -> infos
            }
        ],
        "actions": [
            {
                // Common Data Structure -> Extend Content Info -> actions
            }
        ]
    },
    "group": {
        // The group to which the item belongs can be null.
        // Common Data Structure -> Group Info
    },
    "geotag": {
        // Common Data Structure -> Geotag Info
    },
    "createdDatetime": "String / Create Time",
    "createdTimeAgo": "String / Human-readable Create Time",
    "state": "Number / State",
    "reason": "String / Rejection reason during review"
}
```

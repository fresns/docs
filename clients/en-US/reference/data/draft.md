---
aside: false
---

# Draft Info

```json
{
    "did": "String / Draft ID",
    "fsid": "String / Published content pid or cid",
    "quotedPid": "String / Quoted Post ID", // Post Only
    "replyToPid": "String / Reply to post id", // Comment Only
    "replyToCid": "String / Reply to comment id", // Comment Only
    "title": "String / Title", // Post Only
    "content": "String / Content",
    "contentLength": "Number / Total Content Length",
    "isMarkdown": "Boolean / Whether it is in MD format",
    "isAnonymous": "Boolean / Whether anonymous",
    "isPrivate": "Boolean / Comment whether private",
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

## Post: `permissions` Introduction

```json
{
    "editor": {
        "isAppEditor": "Boolean / Is it edited only in the app?",
        "editorFskey": "String / editor fskey"
    },
    "contentWritingDirection": "String / Writing Direction", // ltr or rtl
    "canDelete": "Boolean / Does the author have the right to delete?",
    "readConfig": {
        "isReadLocked": "Boolean / Is a reading auth required",
        "previewPercentage": "Number / content display ratio when unauthorized",
        "whitelist": {
            "users": "Array / whitelist user ID",
            "roles": "Array / whitelist role ID"
        },
        "buttonName": {
            "Language Tag": "String / Button Name",
            "en": "Name"
        },
        "appFskey": "String / auth app fskey"
    },
    "associatedUserListConfig": {
        "hasUserList": "Boolean / Is there a special user list?",
        "userListName": {
            "Language Tag": "String / User List Name",
            "en": "Name"
        },
        "appFskey": "String / user list app fskey"
    },
    "commentConfig": {
        "visible": "Boolean / Whether comments are visible (invisible is hidden from everyone, including the author)",
        "policy": "Number / Who can reply? 1. Everyone / 2. People you follow / 3. People you follow or verified / 4. No one is allowed / 5. Only users you mention",
        "privacy": "String / public or private (visible only to the author of the comment and the author of the post)",
        "action": {
            "hasActionButton": "Boolean / Does the comment have an action button?",
            "buttonName": {
                "Language Tag": "String / Button Name",
                "en": "Name"
            },
            "buttonStyle": "String / Button Style: primary secondary success danger warning info",
            "appFskey": "String / App fskey"
        }
    },
}
```

## Comment: `permissions` Introduction

```json
{
    "editor": {
        "isAppEditor": "Boolean / Is it edited only in the app?",
        "editorFskey": "String / editor fskey"
    },
    "contentWritingDirection": "String / Writing Direction", // ltr or rtl
    "canDelete": "Boolean / Does the author have the right to delete?",
    "activeButton": {
        // Link with post commentConfig.action, replace this configuration
        "hasActiveButton": "Boolean / Whether there is an active button or not",
        "buttonName": {
            "Language Tag": "String / Button Name",
            "en": "Name"
        },
        "buttonStyle": "String / Button Style primary secondary success danger warning info",
        "appFskey": "String / App fskey"
    },
}
```

---
aside: false
---

# Post Info

```json
{
    "pid": "String / Post ID",
    "url": "String / Post Detail Page URL",
    "title": "String / Post Title",
    "content": "String / Post Content or Summary",
    "contentLength": "Number / Total Content Length",
    "langTag": "String / Content Language Tag",
    "writingDirection": "String / Content Writing Direction",
    "isBrief": "Boolean / Whether it is a summary",
    "isMarkdown": "Boolean / Whether it is in MD format",
    "isAnonymous": "Boolean / Whether anonymous",
    "stickyState": "Number / Sticky status 1.No 2.Group Sticky 3.Global Sticky",
    "digestState": "Number / Digest status 1.No 2.General Digest 3.Premium Digest",
    "viewCount": "Number / Total View Count",
    "likeCount": "Number / Total Like Count",
    "dislikeCount": "Number / Total Dislike Count",
    "followCount": "Number / Total Follow Count",
    "blockCount": "Number / Total Block Count",
    "commentCount": "Number / Total Comment Count",
    "commentDigestCount": "Number / Total Digest Comments Count",
    "commentLikeCount": "Number / Total Comment Like Count",
    "commentDislikeCount": "Number / Total Comment Dislike Count",
    "commentFollowCount": "Number / Total Comment Follow Count",
    "commentBlockCount": "Number / Total Comment Block Count",
    "quoteCount": "Number / Total Post Quoted Count",
    "createdDatetime": "String / Post Publish Time",
    "createdTimeAgo": "String / Human-readable Post Publish Time",
    "editedDatetime": "String / Post Last Edit Time",
    "editedTimeAgo": "String / Human-readable Post Last Edit Time",
    "editedCount": "Number / Edit Count",
    "lastCommentDatetime": "String / Last Comment Time",
    "lastCommentTimeAgo": "String / Human-readable last Comment Time",
    "rankState": "Number / Rank State",
    "status": "Boolean / Post Status",
    "readConfig": {
        "isReadLocked": "Boolean / Whether Authorization is Required",
        "previewPercentage": "Number / Content Display Percentage When Unauthorized",
        "buttonName": "String / Button Text When Unauthorized",
        "buttonUrl": "String / URL to Handle Authorization",
    },
    "associatedUserListConfig": {
        "hasUserList": "Boolean / Whether there is a Related User List",
        "userListName": "String / User List Name",
        "userListCount": "Number / User List Count",
        "userListUrl": "String / URL to View User List",
    },
    "commentConfig": {
        "visible": "Boolean / Whether comments are visible (invisible is hidden from everyone, including the author)",
        "policy": "Number / Who can reply? 1. Everyone / 2. People you follow / 3. People you follow or verified / 4. No one is allowed / 5. Only users you mention",
        "privacy": "String / public or private (visible only to the author of the comment and the author of the post)",
        "action": {
            "hasActionButton": "Boolean / Is there a button for comments",
            "buttonName": "String / Button text",
            "buttonStyle": "String / Button style",
            "buttonUrl": "String / Button app URL"
        }
    },
    "moreInfo": {
        // Data Table: posts->more_info
        // The following keys are known
        "ipLocation": "String / Author IP Location Name",
        "deviceName": "String / Author Device Name"
    },
    "archives": [
        // Common Data Structure -> Extend Archive Info
    ],
    "operations": {
        // Common Data Structure -> Extend Operation Info
    },
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
    "hashtags": [
        {
            // Post Related Hashtags
            // Common Data Structure -> Hashtag Info
        }
    ],
    "geotag": {
        // Common Data Structure -> Geotag Info
    },
    "author": {
        // Post author
        // Common Data Structure -> User Info
    },
    "isMultiLevelQuote": "Boolean / Whether there are multiple levels of reference, and whether quoted posts are also referenced at the previous level.",
    "quotedPost": {
        // Posts quoted by the current post
        // Common Data Structure -> Post Info
    },
    "previewLikeUsers": [
        {
            // Common Data Structure -> User Info
        }
    ],
    "previewComments": [
        {
            // Common Data Structure -> Comment Info
        }
    ],
    "manages": [
        // Post Management Extension
        // Common Data Structure -> Extend Function Info
    ],
    "editControls": {
        "isMe": "Boolean / Whether I am the author",
        "canDelete": "Boolean / Whether deletion is allowed",
        "canEdit": "Boolean / Whether editing is allowed",
        "isAppEditor": "Boolean / Whether it's a app editor",
        "editorUrl": "String / App editor access URL"
    },
    "interaction": {
        "likeEnabled": "Boolean / Whether like is allowed",
        "likeName": "String / Custom name for the like action",
        "likeUserTitle": "String / User title for like interactive",
        "likePublicRecord": "Boolean / Whether the records is public",
        "likePublicCount": "Boolean / Whether the count is public",
        "dislikeEnabled": "Boolean / Whether dislike is allowed",
        "dislikeName": "String / Custom name for the dislike action",
        "dislikeUserTitle": "String / User title for dislike interactive",
        "dislikePublicRecord": "Boolean / Whether the records is public",
        "dislikePublicCount": "Boolean / Whether the count is public",
        "followEnabled": "Boolean / Whether follow is allowed",
        "followName": "String / Custom name for the follow action",
        "followUserTitle": "String / User title for follow interactive",
        "followPublicRecord": "Boolean / Whether the records is public",
        "followPublicCount": "Boolean / Whether the count is public",
        "blockEnabled": "Boolean / Whether block is allowed",
        "blockName": "String / Custom name for the block action",
        "blockUserTitle": "String / User title for block interactive",
        "blockPublicRecord": "Boolean / Whether the records is public",
        "blockPublicCount": "Boolean / Whether the count is public",
        "likeStatus": "Boolean / Like Status",
        "dislikeStatus": "Boolean / Dislike Status",
        "followStatus": "Boolean / Follow Status",
        "blockStatus": "Boolean / Block Status",
        "note": "String / My interaction note (follow or block)"
    },
    "followType": "String / From which type of follow"
    // followType=null: none
    // followType=user: followed users
    // followType=group: followed groups
    // followType==digest: premium digest
}
```

## History Post Info

```json
{
    "hpid": "String / History Post ID",
    "pid": "String / Belongs to post ID",
    "title": "String / Post Title",
    "content": "String / Post Content or Summary",
    "contentLength": "Number / Total Content Length",
    "langTag": "String / Content Language Tag",
    "writingDirection": "String / Content Writing Direction",
    "isBrief": "Boolean / Whether it is a summary",
    "isMarkdown": "Boolean / Whether it is in MD format",
    "isAnonymous": "Boolean / Whether anonymous",
    "createdDatetime": "String / Post Publish Time",
    "createdTimeAgo": "String / Human-readable Post Publish Time",
    "status": "Boolean / Post Status",
    "locationInfo": {
        // Location Info
    },
    "moreInfo": {
        // The following keys are known
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
    "author": {
        // Post author
        // Common Data Structure -> User Info
    }
}
```

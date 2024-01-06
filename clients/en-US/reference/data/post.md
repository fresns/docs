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
    "postCount": "Number / Total Related Posts Count, the number of other people quoting it",
    "createdDatetime": "String / Post Publish Time",
    "createdTimeAgo": "String / Human-readable Post Publish Time",
    "editedDatetime": "String / Post Last Edit Time",
    "editedTimeAgo": "String / Human-readable Post Last Edit Time",
    "editedCount": "Number / Edit Count",
    "latestCommentDatetime": "String / Latest Comment Time",
    "latestCommentTimeAgo": "String / Human-readable Latest Comment Time",
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
        "hidden": "Boolean / Whether to hide all comments",
        "disabled": "Boolean / Whether comments are disabled",
        "private": "Boolean / Whether the comment is private (visible only to the comment author and post author)",
        "action": {
            "hasActionButton": "Boolean / Is there a button for comments",
            "buttonName": "String / Button text",
            "buttonStyle": "String / Button style",
            "appUrl": "String / Configuration app URL"
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
    "extends": {
        // Common Data Structure -> Extend Content Info
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

# History Post Info

```json
{
    "did": "String / Draft ID", // When used as a draft
    "hpid": "String / History Post ID",
    "pid": "String / Belongs to post ID",
    "quotedPid": "String / Quoted post ID",
    "isAppEditor": "Boolean / Is app editor",
    "editorFskey": "String / Editor app Fskey",
    "editorUrl": "String / Editor access URL",
    "group": {
        // Belongs to group
        // Common Data Structure -> Group Info
    },
    "title": "String / Post title",
    "content": "String / Post content or brief",
    "contentLength": "Number / Total content length",
    "isBrief": "Boolean / Is brief",
    "isMarkdown": "Boolean / Is MD format",
    "isAnonymous": "Boolean / Is anonymous",
    "state": "Number / Status",
    "reason": "String / Rejection reason during review",
    "mapInfo": {
        "mapId": "Number / Latitude and longitude map number",
        "latitude": "String / Latitude",
        "longitude": "String / Longitude",
        "scale": "String / Map scale",
        "continent": "String / Continent name",
        "continentCode": "String / Continent code",
        "country": "String / Country name",
        "countryCode": "String / Country code",
        "region": "String / Region name",
        "regionCode": "String / Region code",
        "city": "String / City name",
        "cityCode": "String / City code",
        "district": "String / District name",
        "address": "String / Address",
        "zip": "String / Zip code",
        "poi": "String / POI information",
        "poiId": "String / POI ID"
    },
    "readConfig": {
        "isReadLocked": "Boolean / Is permission configuration restricted",
        "previewPercentage": "Number / Pre-read percentage when unauthorized",
        "buttonName": {
            "langTag": "name" // Button text when unauthorized, multilingual configuration
        },
        "appUrl": "String / Configuration app URL",
        "appFskey": "String / Configuration app fskey",
        "permissions": {
            "users": [
                {
                    // Pre-authorized users
                    // Common Data Structure -> User Info
                }
            ],
            "roles": [
                // Pre-authorized roles
                {
                    "rid": "Number / Role ID",
                    "nicknameColor": "String / Nickname color",
                    "name": "String / Role name",
                    "nameDisplay": "Boolean / Is role name displayed",
                    "icon": "String / Role icon URL",
                    "iconDisplay": "Boolean / Is role icon displayed",
                    "status": "Boolean / Is role valid"
                }
            ]
        },
    },
    "affiliatedUserConfig": {
        "hasUserList": "Boolean / Is there a related user list",
        "userListName": {
            "langTag": "name" // User list name, multilingual configuration
        },
        "appFskey": "String / Configuration app fskey",
        "appUrl": "String / Configuration app URL"
    },
    "commentConfig": {
        "disabled": "Boolean / Whether comments are disabled",
        "private": "Boolean / Whether the comment is private (visible only to the comment author and post author)",
        "action": {
            "hasActionButton": "Boolean / Is there a button for comments",
            "buttonName": {
                "langTag": "name" // Button text, multilingual configuration
            },
            "buttonStyle": "String / Button style",
            "appFskey": "String / Configuration app fskey",
            "appUrl": "String / Configuration app URL"
        }
    },
    "author": {
        // Common Data Structure -> User Info
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
    "archives": [
        // Common Data Structure -> Extend Archive Info
    ],
    "operations": {
        // Common Data Structure -> Extend Operation Info
    },
    "extends": {
        // Common Data Structure -> Extend Content Info
    }
}
```

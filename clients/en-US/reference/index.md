# Introduction

Develop client applications with Fresns unified and standardized APIs. Craft applications suited for various environments with a single development effort, ensuring compatibility and developer efficiency.

## Return Result Format

The Fresns API is based on the `RESTful` standard and returns results in the following format

| Key | Description |
| --- | --- |
| code | [Error Code](error-codes.md) |
| message | Status Message |
| data | Fresns Data |

```json
{
    "code": 0,
    "message": "ok",
    "data": {}
}
```

## Data Specification

- Empty array use `[]`
- Empty object use `null`
- like/dislike/follow/block The count parameter, if `null`, means the backend is not public, if public, it is a numeric value.

## FSID Introduction

| FSID | Description |
| --- | --- |
| aid | Account ID |
| uid | User ID |
| sid | Space ID (Cloud Service ID) |
| gid | Group ID |
| rid | Role ID |
| nid | Notification ID |
| cvid | Conversation ID |
| cmid | Conversation Message ID |
| hid | Hashtag ID |
| gtid | Geotag ID |
| pid | Post ID |
| cid | Comment ID |
| hpid | History Post ID |
| hcid | History Comment ID |
| fid | File ID |
| eid | Extend Content ID |
| did | Draft ID |

## Introduction of operation mode

- [Configuration Table](configs.md#general) key name `site_mode`
    - Public mode, with the key value `public`
    - Private mode, with the key value `private`
- The introduction page of each interface has two modes of account and user parameters that must be transferred.
    - `aid` must be passed, which means that you must login to the account to request the interface. At this time, the token parameter is the `token` of the account
    - When `uid` must be passed, `aid` must also be passed.which means that the user must log in to the "account user" to request the interface. At this time, `token` parameter is the user's `token`

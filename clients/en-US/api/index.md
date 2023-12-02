# API Overview

## Global

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `GET` | /status.json<br>/fresns-api/v1/global/status | Client Status |
| `GET` | /fresns-api/v1/global/configs | Configs |
| `GET` | /fresns-api/v1/global/code-messages | Code Messages |
| `GET` | /fresns-api/v1/global/language-pack | Language Pack |
| `GET` | /fresns-api/v1/global/channels | Extend Channels |
| `GET` | /fresns-api/v1/global/`{type}`/archives | Extend Archives |
| `GET` | /fresns-api/v1/global/storage-token | Storage Token |
| `GET` | /fresns-api/v1/global/roles | User Roles |
| `GET` | /fresns-api/v1/global/`{type}`/content-types | Content Types |
| `GET` | /fresns-api/v1/global/stickers | Stickers |

## Common

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `GET` | /fresns-api/v1/common/ip-info | IP Information |
| `GET` | /fresns-api/v1/common/input-tips | Input Tips |
| `GET` | /fresns-api/v1/common/callback | App or Plugin Callback |
| `PUT` | /fresns-api/v1/common/update-device-token | Update Device Token |
| `POST` | /fresns-api/v1/common/cmd-word | Command Word Request |
| `POST` | /fresns-api/v1/common/extend-action | Extend Action Request |
| `POST` | /fresns-api/v1/common/upload-log | Upload Log |
| `POST` | /fresns-api/v1/common/upload-file | Upload File |
| `GET` | /fresns-api/v1/common/file/`{fid}`/link | File Download Link |
| `GET` | /fresns-api/v1/common/file/`{fid}`/users | File Download Users |

## Account

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `POST` | /fresns-api/v1/account/login | Login |
| `GET` | /fresns-api/v1/account/detail | Account Detail |
| `GET` | /fresns-api/v1/account/wallet-records | Wallet Records |
| `DELETE` | /fresns-api/v1/account/logout | Logout |

## User

**Function**

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `POST` | /fresns-api/v1/user/auth | Auth |
| `GET` | /fresns-api/v1/user/overview | Overview |
| `GET` | /fresns-api/v1/user/extcredits-records | Extcredits Records |
| `PUT` | /fresns-api/v1/user/edit | Edit |
| `POST` | /fresns-api/v1/user/mark | Mark |
| `PUT` | /fresns-api/v1/user/mark-note | Mark Note |

**Interactive**

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `GET` | /fresns-api/v1/user/list | User List |
| `GET` | /fresns-api/v1/user/`{uidOrUsername}`/detail | User Detail |
| `GET` | /fresns-api/v1/user/`{uidOrUsername}`/followers-you-follow | Followers You Know |
| `GET` | /fresns-api/v1/user/`{uidOrUsername}`/interaction/`{type}` | User Interaction Users |
| `GET` | /fresns-api/v1/user/`{uidOrUsername}`/mark/`{markType}`/`{listType}` | User Mark List |

## Message

**Notification**

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `GET` | /fresns-api/v1/notification/list | List |
| `PUT` | /fresns-api/v1/notification/mark-as-read | Mark As Read |
| `DELETE` | /fresns-api/v1/notification/delete | Delete |

**Conversation**

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `GET` | /fresns-api/v1/conversation/list | List |
| `GET` | /fresns-api/v1/conversation/`{cvid}`/detail | Detail |
| `GET` | /fresns-api/v1/conversation/`{cvid}`/messages | Messages |
| `PUT` | /fresns-api/v1/conversation/pin | Pin Conversation |
| `PUT` | /fresns-api/v1/conversation/mark-as-read | Mark As Read |
| `POST` | /fresns-api/v1/conversation/send-message | Send Message |
| `DELETE` | /fresns-api/v1/conversation/delete | Delete Conversation or Messages |

## Group

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `GET` | /fresns-api/v1/group/tree | Group Tree List |
| `GET` | /fresns-api/v1/group/list | Group List |
| `GET` | /fresns-api/v1/group/`{gid}`/detail | Group Detail |
| `GET` | /fresns-api/v1/group/`{gid}`/interaction/`{type}` | Group Interaction Users |

## Hashtag

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `GET` | /fresns-api/v1/hashtag/list | Hashtag List |
| `GET` | /fresns-api/v1/hashtag/`{hid}`/detail | Hashtag Detail |
| `GET` | /fresns-api/v1/hashtag/`{hid}`/interaction/`{type}` | Hashtag Interaction Users |

## Geotag

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `GET` | /fresns-api/v1/geotag/list | Geotag List |
| `GET` | /fresns-api/v1/geotag/`{gtid}`/detail | Geotag Detail |
| `GET` | /fresns-api/v1/geotag/`{gtid}`/interaction/`{type}` | Geotag Interaction Users |

## Post

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `GET` | /fresns-api/v1/post/list | Post List |
| `GET` | /fresns-api/v1/post/timelines | Post List by Timelines |
| `GET` | /fresns-api/v1/post/geotags | Post List by Geotags |
| `GET` | /fresns-api/v1/post/`{pid}`/detail | Post Detail |
| `GET` | /fresns-api/v1/post/`{pid}`/interaction/`{type}` | Post Interaction Users |
| `GET` | /fresns-api/v1/post/`{pid}`/users | Post Affiliated Users |
| `GET` | /fresns-api/v1/post/`{pid}`/quotes | Post Quote It List |
| `GET` | /fresns-api/v1/post/`{pid}`/histories | Post Histories |
| `GET` | /fresns-api/v1/post/history/`{hpid}`/detail | Post History Detail |
| `DELETE` | /fresns-api/v1/post/`{pid}` | Delete |

## Comment

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `GET` | /fresns-api/v1/comment/list | Comment List |
| `GET` | /fresns-api/v1/comment/timelines | Comment List by Timelines |
| `GET` | /fresns-api/v1/comment/geotags | Comment List by Geotags |
| `GET` | /fresns-api/v1/comment/`{cid}`/detail | Comment Detail |
| `GET` | /fresns-api/v1/comment/`{cid}`/interaction/`{type}` | Comment Interaction Users |
| `GET` | /fresns-api/v1/comment/`{cid}`/histories | Comment Histories |
| `GET` | /fresns-api/v1/comment/history/`{hcid}`/detail | Comment History Detail |
| `DELETE` | /fresns-api/v1/comment/`{cid}` | Delete |

## Editor

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `POST` | /fresns-api/v1/editor/`{type}`/quick-publish | Quick Publish |
| `GET` | /fresns-api/v1/editor/`{type}`/configs | Editor Configs |
| `GET` | /fresns-api/v1/editor/`{type}`/drafts | Draft List |
| `POST` | /fresns-api/v1/editor/`{type}`/create | Create Draft |
| `POST` | /fresns-api/v1/editor/`{type}`/generate/`{fsid}` | Generate Draft |
| `GET` | /fresns-api/v1/editor/`{type}`/`{did}` | Draft Detail |
| `PUT` | /fresns-api/v1/editor/`{type}`/`{did}` | Update Draft |
| `POST` | /fresns-api/v1/editor/`{type}`/`{did}` | Submit Publish |
| `PATCH` | /fresns-api/v1/editor/`{type}`/`{did}` | Recall (Draft under review) |
| `DELETE` | /fresns-api/v1/editor/`{type}`/`{did}` | Delete Draft |

## Search

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `GET` | /fresns-api/v1/search/users | Search Users |
| `GET` | /fresns-api/v1/search/groups | Search Groups |
| `GET` | /fresns-api/v1/search/hashtags | Search Hashtags |
| `GET` | /fresns-api/v1/search/posts | Search Posts |
| `GET` | /fresns-api/v1/search/comments | Search Comments |

# API Overview

## Global

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `GET` | /status.json<br>/api/fresns/v1/global/status | Client Status |
| `GET` | /api/fresns/v1/global/configs | Configs |
| `GET` | /api/fresns/v1/global/code-messages | Code Messages |
| `GET` | /api/fresns/v1/global/language-pack | Language Pack |
| `GET` | /api/fresns/v1/global/channels | Extend Channels |
| `GET` | /api/fresns/v1/global/`{type}`/archives | Extend Archives |
| `GET` | /api/fresns/v1/global/`{type}`/content-types | Content Types |
| `GET` | /api/fresns/v1/global/roles | User Roles |
| `GET` | /api/fresns/v1/global/stickers | Stickers |

## Common

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `GET` | /api/fresns/v1/common/ip-info | IP Information |
| `GET` | /api/fresns/v1/common/input-tips | Input Tips |
| `GET` | /api/fresns/v1/common/callback | App or Plugin Callback |
| `PUT` | /api/fresns/v1/common/device-token | Update Device Token |
| `POST` | /api/fresns/v1/common/cmd-word | Command Word Request |
| `POST` | /api/fresns/v1/common/extend-action | Extend Action Request |

## File

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `GET` | /api/fresns/v1/file/storage-token | Storage Token |
| `POST` | /api/fresns/v1/file/uploads | Uploads |
| `PUT` | /api/fresns/v1/file/`{fid}`/warning | Update Warning |
| `GET` | /api/fresns/v1/file/`{fid}`/link | Download Link |
| `GET` | /api/fresns/v1/file/`{fid}`/users | Download Users |

## Account

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `POST` | /api/fresns/v1/account/auth-token | Create Account Token (Login) |
| `DELETE` | /api/fresns/v1/account/auth-token | Delete Account Token (Logout) |
| `GET` | /api/fresns/v1/account/detail | Account Detail |
| `GET` | /api/fresns/v1/account/wallet-records | Wallet Records |

## User

**Function**

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `POST` | /api/fresns/v1/user/auth-token | Create User Token (Login) |
| `GET` | /api/fresns/v1/user/overview | Overview |
| `GET` | /api/fresns/v1/user/extcredits-records | Extcredits Records |
| `PUT` | /api/fresns/v1/user/edit | Edit |
| `POST` | /api/fresns/v1/user/mark | Mark |
| `PUT` | /api/fresns/v1/user/mark-note | Mark Note |

**Interactive**

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `GET` | /api/fresns/v1/user/list | User List |
| `GET` | /api/fresns/v1/user/`{uidOrUsername}`/detail | User Detail |
| `GET` | /api/fresns/v1/user/`{uidOrUsername}`/followers-you-follow | Followers You Know |
| `GET` | /api/fresns/v1/user/`{uidOrUsername}`/interaction/`{type}` | User Interaction Users |
| `GET` | /api/fresns/v1/user/`{uidOrUsername}`/mark/`{markType}`/`{listType}` | User Mark List |

## Message

**Notification**

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `GET` | /api/fresns/v1/notification/list | List |
| `PUT` | /api/fresns/v1/notification/read-status | Mark As Read |
| `DELETE` | /api/fresns/v1/notification/delete | Delete |

**Conversation**

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `GET` | /api/fresns/v1/conversation/list | List |
| `GET` | /api/fresns/v1/conversation/`{cvid}`/detail | Detail |
| `GET` | /api/fresns/v1/conversation/`{cvid}`/messages | Messages |
| `PUT` | /api/fresns/v1/conversation/pin | Pin Conversation |
| `PUT` | /api/fresns/v1/conversation/read-status | Mark As Read |
| `POST` | /api/fresns/v1/conversation/send-message | Send Message |
| `DELETE` | /api/fresns/v1/conversation/delete | Delete Conversation or Messages |

## Group

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `GET` | /api/fresns/v1/group/tree | Group Tree List |
| `GET` | /api/fresns/v1/group/list | Group List |
| `GET` | /api/fresns/v1/group/`{gid}`/detail | Group Detail |
| `GET` | /api/fresns/v1/group/`{gid}`/interaction/`{type}` | Group Interaction Users |

## Hashtag

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `GET` | /api/fresns/v1/hashtag/list | Hashtag List |
| `GET` | /api/fresns/v1/hashtag/`{htid}`/detail | Hashtag Detail |
| `GET` | /api/fresns/v1/hashtag/`{htid}`/interaction/`{type}` | Hashtag Interaction Users |

## Geotag

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `GET` | /api/fresns/v1/geotag/list | Geotag List |
| `GET` | /api/fresns/v1/geotag/`{gtid}`/detail | Geotag Detail |
| `GET` | /api/fresns/v1/geotag/`{gtid}`/interaction/`{type}` | Geotag Interaction Users |

## Post

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `GET` | /api/fresns/v1/post/list | Post List |
| `GET` | /api/fresns/v1/post/timelines | Post List by Timelines |
| `GET` | /api/fresns/v1/post/nearby | Post List by Nearby |
| `GET` | /api/fresns/v1/post/`{pid}`/detail | Post Detail |
| `GET` | /api/fresns/v1/post/`{pid}`/interaction/`{type}` | Post Interaction Users |
| `GET` | /api/fresns/v1/post/`{pid}`/users | Post Affiliated Users |
| `GET` | /api/fresns/v1/post/`{pid}`/quotes | Post Quote It List |
| `GET` | /api/fresns/v1/post/`{pid}`/histories | Post Histories |
| `GET` | /api/fresns/v1/post/history/`{hpid}`/detail | Post History Detail |
| `DELETE` | /api/fresns/v1/post/`{pid}` | Delete |

## Comment

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `GET` | /api/fresns/v1/comment/list | Comment List |
| `GET` | /api/fresns/v1/comment/timelines | Comment List by Timelines |
| `GET` | /api/fresns/v1/comment/nearby | Comment List by Nearby |
| `GET` | /api/fresns/v1/comment/`{cid}`/detail | Comment Detail |
| `GET` | /api/fresns/v1/comment/`{cid}`/interaction/`{type}` | Comment Interaction Users |
| `GET` | /api/fresns/v1/comment/`{cid}`/histories | Comment Histories |
| `GET` | /api/fresns/v1/comment/history/`{hcid}`/detail | Comment History Detail |
| `DELETE` | /api/fresns/v1/comment/`{cid}` | Delete |

## Editor

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `GET` | /api/fresns/v1/editor/`{type}`/configs | Editor Configs |
| `POST` | /api/fresns/v1/editor/`{type}`/publications | Quick Publish |
| `GET` | /api/fresns/v1/editor/`{type}`/drafts | Draft List |
| `POST` | /api/fresns/v1/editor/`{type}`/draft | Create Draft |
| `POST` | /api/fresns/v1/editor/`{type}`/edit/`{fsid}` | Edit post or comment |
| `GET` | /api/fresns/v1/editor/`{type}`/draft/`{did}` | Draft Detail |
| `PUT` | /api/fresns/v1/editor/`{type}`/draft/`{did}` | Draft Update |
| `POST` | /api/fresns/v1/editor/`{type}`/draft/`{did}` | Draft Publish |
| `PATCH` | /api/fresns/v1/editor/`{type}`/draft/`{did}` | Draft Recall (Draft under review) |
| `DELETE` | /api/fresns/v1/editor/`{type}`/draft/`{did}` | Draft Delete |

## Search

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `GET` | /api/fresns/v1/search/users | Search Users |
| `GET` | /api/fresns/v1/search/groups | Search Groups |
| `GET` | /api/fresns/v1/search/hashtags | Search Hashtags |
| `GET` | /api/fresns/v1/search/geotags | Search Geotags |
| `GET` | /api/fresns/v1/search/posts | Search Posts |
| `GET` | /api/fresns/v1/search/comments | Search Comments |

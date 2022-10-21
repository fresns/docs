# API Overview

## Global

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `GET` | /api/v2/global/configs | Global Configs |
| `GET` | /api/v2/global/`{type}`/archives | Extend Archives |
| `GET` | /api/v2/global/upload-token | Get Upload Token |
| `GET` | /api/v2/global/roles | User Roles |
| `GET` | /api/v2/global/maps | Map Services |
| `GET` | /api/v2/global/content-type | Content Type |
| `GET` | /api/v2/global/stickers | Stickers |
| `GET` | /api/v2/global/block-words | Block Words |

## Common

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `GET` | /api/v2/common/input-tips | Input Tips |
| `GET` | /api/v2/common/callback | Plugin Callback |
| `POST` | /api/v2/common/send-verify-code | Send Verify Code |
| `POST` | /api/v2/common/upload-log | Upload Log |
| `POST` | /api/v2/common/upload-file | Upload File |
| `GET` | /api/v2/common/file/`{fid}`/download-link | File Download Link |
| `GET` | /api/v2/common/file/`{fid}`/users | File Download Users |

## Account

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `POST` | /api/v2/account/register | Register |
| `POST` | /api/v2/account/login | Login |
| `PUT` | /api/v2/account/reset-password | Reset Password |
| `GET` | /api/v2/account/detail | Account Detail |
| `GET` | /api/v2/account/wallet-logs | Wallet Logs |
| `POST` | /api/v2/account/verify-identity | Verify Identity |
| `PUT` | /api/v2/account/edit | Edit |
| `DELETE` | /api/v2/account/logout | Logout |
| `POST` | /api/v2/account/apply-delete | Apply Delete |
| `POST` | /api/v2/account/recall-delete | Recall Delete |

## User

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `GET` | /api/v2/user/list | User List |
| `GET` | /api/v2/user/`{uidOrUsername}`/detail | User Detail |
| `GET` | /api/v2/user/`{uidOrUsername}`/interactive/`{type}` | User Interactive Users |
| `GET` | /api/v2/user/`{uidOrUsername}`/mark/`{markType}`/`{listType}` | User Mark List |
| `POST` | /api/v2/user/auth | Auth |
| `GET` | /api/v2/user/panel | Panel |
| `PUT` | /api/v2/user/edit | Edit |
| `POST` | /api/v2/user/mark | Mark |
| `PUT` | /api/v2/user/mark-note | Mark Note |

## Message

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `GET` | /api/v2/notify/list | [Notify] List |
| `PUT` | /api/v2/notify/mark-as-read | [Notify] Mark As Read |
| `DELETE` | /api/v2/notify/delete | [Notify] Delete |
| `GET` | /api/v2/dialog/list | [Dialog] List |
| `GET` | /api/v2/dialog/`{dialogId}`/detail | [Dialog] Detail |
| `GET` | /api/v2/dialog/`{dialogId}`/messages | [Dialog] Messages |
| `PUT` | /api/v2/dialog/mark-as-read | [Dialog] Mark As Read |
| `POST` | /api/v2/dialog/send-message | [Dialog] Send Message |
| `DELETE` | /api/v2/dialog/delete | [Dialog] Delete Dialog or Messages |

## Group

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `GET` | /api/v2/group/tree | Group Tree List |
| `GET` | /api/v2/group/categories | Group Categories |
| `GET` | /api/v2/group/list | Group List |
| `GET` | /api/v2/group/`{gid}`/detail | Group Detail |
| `GET` | /api/v2/group/`{gid}`/interactive/`{type}` | Group Interactive Users |

## Hashtag

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `GET` | /api/v2/hashtag/list | Hashtag List |
| `GET` | /api/v2/hashtag/`{hid}`/detail | Hashtag Detail |
| `GET` | /api/v2/hashtag/`{hid}`/interactive/`{type}` | Hashtag Interactive Users |

## Post

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `GET` | /api/v2/post/list | Post List |
| `GET` | /api/v2/post/follow/`{type}` | Post List by Follow |
| `GET` | /api/v2/post/nearby | Post List by Nearby |
| `GET` | /api/v2/post/`{pid}`/detail | Post Detail |
| `GET` | /api/v2/post/`{pid}`/interactive/`{type}` | Post Interactive Users |
| `GET` | /api/v2/post/`{pid}`/user-list | Post Affiliate User List |
| `GET` | /api/v2/post/`{pid}`/logs | Post Logs |
| `GET` | /api/v2/post/`{pid}`/log/`{logId}` | Post Log Detail |
| `DELETE` | /api/v2/post/`{pid}` | Delete |

## Comment

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `GET` | /api/v2/comment/list | Comment List |
| `GET` | /api/v2/comment/follow/`{type}` | Comment List by Follow |
| `GET` | /api/v2/comment/nearby | Comment List by Nearby |
| `GET` | /api/v2/comment/`{cid}`/detail | Comment Detail |
| `GET` | /api/v2/comment/`{cid}`/interactive/`{type}` | Comment Interactive Users |
| `GET` | /api/v2/comment/`{cid}`/logs | Comment Logs |
| `GET` | /api/v2/comment/`{cid}`/log/`{logId}` | Comment Log Detail |
| `DELETE` | /api/v2/comment/`{pid}` | Delete |

## Editor

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `POST` | /api/v2/editor/direct-publish | Direct Publish |
| `GET` | /api/v2/editor/`{type}`/config | Editor Config |
| `GET` | /api/v2/editor/`{type}`/drafts | Draft List |
| `POST` | /api/v2/editor/`{type}`/create | Create Draft |
| `POST` | /api/v2/editor/`{type}`/generate/`{fsid}` | Generate Draft |
| `GET` | /api/v2/editor/`{type}`/`{draftId}` | Draft Detail |
| `PUT` | /api/v2/editor/`{type}`/`{draftId}` | Update Draft |
| `POST` | /api/v2/editor/`{type}`/`{draftId}` | Publish |
| `PATCH` | /api/v2/editor/`{type}`/`{draftId}` | Recall |
| `DELETE` | /api/v2/editor/`{type}`/`{draftId}` | Delete |

## Search

| Method | Endpoint Path | Description |
| --- | --- | --- |
| `GET` | /api/v2/search/users | Search Users |
| `GET` | /api/v2/search/groups | Search Groups |
| `GET` | /api/v2/search/hashtags | Search Hashtags |
| `GET` | /api/v2/search/posts | Search Posts |
| `GET` | /api/v2/search/comments | Search Comments |

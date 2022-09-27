# Path Variables

Whether it is website or mobile application, the use of plug-ins is embedded in [API](../../api/) by URL. Configure the associated plug-in in the administrator control panel. After configuration, users can operate the associated extended content when the editor publishes the content, or click to enter the plug-in page when the client is in use.

## Path Config

- Path of plug-in is configured in `accessPath` parameter of [plugin.json](../plugin/index.md#pluginjson-config-file) file.
- After the plug-in is installed, it will be read and stored in the [plugins->access_path](../../database/plugins/plugins.md) data table field.

## Variable List

| Variable Name | Description | Associated Field |
| --- | --- | --- |
| `{sign}` | Authentication and quick login<br>[Generate sign](url-sign.md) / [Verify sign](../plugin/url-sign.md) |  |
| `{langTag}` | Current user client language tag |  |
| `{type}` | Type of access source (client channel) |  |
| `{scene}` | Scene of the source |  |
| `{postMessageKey}` | Identification name of the client receiving the communication |  |
| `{aid}` | Account ID | accounts->aid |
| `{uid}` | User ID | users->uid |
| `{rid}` | Role ID | roles->id |
| `{gid}` | Group ID | groups->gid |
| `{pid}` | Post ID | posts->pid |
| `{cid}` | Comment ID | comments->cid |
| `{fid}` | File ID | files->fid |
| `{eid}` | Content Expand ID | extends->eid |
| `{plid}` | Post Log ID | post_logs->id |
| `{clid}` | Comment Log ID | comment_logs->id |

## {type} Access source type

`{type}` Variable name introduction

| Variable Value | Description |
| --- | --- |
| `portal` |  |
| `user` |  |
| `group` |  |
| `hashtag` |  |
| `post` |  |
| `comment` |  |
| `profile` |  |
| `account` |  |
| `message` |  |
| `editor` |  |


## {scene} Entrance Scene

`{scene}` Variable name introduction

| Variable Value | Description | Scenes |
| --- | --- | --- |
| `like` | Like Operation | Determine who to operate on based on [source type](#type-access-source-type) |
| `dislike` | Dislike Operation | *Ibid* |
| `follow` | Follow Operation | *Ibid* |
| `block` | Block Operation | *Ibid* |
| `manage` | Management Functions | *Ibid* |
| `join` | Register to join | Register or Login Account |
| `connect` | Connect Management | Manage account connect bindings |
| `walletRecharge` | Recharge Extension |  |
| `walletWithdraw` | Withdrawal Extension |  |
| `extension` | Extended Items | Group Extensions / User Feature Extensions / User Profile Extensions |
| `operationImage` | Functional Extension Information | `operations.diversifyImages` |
| `operationTip` | Functional tip copywriting | `operations.tips` |
| `extendBox` | Extend Content | textBox / infoBox / interactiveBox |
| `postUserList` | Post User List | List of users attached to the post |
| `postAllowBtn` | Post Allow Button | The button displayed when the post has permission requirements and the user has no rights |
| `commentBtn` | Comment Function Button | Comment with button, post author can operate comment |
| `postEditor` | Post Editor |  |
| `commentEditor` | Comment Editor |  |
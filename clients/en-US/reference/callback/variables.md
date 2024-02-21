# Path Variables

Whether it is website or mobile application, the use of plug-ins is embedded in [API](../../api/) by URL. Configure the associated plug-in in the administrator control panel. After configuration, users can operate the associated extended content when the editor publishes the content, or click to enter the plug-in page when the client is in use.

## Path Config

- Path of plug-in is configured in `accessPath` parameter of [plugin.json](https://docs.fresns.com/open-source/extensions/index.md#pluginjson-config-file) file.
- After the plug-in is installed, it will be read and stored in the [apps->access_path](https://docs.fresns.com/open-source/database/apps/apps.md) data table field.

## Variable List

| Variable Name | Description |
| --- | --- |
| `{accessToken}` | Access Token and quick login<br>[Generate accessToken](access-token.md) |
| `{type}` | Type of access source (client channel) |
| `{scene}` | Scene of the source |
| `{postMessageKey}` | Callback identification name<br>Client receiving callback message as `postMessage` |
| `{callbackUlid}` | Callback identification name<br>Client receiving callback message as `API` |
| `{aid}` | Account ID |
| `{uid}` | User ID |
| `{rid}` | Role ID |
| `{gid}` | Group ID |
| `{pid}` | Post ID |
| `{cid}` | Comment ID |
| `{fid}` | File ID |
| `{eid}` | Content Extend ID |
| `{hpid}` | History Post ID |
| `{hcid}` | History Comment ID |
| `{connectPlatformId}` | [Connect ID](../dictionary/connects.md) |
| `{uploadInfo}` | Upload Parameters: [See Upload File API](../../api/common/file-uploads.md) |
| `{locationInfo}` | Location Parameters `mapId,latitude,longitude` Separated by commas<br>[Map ID](../dictionary/maps.md)<br>e.g. `2,1.2803074,103.8610191` |
| `{parameter}` | Custom Parameter |

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
| `sign` | Register or Login | Register or Login Account |
| `renewal` | Member Renewal | Private mode user renewal |
| `realName` | Real-name authentication | Real-name authentication for management accounts |
| `connect` | Connect Management | Manage account connect bindings |
| `walletRecharge` | Recharge Extension |  |
| `walletWithdraw` | Withdrawal Extension |  |
| `groupExtension` | Group Extension |  |
| `profileExtension` | User Profile Extension |  |
| `featureExtension` | User Feature Extension |  |
| `operationImage` | Functional Extension Information | `operations.diversifyImages` |
| `operationTip` | Functional tip copywriting | `operations.tips` |
| `extendBox` | Extend Content | textBox / infoBox / interactionBox |
| `postUserList` | Post User List | List of users attached to the post |
| `postAuthBtn` | Post Read Auth Button | The button displayed when the post has permission requirements and the user has no rights |
| `commentBtn` | Comment Function Button | Comment with button, post author can operate comment |
| `postEditor` | Post Editor |  |
| `commentEditor` | Comment Editor |  |

## {uploadInfo} Upload parameters

- Same as signature:
    - Compressing json data
    - Encode the compressed data in Base64
    - Base64-encoded data is then encoded as a URL
- Parameters

```json
{
    "usageType": "String / Type of file usage: userAvatar, userBanner, conversationMessage, post, comment, postDraft, commentDraft",
    "type": "String / File Type: image,video,audio,document"
}
```

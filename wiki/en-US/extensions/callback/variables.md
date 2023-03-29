# Path Variables

Whether it is website or mobile application, the use of plug-ins is embedded in [API](../../api/) by URL. Configure the associated plug-in in the administrator control panel. After configuration, users can operate the associated extended content when the editor publishes the content, or click to enter the plug-in page when the client is in use.

## Path Config

- Path of plug-in is configured in `accessPath` parameter of [plugin.json](../plugin/index.md#pluginjson-config-file) file.
- After the plug-in is installed, it will be read and stored in the [plugins->access_path](../../database/plugins/plugins.md) data table field.

## Variable List

| Variable Name | Description | Associated Field |
| --- | --- | --- |
| `{authorization}` | Authorization and quick login<br>[Generate Authorization](url-authorization.md) / [Verify Authorization](../plugin/url-authorization.md) |  |
| `{type}` | Type of access source (client channel) |  |
| `{scene}` | Scene of the source |  |
| `{postMessageKey}` | Identification name: Client receiving callback message as `postMessage` |  |
| `{callbackUlid}` | Identification name: Client receiving callback message as `API` | plugin_callbacks->ulid |
| `{aid}` | Account ID | accounts->aid |
| `{uid}` | User ID | users->uid |
| `{rid}` | Role ID | roles->id |
| `{gid}` | Group ID | groups->gid |
| `{pid}` | Post ID | posts->pid |
| `{cid}` | Comment ID | comments->cid |
| `{fid}` | File ID | files->fid |
| `{eid}` | Content Extend ID | extends->eid |
| `{plid}` | Post Log ID | post_logs->id |
| `{clid}` | Comment Log ID | comment_logs->id |
| `{uploadInfo}` | Upload Parameters | [See Upload File API](../../api/common/upload-file.md) |

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
| `postAllowBtn` | Post Allow Button | The button displayed when the post has permission requirements and the user has no rights |
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
    "usageType": "Number / Type of file usage",
    "tableName": "String / Source Table Name",
    "tableColumn": "String / Source Field Name",
    "tableId": "Number / Source table primary key id",
    "tableKey": "String / Source table key name",
    "type": "String / File Type: image,video,audio,document"
}
```

- [usageType Parameter Introduction](../../database/number.md#type-of-file-usage)

# Path Variables

Whether it is website or mobile application, the use of plug-ins is embedded in [API](../../api/) by URL. Configure the associated plug-in in the administrator control panel. After configuration, users can operate the associated extended content when the editor publishes the content, or click to enter the plug-in page when the client is in use.

## Path Config

- Path of plug-in is configured in `accessPath` parameter of [plugin.json](https://docs.fresns.com/open-source/extensions/index.md#pluginjson-config-file) file.
- After the plug-in is installed, it will be read and stored in the [apps->access_path](https://docs.fresns.com/open-source/database/apps/apps.md) data table field.

## Variable List

| Variable Name | Description |
| --- | --- |
| `{accessToken}` | Access Token and quick login<br>[Generate accessToken](access-token.md) |
| `{postMessageKey}` | Callback identification name<br>Client receiving callback message as `postMessage` |
| `{callbackUlid}` | Callback identification name<br>Client receiving callback message as `API` |
| `{redirectUrl}` | Redirect URL |
| `{aid}` | Account ID |
| `{uid}` | User ID |
| `{rid}` | Role ID |
| `{gid}` | Group ID |
| `{htid}` | Hashtag ID |
| `{gtid}` | Geotag ID |
| `{pid}` | Post ID |
| `{cid}` | Comment ID |
| `{fid}` | File ID |
| `{eid}` | Content Extend ID |
| `{hpid}` | History Post ID |
| `{hcid}` | History Comment ID |
| `{did}` | Draft ID |
| `{draftType}` | Draft Type `post` or `comment` |
| `{uploadInfo}` | Upload Parameters: [See Upload File API](../../api/common/file-uploads.md) |
| `{locationInfo}` | Location Parameters `mapId,latitude,longitude` Separated by commas<br>[Map ID](../dictionary/maps.md)<br>e.g. `2,1.2803074,103.8610191` |
| `{connectPlatformId}` | [Connect Platform ID](https://docs.fresns.com/open-source/configs/dictionary/connects.html) |
| `{parameter}` | Custom Parameter |

## {uploadInfo} Upload parameters

- Same as signature:
    - Compressing json data
    - Encode the compressed data in Base64
    - Base64-encoded data is then encoded as a URL
- Parameters

```json
{
    "usageType": "String / Type of file usage: userAvatar, userBanner, conversationMessage, post, comment, postDraft, commentDraft",
    "usageFsid": "String / File usage fsid",
    "type": "String / File Type: image,video,audio,document"
}
```

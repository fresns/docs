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
| `{redirectUrl}` | Redirect URL, use `urlencode()`<br>Support for `{loginToken}` variable name in URL |
| `{connectPlatformId}` | [Connect Platform ID](https://docs.fresns.com/open-source/configs/dictionary/connects.html) |
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
| `{viewType}` | View Type `list`, `detail`, `quoted` |
| `{draftType}` | Draft Type `post` or `comment` |
| `{draftOptions}` | Draft options, same as [creating a draft](../../api/editor/draft-create.md) Body parameters are the same, the object format is converted to a string. |
| `{did}` | Draft ID |
| `{uploadInfo}` | Upload Parameters `usageType,usageFsid,type,archiveCode` Separated by commas<br>[See Upload File API](../../api/common/file-upload.md)<br>e.g. `postDraft,did,image,archiveCode` |
| `{mapInfo}` | Map Parameters `mapId,latitude,longitude` Separated by commas<br>[Map ID](../dictionary/maps.md)<br>e.g. `2,1.2803074,103.8610191` |
| `{parameter}` | Custom Parameter |

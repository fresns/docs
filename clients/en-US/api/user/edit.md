# User Edit

- Endpoint Path: `/api/fresns/v1/user/edit`
- Method: `PUT`
- Request: `application/json`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | **required** | **required** |
| X-Fresns-Uid-Token | **required** | **required** |

## Body Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| username | String | *optional* | Username |
| nickname | String | *optional* | User nickname |
| avatarFid | String | *optional* | Avatar image file FID |
| avatarUrl | String | *optional* | Avatar image URL |
| bannerFid | String | *optional* | Background banner image file FID |
| bannerUrl | String | *optional* | Background banner image URL |
| gender | Number | *optional* | Gender |
| birthday | String | *optional* | Birthday (format: Y-m-d H:i:s) |
| bio | String | *optional* | Bio |
| location | String | *optional* | Location |
| conversationLimit | Number | *optional* | Conversation settings |
| commentLimit | Number | *optional* | Comment settings |
| archives | Array | *optional* | Extended information |

**Request Description**

- Null to not modify.
- Leaving both `avatarFid` and `avatarUrl` empty means not changing them, choose one when passing parameters.
- Leaving both `bannerFid` and `bannerUrl` empty means not changing them, choose one when passing parameters.
- If using `fid` for avatar and background banner images, first use the [file upload interface](../common/upload-file.md), then pass the obtained `fid` as a parameter.
- Example of extended information:

```json
[
    {
        "code": "code",
        "value": "value",
        "isPrivate": false, // Private or not (public display or not)
        "fskey": null
    },
    {
        "code": "code",
        "value": "value",
        "isPrivate": true,
        "fskey": "Fresns"
    }
]
```

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```

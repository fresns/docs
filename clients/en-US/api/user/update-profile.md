# Update Profile

- Endpoint Path: `/api/fresns/v1/user/profile`
- Method: `PATCH`
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
| gender | Number | *optional* | Gender: 1.Null 2.Female / 3.Male / 4.Custom |
| genderCustom | String | *optional* | Gender Custom |
| genderPronoun | Number | *optional* | Preferred Pronoun: 1.She / 2.He / 3.They |
| birthdayDisplayType | Number | *optional* | Birthday: 1.Y-m-d / 2.Y / 3.m-d / 4.Hidden |
| bio | String | *optional* | Bio |
| location | String | *optional* | Location |
| moreInfo | Object | *optional* | more info |
| archives | Array | *optional* | Extended information |

**Request Description**

- Null to not modify.
- Leaving both `avatarFid` and `avatarUrl` empty means not changing them, choose one when passing parameters.
- Leaving both `bannerFid` and `bannerUrl` empty means not changing them, choose one when passing parameters.
- If using `fid` for avatar and background banner images, first use the [file upload interface](../common/file-upload.md), then pass the obtained `fid` as a parameter.
- Example of extended information:

```json
[
    {
        "code": "code",
        "value": "value", // Multiple selection values are stored in array format and passed as a string in the format ["value", "value"]
        "isPrivate": false, // Private or not (public display or not)
        "fskey": null // client fskey
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

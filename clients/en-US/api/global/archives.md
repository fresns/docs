# Extend Archives

- Endpoint Path: `/fresns-api/v1/global/{type}/archives`
- Method: `GET`
- Request: `Rest` + `Query`

## Headers Optional Parameter

| Key | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | **required** | **required** |
| X-Fresns-Uid-Token | **required** | **required** |

## Path Variables

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | **required** | `user`,`group`,`hashtag`,`post`,`comment` |

## Query Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| fskey | String | *optional* | Null to output all, output specified app extension information if a value is provided |
| gid | String | *optional* | If `type=group`, an optional group ID to get the configuration for the specified group. |
| contentType | String | *optional* | `post` or `comment` parameters<br>Used in conjunction with `gid` to get additional parameters for posts or comments made by the group. |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": [
        {
            "fskey": "String / App Fskey",
            "name": "String / Name",
            "description": "String / Description",
            "code": "String / Code",
            "formElement": "String / HTML Form Element",
            "elementType": "String / Form Element Type",
            "elementOptions": "Array / Option Type Configuration Values",
            "isMultiple": "Boolean / Whether multiple selections are allowed, valid for select, email, file, etc.",
            "isRequired": "Boolean / Whether it is required",
            "fileType": "Number / 1. Image 2. Video 3. Audio 4. Document", // Used when elementType is file
            "fileAccept": "String / Supported file extensions, e.g. .jpg, .png", // Used when elementType is file
            "fileExt": "String / Supported file extensions, e.g. jpg, png", // Used when elementType is file
            "inputPattern": "String / Custom Regular Expression",
            "inputMax": "Number / Maximum Value",
            "inputMin": "Number / Minimum Value",
            "inputMaxlength": "Number / Maximum Length",
            "inputMinlength": "Number / Minimum Length",
            "inputSize": "Number / Size",
            "inputStep": "Number / Step",
            "valueType": "String / Data Value Type"
        }
    ]
}
```

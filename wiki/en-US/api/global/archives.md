# Extend Archives

- Endpoint Path: `/api/v2/global/{type}/archives`
- Method: `GET`
- Request: `Rest` + `Query`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| X-Fresns-Aid | **required** | **required** |
| X-Fresns-Aid-Token | **required** | **required** |
| X-Fresns-Uid | **required** | **required** |
| X-Fresns-Uid-Token | **required** | **required** |

## Rest Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | **required** | `user`,`group`,`hashtag`,`post`,`comment` |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| unikey | String | *optional* | Leave empty to output all, output specified plugin extension information ([archives](../../database/extends/archives.md)) if a value is provided |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": [
        {
            "unikey": "String / Plugin Unikey",
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

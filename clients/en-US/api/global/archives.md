# Extend Archives

- Endpoint Path: `/api/fresns/v1/global/{type}/archives`
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
| type | String | **required** | `user`,`post`,`comment` |

## Query Params

| Key | Type | Required | Description |
| --- | --- | --- | --- |
| gid | String | *optional* | Use with `post` or `comment` |

**Request Description**

| formElement | elementType |
| --- | --- |
| input | checkbox<br>color<br>date<br>datetime<br>datetime-local<br>email<br>file<br>number<br>radio<br>range<br>text<br>time<br>tags |
| textarea |  |
| select | multiple |

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
            "isTreeOption": "Boolean / Whether the tree option",
            "isRequired": "Boolean / Whether it is required",
            "fileType": "Number / 1. Image 2. Video 3. Audio 4. Document", // Used when elementType is file
            "fileExtensions": "String / Supported file extensions, e.g. jpg, png", // Used when elementType is file
            "fileAccept": "String / Supported file extensions, e.g. .jpg, .png", // Used when elementType is file
            "inputPattern": "String / Custom Regular Expression",
            "inputMax": "Number / Maximum Value",
            "inputMin": "Number / Minimum Value",
            "inputMaxlength": "Number / Maximum Length",
            "inputMinlength": "Number / Minimum Length"
        }
    ]
}
```

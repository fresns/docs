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

| `formType` | HTML Code | Description |
| --- | --- | --- |
| input | `<input type="text">` | Single-line text |
| textarea | `<textarea></textarea>` | Multi-line text |
| select | `<select></select>` | Dropdown select |
| radio | `<input type="radio">` | Radio |
| checkbox | `<input type="checkbox">` | Checkbox |
| color | `<input type="color">` | Color picker |
| time | `<input type="time">` | Time picker |
| date | `<input type="date">` | Date picker |
| month | `<input type="month">` | Month picker |
| datetime | `<input type="datetime-local">` | Date and time picker |
| number | `<input type="number">` | Number input |
| email | `<input type="email">` | Email input |
| url | `<input type="url">` | URL input |
| file | `<input type="file">` | Single file upload |
| tags | `<input type="text">` | Tags input, format `["tag", "tag"]` |

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
            "formType": "String / Form Type",
            "formOptions": "Array / Option Type Configuration Values", // select, checkbox, radio
            "isTreeOption": "Boolean / Whether the tree option",
            "isMultiple": "Boolean / Whether it is Multiple", // select
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

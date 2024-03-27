---
aside: false
---

# extends

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID | | NO | Auto Increment |
| eid | varchar(32) | Public ID |  | NO | **Unique** |
| user_id | bigint *UNSIGNED* | Creator ID |  | NO | Related field [users->id](../users/users.md) |
| type | tinyint *UNSIGNED* | Type | 1 | NO | 1. Text / 2. Info / 3. Interactive |
| app_fskey | varchar(64) | Creator plugin |  | NO | Related field [apps->fskey](../apps/apps.md) |
| url_parameter | varchar(128) | Custom parameter |  | YES | Logic refers to [plugin description](../apps/apps.md#url-concatenation-description) |
| image_file_id | bigint *UNSIGNED* | Image ID |  | YES | Related field [files->id](../systems/files.md) |
| image_file_url | varchar(255) | Image URL |  | YES |  |
| content | json | Content |  | YES |  |
| action_items | json | Action Items |  | YES |  |
| view_position | tinyint *UNSIGNED* | Display position | 2 | NO | 1. Top / 2. Bottom |
| view_type | tinyint *UNSIGNED* | View Type | 1 | NO |  |
| is_enabled | tinyint *UNSIGNED* | Is Valid | 1 | NO | 0.Invalid / 1.Valid |
| ended_at | timestamp | Ended time |  | YES |  |
| created_at | timestamp | Upload time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES | Empty means not deleted |

## View Type

- Text
    - 1. Basic
- Info
    - 1. Square info frame
    - 2. Large square info frame
    - 3. Vertical image info frame
    - 4. Horizontal image info frame
- Interactive
    - 1. Poll

## Content

**Text**

```json
{
    "content": "String / Text Content",
    "isMarkdown": "Boolean / Whether it is in MD format"
}
```

**Info**

```json
{
    "title": "object / Title (Multilingual)",
    "titleColor": "String / Title color",
    "descPrimary": "object / Primary sub-information (Multilingual)",
    "descPrimaryColor": "String / Primary sub-information color",
    "descSecondary": "object / Secondary sub-information (Multilingual)",
    "descSecondaryColor": "String / Secondary sub-information color",
    "buttonName": "object / Button nam (Multilingual)e",
    "buttonColor": "String / Button name color"
}
```

**Interactive**

```json
{
    "title": "object / Title (Multilingual)",
    "titleColor": "String / Title color"
}
```

## Action Items

```json
[
    {
        "name": "object / Name (Multilingual)",
        "key": "String / Key",
        "value": "String / Value"
    }
]
```

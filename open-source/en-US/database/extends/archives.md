---
aside: false
---

# archives

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| app_fskey | varchar(64) | Related Plugin |  | NO | Related field [apps->fskey](../apps/apps.md)<br>Which plugin created it |
| name | json | Name |  | YES | **Multilingual** |
| description | json | Description |  | YES | **Multilingual** |
| code | varchar(32) | Code |  | NO | **Unique**，English letters only, no symbols or spaces supported |
| usage_type | tinyint *UNSIGNED* | Usage Type |  | NO | [Content Type](../numbered-description.md#content-type) |
| usage_group_id | int *UNSIGNED* | Used for group content | 0 | NO | Related field [groups->id](../contents/groups.md)<br>Use with `post` or `comment` |
| form_element | varchar(16) | Form Element |  | NO | HTML form element |
| element_type | varchar(16) | Form Element Type |  | YES | Corresponding type to form_element |
| element_options | json | Option Type Configuration Value |  | YES | **Multilingual**<br>Array format, Provides option values for select, checkbox, radio, etc. |
| file_type | tinyint *UNSIGNED* | File Type |  | YES | `form_element=input` + `element_type=file`<br>Only used when the above two configurations match, used to declare the uploaded file type<br>1.Image / 2.Video / 3.Audio / 4.Document |
| is_tree_option | tinyint *UNSIGNED* | Is tree option | 0 | NO | 0.No / 1.Yes |
| is_multiple | tinyint *UNSIGNED* | Is Multiple | 0 | NO | 0.No / 1.Yes `Valid for select element` |
| is_required | tinyint *UNSIGNED* | Is Required | 0 | NO | 0.No / 1.Yes |
| input_pattern | varchar(128) | Custom Regular Expression |  | YES |  |
| input_max | smallint *UNSIGNED* | Maximum Value |  | YES |  |
| input_min | smallint *UNSIGNED* | Minimum Value |  | YES |  |
| input_maxlength | smallint *UNSIGNED* | Maximum Length |  | YES |  |
| input_minlength | smallint *UNSIGNED* | Minimum Length |  | YES |  |
| sort_order | smallint *UNSIGNED* | Sorting Order | 9 | NO | Ascending order |
| is_enabled | tinyint *UNSIGNED* | Is Valid | 1 | NO | 0.Invalid / 1.Valid<br>Invalid after, all related are invalid |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

## Form Introduction

| form_element Form Element | element_type Element Type | element_options Option Type Configuration Value |
| --- | --- | --- |
| input | checkbox<br>color<br>file<br>... | See the json array below, available for `checkbox`, `radio`, etc. |
| textarea |  |  |
| select |  | See the json array below, available for `select`, `multiple`, etc. |
| ... |  |  |

## Introduction to the `element_options` field

```json
{
    "{langTag}": [
        {"name": "IT", "value": 1, "options": [
            {"name": "Internet", "value": 11, "options": []}
        ]},
        {"name": "Manufacturing", "value": 2, "options": []},
        {"name": "Medical", "value": 3, "options": []},
        {"name": "Finance", "value": 4, "options": []},
        {"name": "Business", "value": 5, "options": []},
        {"name": "Culture", "value": 6, "options": []},
        {"name": "Art", "value": 7, "options": []},
        {"name": "Law", "value": 8, "options": []},
        {"name": "Education", "value": 9, "options": []},
        {"name": "Administration", "value": 10, "options": []}
    ]
}
```

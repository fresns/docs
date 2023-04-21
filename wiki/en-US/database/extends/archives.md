# archives

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| plugin_unikey | varchar(64) | Related Plugin |  | NO | Related field [plugins->unikey](../plugins/plugins.md)<br>Which plugin created it |
| name | varchar(64) | Name |  | YES | **Multilingual**  |
| description | text | Description |  | YES | **Multilingual** |
| code | varchar(32) | Code |  | NO | **Unique**，English letters only, no symbols or spaces supported |
| usage_type | tinyint *UNSIGNED* | Usage Type |  | NO | 1.User / 2.Group / 3.Hashtag / 4.Post / 5.Comment |
| usage_group_id | int *UNSIGNED* | Used for group content | 0 | NO | Related field [groups->id](../contents/groups.md)<br>Related plugin's group, `0` means no |
| usage_group_content_type | tinyint *UNSIGNED* | Which group content type is used |  | YES | 1.Post / 2.Comment |
| form_element | varchar(16) | Form Element |  | NO | HTML form element |
| element_type | varchar(16) | Form Element Type |  | YES | Corresponding type to form_element |
| element_options | json | Option Type Configuration Value |  | YES | Array format, supports **multilingual** storage<br>Provides option values for select, checkbox, radio, etc. |
| file_type | tinyint *UNSIGNED* | File Type |  | YES | `form_element=input` + `element_type=file`<br>Only used when the above two configurations match, used to declare the uploaded file type<br>1.Image / 2.Video / 3.Audio / 4.Document |
| is_multiple | tinyint *UNSIGNED* | Is Multiple | 0 | NO | 0.No / 1.Yes<br>Effective for select, email, file, etc. |
| is_required | tinyint *UNSIGNED* | Is Required | 0 | NO | 0.No / 1.Yes |
| input_pattern | varchar(128) | Custom Regular Expression |  | YES |  |
| input_max | smallint *UNSIGNED* | Maximum Value |  | YES |  |
| input_min | smallint *UNSIGNED* | Minimum Value |  | YES |  |
| input_maxlength | smallint *UNSIGNED* | Maximum Length |  | YES |  |
| input_minlength | smallint *UNSIGNED* | Minimum Length |  | YES |  |
| input_size | smallint *UNSIGNED* | Size |  | YES |  |
| input_step | smallint *UNSIGNED* | Step |  | YES |  |
| rating | smallint *UNSIGNED* | Sorting Order | 9 | NO | Ascending order |
| value_type | varchar(16) | Data Value Type | string | NO | Same logic as the [configuration table](../systems/configs.md) `item_type` field, supports file/plugin/plugins, etc. |
| is_enable | tinyint *UNSIGNED* | Is Valid | 1 | NO | 0.Invalid / 1.Valid<br>Invalid after, all related are invalid |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |


## Form Introduction

| form_element Form Element | element_type Element Type | element_options Option Type Configuration Value |
| --- | --- | --- |
| input | checkbox<br>color<br>file<br>... | See the json array below, available for `checkbox`, `radio`, etc. |
| textarea |  |  |
| select |  | See the json array below, available for `select`, `multiple`, etc. |
| ... |  |  |

## `element_options` Option Type Configuration Value

```json
[
    {"name": "IT", "value": 1},
    {"name": "Manufacturing", "value": 2},
    {"name": "Medical", "value": 3},
    {"name": "Finance", "value": 4},
    {"name": "Business", "value": 5},
    {"name": "Culture", "value": 6},
    {"name": "Art", "value": 7},
    {"name": "Law", "value": 8},
    {"name": "Education", "value": 9},
    {"name": "Administration", "value": 10}
]
```

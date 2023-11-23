---
aside: false
---

# operations

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| type | tinyint *UNSIGNED* | Type | 1 | NO | 1. Custom / 2. Interactive button image / 3. Badge icon / 4. Prompt copy |
| code | varchar(32) | Code |  | NO | Lowercase English only |
| style | varchar(32) | Style |  | NO | primary / secondary / success / danger / warning / info |
| name | varchar(128) | Name |  | YES | **Multilingual**  |
| description | text | Description |  | YES | **Multilingual** |
| image_file_id | bigint *UNSIGNED* | Image file ID |  | YES | Related field [files->id](../systems/files.md) |
| image_file_url | varchar(255) | Image file URL |  | YES |  |
| image_active_file_id | bigint *UNSIGNED* | Active state image file ID |  | YES | Related field [files->id](../systems/files.md) |
| image_active_file_url | varchar(255) | Active state image file URL |  | YES |  |
| display_type | tinyint *UNSIGNED* | Display type | 1 | NO | 1. Basic / 2. Function (plugin) |
| plugin_fskey | varchar(64) | Related plugin |  | NO | Related field [plugins->fskey](../plugins/plugins.md)<br>Created by which plugin, also the plugin page for functional purposes |
| is_enabled | tinyint *UNSIGNED* | Is Valid | 1 | NO | 0.Invalid / 1.Valid |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

## Use Code

- `1` Custom `customizes`
    - {code}
- `2` Interactive Button Images `buttonIcons`
    - `like` Like Icon
    - `dislike` Dislike Icon
    - `follow` Follow Icon
    - `block` Block Icon
    - `comment` Comment Icon
    - `share` Share Icon
    - `more` More Icon
- `3` Personalized Decoration Images `diversifyImages`
    - `title` Title Image
        - User:For example, "Co-Branded", "Shop", "Badge" icons or functional icons
        - Group: For example, "developer"
        - Hashtag: For example, "trend"
        - Post: For example, "vote", "raffle", "product" icons indicating post content
        - Comment: For example, "good comment", "high-quality review", "hot review"
    - `decorate` Decorative Images
        - User: Avatar decoration
        - Group: Cover image decoration
        - Hashtag: Cover image decoration
        - Post: Corner decoration
        - Comment: Corner decoration
    - `verified` Verification Image
        - User: Identity verification
        - Group: Official verification
        - Hashtag: Verified topic
        - Post: Content verification
        - Comment: Content verification
    - `medal` Medal Image
        - User: For example, "badge"
        - Group:
        - Hashtag:
        - Post: For example, "professional"
        - Comment:
- `4` Prompt Copy `tips`
    - `alert` Prompt Text

In addition to the above built-in definitions, plugins can define their own, and users can associate multiple, with usage codes available for the client to distinguish between usage and display location.

## API output example

```json
{
    "operations": {
        "customizes": [
            {
                "code": "operations->code",
                "style": "operations->style",
                "name": "operations->name",
                "description": "operations->description",
                "imageUrl": "operations->image_file_id or image_file_url",
                "imageActiveUrl": "operations->image_active_file_id or image_active_file_url",
                "displayType": "operations->display_type",
                "pluginUrl": "operations->plugin_fskey",
            }
        ],
        "buttonIcons": [
            {
                "code": "operations->code",
                "style": "operations->style",
                "name": "operations->name",
                "description": "operations->description",
                "imageUrl": "operations->image_file_id or image_file_url",
                "imageActiveUrl": "operations->image_active_file_id or image_active_file_url",
                "displayType": "operations->display_type",
                "pluginUrl": "operations->plugin_fskey",
            }
        ],
        "diversifyImages": [
            {
                "code": "operations->code",
                "style": "operations->style",
                "name": "operations->name",
                "description": "operations->description",
                "imageUrl": "operations->image_file_id or image_file_url",
                "imageActiveUrl": "operations->image_active_file_id or image_active_file_url",
                "displayType": "operations->display_type",
                "pluginUrl": "operations->plugin_fskey",
            }
        ],
        "tips": [
            {
                "code": "operations->code",
                "style": "operations->style",
                "name": "operations->name",
                "description": "operations->description",
                "imageUrl": "operations->image_file_id or image_file_url",
                "imageActiveUrl": "operations->image_active_file_id or image_active_file_url",
                "displayType": "operations->display_type",
                "pluginUrl": "operations->plugin_fskey",
            }
        ],
    }
}
```

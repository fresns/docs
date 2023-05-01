# plugin_usages

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| usage_type | tinyint *UNSIGNED* | Type |  | NO | 1. Wallet recharge<br>2. Wallet withdrawal<br>3. Editor extension<br>4. Content type extension<br>5. Management extension<br>6. Group extension<br>7. User feature extension<br>8. User profile extension |
| plugin_fskey | varchar(64) | Associated Plugin Fskey |  | NO | Related field [plugins->fskey](../plugins/plugins.md) |
| name | varchar(128) | Name |  | NO | **Multilingual** |
| icon_file_id | bigint *UNSIGNED* | Icon file ID |  | YES | Related field [files->id](../systems/files.md) |
| icon_file_url | varchar(255) | Icon file URL |  | YES |  |
| scene | varchar(16) | For type 3,5: Usage scene |  | YES | 1. Post / 2. Comment / 3. User<br>Multiple separated by commas |
| editor_toolbar | tinyint *UNSIGNED* | For type 3: Display in toolbar | 0 | NO | 0. No / 1. Yes |
| editor_number | tinyint *UNSIGNED* | For type 3: Usage count |  | YES | Maximum value 10 |
| data_sources | json | For type 4: Data source parameters |  | YES |  |
| is_group_admin | tinyint *UNSIGNED* | For type 5,6: Group admin only | 0 | NO | 0. No / 1. Yes<br>When value is 1, roles field is invalid |
| group_id | int *UNSIGNED* | For type 6: Group ID |  | YES | Related field [groups->id](../contents/groups.md)<br>Associated plugin's group |
| roles | varchar(128) | Authorized roles |  | YES | Authorized role IDs, multiple separated by commas |
| parameter | varchar(128) | Custom parameter |  | YES |  |
| rating | smallint *UNSIGNED* | Sorting order | 9 | NO | Ascending order |
| can_delete | tinyint *UNSIGNED* | Can be deleted | 1 | NO | 0. Cannot delete / 1. Can delete |
| is_enable | tinyint *UNSIGNED* | Is enabled | 1 | NO | 0. Disabled / 1. Enabled |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

## Application Scene Parameter Description

**Editor Extension - Application Scene**

- 1. Post: Apply in the post editor
- 2. Comment: Apply in the comment editor

**Management Extension - Application Scene**

- 1. Post: Apply in the post function menu
- 2. Comment: Apply in the post function menu
- 2. User: Apply in the user homepage function menu

## `data_sources` Field Description

```json
{
    "postByAll": {
        "pluginFskey": "String / Empty means default, use main program API output data, if not empty, forward the API request to the plugin",
        "pluginRating": [
            {
                "id": "Number / API pluginRating parameter, passed to plugin, plugin will know what the number represents",
                "intro": [
                    {
                        "langTag": "String / Language Tag",
                        "title": "String / Sorting title",
                        "description": "String / Sorting description"
                    },
                    {
                        "langTag": "zh-Hans",
                        "title": "Recommended mode",
                        "description": "Prioritize viewing recommended posts"
                    }
                ]
            }
        ]
    },
    "postByFollow": {
        "pluginFskey": "",
        "pluginRating": [
            // ditto
        ]
    },
    "postByNearby": {
        "pluginFskey": "",
        "pluginRating": [
            // ditto
        ]
    },
    "commentByAll": {
        "pluginFskey": "",
        "pluginRating": [
            // ditto
        ]
    },
    "commentByFollow": {
        "pluginFskey": "",
        "pluginRating": [
            // ditto
        ]
    },
    "commentByNearby": {
        "pluginFskey": "",
        "pluginRating": [
            // ditto
        ]
    }
}
```

## URL Concatenation Explanation and Custom Parameter Explanation

- View plugins table [URL Concatenation Explanation](plugins.md#url-concatenation-description)

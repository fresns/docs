# post_logs

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| user_id | bigint *UNSIGNED* | Creator ID |  | NO | Related field [users->id](../users/users.md) |
| post_id | bigint *UNSIGNED* | Post ID |  | YES | Related field [posts->id](posts.md) |
| parent_post_id | bigint *UNSIGNED* | Parent post ID |  | YES | Related field [posts->id](posts.md)<br>Empty means no referenced post |
| create_type | tinyint *UNSIGNED* | Creation type | 1 | NO | 1.Quick create / 2.Editor create / 3.Restore from post |
| is_plugin_editor | tinyint *UNSIGNED* | Edit only in plugin | 0 | NO | 0.No / 1.Yes |
| editor_fskey | varchar(64) | Content editor plugin |  | YES | Related field [plugins->fskey](../plugins/plugins.md) |
| group_id | int *UNSIGNED* | Group ID |  | YES | Related field `groups->id` |
| title | varchar(255) | Title |  | YES |  |
| content | longtext | Content |  | YES | Full content |
| is_markdown | tinyint *UNSIGNED* | Is content in MD format | 0 | NO | 0.No / 1.Yes |
| is_anonymous | tinyint *UNSIGNED* | Is anonymous | 0 | NO | 0.No / 1.Yes |
| is_comment_disabled | tinyint *UNSIGNED* | Are comments disabled? | 0 | NO | 0.No / 1.Yes |
| is_comment_private | tinyint *UNSIGNED* | Are comments private?<br>Private only visible to the author of the post | 0 | NO | 0.No / 1.Yes |
| map_json | json | Location information |  | YES | Empty means not creating or clearing when modifying |
| read_json | json | Read permission settings |  | YES | Empty means not creating or clearing when modifying |
| user_list_json | json | Specific user settings |  | YES | Empty means not creating or clearing when modifying |
| comment_btn_json | json | Comment function button settings |  | YES | Empty means not creating or clearing when modifying |
| state | tinyint *UNSIGNED* | Status | 1 | NO | 1.Unpublished (draft)<br>2.Published (under review)<br>3.Published (approved and archived)<br>4.Published (not approved, draft status again) |
| reason | varchar(255) | Review rejection reason |  | YES | Used when review is rejected |
| submit_at | timestamp | Submit review time |  | YES |  |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO | As draft Create Time |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

## `post_id` Field Description

- Empty means a new draft, which may have more than one record, equivalent to the same creator having more than one draft to publish.
- If there is an ID
    - state=1, 2, 4 means that the existing content of the ID's post is being edited, and that no new drafts can be created for that ID, i.e. there can only be one draft being edited for the same post.
    - state=3 is the official version of the ID's post history, and there may be more than one.

## Field: `map_json` Location information

::: code-group
```json [Field Description]
// Parameters of fields not specified will not be stored separately, but along with the complete JSON in post_appends->map_json.
{
    "mapId": "post_appends->map_id",
    "latitude": "posts->map_latitude",
    "longitude": "posts->map_longitude",
    "scale": "post_appends->map_scale",
    "continent": "",
    "continentCode": "post_appends->map_continent_code",
    "country": "",
    "countryCode": "post_appends->map_country_code",
    "region": "",
    "regionCode": "post_appends->map_region_code",
    "city": "",
    "cityCode": "post_appends->map_city_code",
    "district": "",
    "address": "",
    "zip": "post_appends->map_zip",
    "poi": "",
    "poiId": "post_appends->map_poi_id",
}
```

```json [Example Parameters]
{
    "mapId": 2,
    "latitude": 37.3185039,
    "longitude": -122.0288017,
    "scale": 14,
    "continent": "North America",
    "continentCode": "NA",
    "country": "United States",
    "countryCode": "US",
    "region": "California",
    "regionCode": "CA",
    "city": "Santa Clara",
    "cityCode": "SC",
    "district": "Cupertino",
    "address": "10800 Torre Ave, Cupertino, CA 95014",
    "zip": "95014",
    "poi": "Cupertino Library",
    "poiId": "TRDucfBPkhuzzR9a7",
}
```
:::

## Field: `read_json` Read permission configuration

```json
{
    "isReadRestricted": "post_appends->is_read_restricted",
    "btnName": [
        {
            "langTag": "en Language Tag",
            "name": "post_appends->read_btn_name / Button name"
        }
    ],
    "previewPercentage": "post_appends->read_pre_percentage",
    "permissions": {
        "users": [
            1, 2,
            "userId", "userId"
            // Publish to post_auths->object_id
            // post_auths->type = 1
        ],
        "roles": [
            1, 2,
            "roleId", "roleId"
            // Publish to post_auths->object_id
            // post_auths->type = 2
        ]
    },
    "pluginFskey": "post_appends->read_plugin_fskey"
}
```

## Field: `user_list_json` List of affiliated users

```json
{
    "isUserList": "post_appends->is_user_list",
    "userListName": [
        {
            "langTag": "en Language Tag",
            "name": "post_appends->user_list_name / affiliated name"
        }
    ],
    "pluginFskey": "post_appends->user_list_plugin_fskey"
}
```

## Field: `comment_btn_json` Comment Settings

```json
{
    "isCommentBtn": "post_appends->is_comment_btn",
    "btnName": [
        {
            "langTag": "en Language Tag",
            "name": "post_appends->comment_btn_name / Button name"
        }
    ],
    "pluginFskey": "post_appends->comment_btn_plugin_fskey"
}
```
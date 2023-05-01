# comment_logs

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID | | NO | Auto Increment |
| user_id | bigint *UNSIGNED* | Creator ID |  | NO | Related field [users->id](../users/users.md) |
| comment_id | bigint *UNSIGNED* | Comment ID |  | YES | Related field [comments->id](comments.md) |
| post_id | bigint *UNSIGNED* | Post ID |  | NO | Related field [posts->id](posts.md) |
| parent_comment_id | bigint *UNSIGNED* | Parent Comment ID |  | YES | Related field [comments->id](comments.md)<br>Empty means a top-level comment |
| create_type | tinyint *UNSIGNED* | Creation type | 1 | NO | 1.Quick creation / 2.Editor creation / 3.Recovered from post |
| is_plugin_editor | tinyint *UNSIGNED* | Is it edited only in the plugin? | 0 | NO | 0.No / 1.Yes |
| editor_fskey | varchar(64) | Content Editing Plugin |  | YES | Related field [plugins->fskey](../plugins/plugins.md) |
| content | longtext | Content |  | YES | Full content |
| is_markdown | tinyint *UNSIGNED* | Is the content in MD format? | 0 | NO | 0.No / 1.Yes |
| is_anonymous | tinyint *UNSIGNED* | Is it anonymous? | 0 | NO | 0.No / 1.Yes |
| map_json | json | Location information |  | YES | Empty value means not to create or clear when modifying |
| state | tinyint *UNSIGNED* | Status | 1 | NO | 1.Unpublished (Draft)<br>2.Published (Under review)<br>3.Published (Approved and archived)<br>4.Published (Rejected, back to draft status) |
| reason | varchar(255) | Review rejection reason |  | YES | Used when rejected in review |
| submit_at | timestamp | Submit review time |  | YES |  |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

## `comment_id` Field Description

- If empty, it represents a new comment draft, and there can be multiple records, equivalent to a single creator having multiple drafts waiting to be published.
- When there is an ID:
    - state=1, 2, or 4 means editing the existing content of the comment with that ID. No new drafts can be created for that ID, which is equivalent to having only one draft being edited for the same comment.
    - state=3 represents the historical official versions of the comment with that ID, which can have multiple instances.

## `post_id` Field Description

- Cannot be empty, as it records to which post the comment belongs.
- Only top-level comments can have drafts; child comments cannot generate drafts, so the `comment_id` is not the parent comment ID.
- state=1, 2, or 4 represents unpublished comments, and at this time, no new comment drafts for that post can be created. This is equivalent to having only one comment draft for the same post.
- state=3, at this time, the `comment_id` is completed, indicating the historical versions of the comment with that `comment_id`.

## Field: `map_json` Location information

::: code-group
```json [Field Description]
// Parameters of fields not specified will not be stored separately, but along with the complete JSON in comment_appends->map_json.
{
    "mapId": "comment_appends->map_id",
    "latitude": "comments->map_latitude",
    "longitude": "comments->map_longitude",
    "scale": "comment_appends->map_scale",
    "continent": "",
    "continentCode": "comment_appends->map_continent_code",
    "country": "",
    "countryCode": "comment_appends->map_country_code",
    "region": "",
    "regionCode": "comment_appends->map_region_code",
    "city": "",
    "cityCode": "comment_appends->map_city_code",
    "district": "",
    "address": "",
    "zip": "comment_appends->map_zip",
    "poi": "",
    "poiId": "comment_appends->map_poi_id",
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

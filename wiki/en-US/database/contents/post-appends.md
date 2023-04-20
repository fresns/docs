# post_appends

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID | | NO | Auto Increment |
| post_id | bigint *UNSIGNED* | Post ID |  | NO | Related field [posts->id](posts.md) |
| is_plugin_editor | tinyint *UNSIGNED* | Edit only in plugin | 0 | NO | 0.No / 1.Yes |
| editor_unikey | varchar(64) | Content editor plugin |  | YES | Related field [plugins->unikey](../plugins/plugins.md) |
| can_delete | tinyint *UNSIGNED* | Can author delete? | 1 | NO | 0.No / 1.Yes |
| is_allow | tinyint *UNSIGNED* | Allow all users to read? | 1 | NO | 0.No / 1.Yes |
| allow_proportion | tinyint *UNSIGNED* | Read permission - content display ratio when unauthorized |  | YES | Percentage<br>30 means displaying 30% of the content |
| allow_btn_name | varchar(64) | Read permission - button text when unauthorized |  | YES | **Multilingual** |
| allow_plugin_unikey | varchar(64) | Read permission - handling plugin |  | YES | Related field [plugins->unikey](../plugins/plugins.md) |
| is_user_list | tinyint *UNSIGNED* | Is there a special user list? | 0 | NO | 0.No / 1.Yes |
| user_list_name | varchar(128) | Specific user name |  | YES | **Multilingual**<br>For example: Rewarding users, Purchasing users, Downloaded users |
| user_list_plugin_unikey | varchar(64) | Specific user source plugin |  | YES | Related field [plugins->unikey](../plugins/plugins.md) |
| is_comment | tinyint *UNSIGNED* | Are comments allowed? | 1 | NO |  0.No / 1.Yes |
| is_comment_public | tinyint *UNSIGNED* | Are comments public?<br>Non-public will only be visible to post author | 1 | NO | 0.No / 1.Yes |
| is_comment_btn | tinyint *UNSIGNED* | Does the comment have an extended button?<br>This button is only visible to the post author | 0 | NO | 0.No / 1.Yes |
| comment_btn_name | varchar(64) | Comment extended button - button text |  | YES | **Multilingual** |
| comment_btn_style | varchar(64) | Comment extended button - style |  | YES | primary / secondary / success / danger / warning / info |
| comment_btn_plugin_unikey | varchar(64) | Comment extended button - handling plugin |  | YES | Related field [plugins->unikey](../plugins/plugins.md) |
| more_json | json | Additional information field |  | YES | For example: Publisher IP location name, device name, etc. |
| map_json | json | Map - Detailed information |  | YES |  |
| map_id | tinyint *UNSIGNED* | Map - Service provider ID |  | YES | Source map service provider key-value dictionary |
| map_continent_code | varchar(8) | Map - Continent code |  | YES |  |
| map_country_code | varchar(8) | Map - Country code |  | YES |  |
| map_region_code | varchar(8) | Map - Region code |  | YES |  |
| map_city_code | varchar(8) | Map - City code |  | YES |  |
| map_zip | varchar(32) | Map - zip |  | YES |  |
| map_poi_id | varchar(64) | Map - POI ID |  | YES | Map service provider exclusive ID |
| edit_count | smallint *UNSIGNED* | Number of edits | 0 | NO | Total number of edits |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

## `map_json` Complete Information

```json
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

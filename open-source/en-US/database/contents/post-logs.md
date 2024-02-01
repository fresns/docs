---
aside: false
---

# post_logs

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| hpid | varchar(32) | Public ID |  | NO | **Unique** |
| create_type | tinyint *UNSIGNED* | Creation type | 1 | NO | 1.Quick create / 2.Editor create / 3.Restore from post |
| user_id | bigint *UNSIGNED* | Author ID |  | NO | Related field [users->id](../users/users.md) |
| post_id | bigint *UNSIGNED* | Post ID |  | YES | Related field [posts->id](posts.md) |
| quoted_post_id | bigint *UNSIGNED* | Quoted post ID |  | YES | Related field [posts->id](posts.md) |
| group_id | int *UNSIGNED* | Group ID |  | YES | Related field [groups->id](groups.md) |
| geotag_id | int *UNSIGNED* | Geotag ID |  | YES | Related field [geotags->id](geotags.md) |
| title | varchar(255) | Title |  | YES |  |
| content | longtext | Content |  | YES | Full content |
| lang_tag | varchar(16) | Language Tag |  | YES |  |
| is_markdown | tinyint *UNSIGNED* | Content in MD format | 0 | NO | 0.No / 1.Yes |
| is_anonymous | tinyint *UNSIGNED* | Anonymous | 0 | NO | 0.No / 1.Yes |
| location_info | json | Location information |  | YES | Empty means not creating or clearing when modifying |
| more_info | json | More Info |  | YES | E.g. publisher IP location name, device name, etc. |
| permissions | json | Permissions |  | YES |  |
| is_enabled | tinyint *UNSIGNED* | Is Valid | 1 | NO | 0.Invalid (visible only to yourself) / 1.Valid |
| state | tinyint *UNSIGNED* | Status | 1 | NO | 1.Unpublished (draft)<br>2.Published (under review)<br>3.Published (approved and archived)<br>4.Published (not approved, draft status again) |
| reason | varchar(255) | Review rejection reason |  | YES | Used when review is rejected |
| submit_at | timestamp | Submit review time |  | YES |  |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

## `post_id` Field Description

- Empty means a new draft, which may have more than one record, equivalent to the same author having more than one draft to publish.
- If there is an ID
    - state=1, 2, 4 means that the existing content of the ID's post is being edited, and that no new drafts can be created for that ID, i.e. there can only be one draft being edited for the same post.
    - state=3 is the official version of the ID's post history, and there may be more than one.

## `location_info` Complete Information

```json
{
    "name": "Cupertino Library",
    "description": "",
    "placeId": "TRDucfBPkhuzzR9a7",
    "placeType": "building",
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
    "zip": "95014"
}
```

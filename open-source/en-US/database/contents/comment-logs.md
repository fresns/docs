---
aside: false
---

# comment_logs

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID | | NO | Auto Increment |
| hcid | varchar(32) | Public ID |  | NO | **Unique** |
| create_type | tinyint *UNSIGNED* | Creation type | 1 | NO | 1.Quick creation / 2.Editor creation / 3.Recovered from post |
| user_id | bigint *UNSIGNED* | Author ID |  | NO | Related field [users->id](../users/users.md) |
| post_id | bigint *UNSIGNED* | Post ID |  | NO | Related field [posts->id](posts.md) |
| comment_id | bigint *UNSIGNED* | Comment ID |  | YES | Related field [comments->id](comments.md) |
| parent_comment_id | bigint *UNSIGNED* | Parent Comment ID |  | YES | Related field [comments->id](comments.md)<br>Empty means a top-level comment |
| geotag_id | int *UNSIGNED* | Geotag ID |  | YES | Related field [geotags->id](geotags.md) |
| content | longtext | Content |  | YES | Full content |
| lang_tag | varchar(16) | Language Tag |  | YES |  |
| is_markdown | tinyint *UNSIGNED* | Content in MD format | 0 | NO | 0.No / 1.Yes |
| is_anonymous | tinyint *UNSIGNED* | Anonymous | 0 | NO | 0.No / 1.Yes |
| is_private | tinyint *UNSIGNED* | Private | 0 | NO | 0.No / 1.Yes |
| location_info | json | Location information |  | YES | Empty means not creating or clearing when modifying |
| more_info | json | More Info |  | YES | E.g. publisher IP location name, device name, etc. |
| permissions | json | Permissions |  | YES |  |
| is_enabled | tinyint *UNSIGNED* | Is Valid | 1 | NO | 0.Invalid (visible only to yourself) / 1.Valid |
| state | tinyint *UNSIGNED* | Status | 1 | NO | 1.Unpublished (Draft)<br>2.Published (Under review)<br>3.Published (Approved and archived)<br>4.Published (Rejected, back to draft status) |
| reason | varchar(255) | Review rejection reason |  | YES | Used when rejected in review |
| submit_at | timestamp | Submit review time |  | YES |  |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

## `comment_id` Field Description

- If empty, it represents a new comment draft, and there can be multiple records, equivalent to a single author having multiple drafts waiting to be published.
- When there is an ID:
    - state=1, 2, or 4 means editing the existing content of the comment with that ID. No new drafts can be created for that ID, which is equivalent to having only one draft being edited for the same comment.
    - state=3 represents the historical official versions of the comment with that ID, which can have multiple instances.

## `post_id` Field Description

- Cannot be empty, as it records to which post the comment belongs.
- Only top-level comments can have drafts; child comments cannot generate drafts, so the `comment_id` is not the parent comment ID.
- state=1, 2, or 4 represents unpublished comments, and at this time, no new comment drafts for that post can be created. This is equivalent to having only one comment draft for the same post.
- state=3, at this time, the `comment_id` is completed, indicating the historical versions of the comment with that `comment_id`.

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

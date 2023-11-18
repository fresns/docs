---
aside: false
---

# placements

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID | | NO | Auto Increment |
| plugin_fskey | varchar(64) | Creator |  | NO | Which plugin created this record<br>Related field [plugins->fskey](../plugins/plugins.md) |
| placement_type | tinyint *UNSIGNED* | Type of target |  | NO | 1.User / 2.Group / 3.Hashtag / 4.Post / 5.Comment<br>Which type of content to read as list page parameter |
| placement_id | bigint *UNSIGNED* | Key ID |  | NO | 1.Related field `users->id`<br>2.Related field `groups->id`<br>3.Related field `hashtags->id`<br>4.Related field `posts->id`<br>5.Related field `comments->id` |
| placement_template | json | Content Template |  | NO | Custom number, from the client being used |
| placement_name | varchar(64) | Name |  | NO | **Multilingual**<br>For example: Sponsor, Advertisement, You Might Be Interested In, etc. |
| open_type | tinyint *UNSIGNED* | Open Type |  | NO | 1.User Profile / 2.Group Detail / 3.Hashtag Detail<br>4.Post Detail / 5.Comment Detail / 6.Extension iframe<br>7.Plugin Page / 8.URL |
| open_value | varchar(128) | Target Value |  | NO | User, Group, Hashtag, Post, Comment are the corresponding primary IDs<br>Inline extension frame is `extends->id`<br>Plugin page is `fskey`, specified URL is URL |
| position | tinyint *UNSIGNED* | Placement Position | 5 | NO |  |
| starting_at | timestamp | Start Time |  | YES | Empty means start immediately |
| expired_at | timestamp | Expiration Time |  | YES | Empty means valid forever |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |


## Position Explanation

- position=3 means to insert at the 3rd position in the list page. If there are multiple valid records at the same position, all of them will be output as long as they are within the validity period, and the client will decide which one to display.
- If there are 30 posts per page and the placement position is 35, it means to insert at the 5th position on the 2nd page.

## Content Template

```json
[
    {
        "appId": "Main program secret key ID, the output template code is determined based on the App ID of the interface request",
        "tplCode": "Template code, can be a numeric number or English letters, string type."
        // The client decides which template to use for displaying the content based on this code.
    },
    {
        "appId": "twvhl69n2uqygnox",
        "tplCode": "1"
    }
]
```

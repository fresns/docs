# Content

> Panel > Operations > Content

## Name Config

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Custom Group Name | group_name |  | object | `Group` **Multilingual** |
| Custom Hashtag Name | hashtag_name |  | object | `Hashtag` **Multilingual** |
| Custom Geotag Name | geotag_name |  | object | `Geotag` **Multilingual** |
| Custom Post Content Name | post_name |  | object | `Post` **Multilingual** |
| Custom Comment Content Name | comment_name |  | object | `Comment` **Multilingual** |
| Publish Post Action Name | publish_post_name |  | object | `Publish` **Multilingual** |
| Publish Comment Action Name | publish_comment_name |  | object | `Reply` **Multilingual** |

## Interaction Config

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Mention Status | mention_status | true | boolean |  |
| Number of Mention | mention_number | 0 | number | The number of user mentions per piece of content, `0` means no limitation. |
| Hashtag Status | hashtag_status | true | boolean |  |
| Hashtag Format | hashtag_format | 2 | number | The difference between `#Hashtag` and `#Hashtag#` |
| Hashtag Length | hashtag_length | 20 | number |  |
| Number of Hashtag | hashtag_number | 0 | number | The number of hashtags supported per piece of content, `0` means unlimited. |
| Hashtag Regular Expression | hashtag_regexp | `{"space":"","hash":""}` | object |  |

- Hashtag Regular Expression - Default
    - space `/#[\p{L}\p{N}\p{M}]+[^\n\p{P}\s]/u`
    - hash `/#[\p{L}\p{N}\p{M}]+[^\n\p{P}]#/u`

## Nearby search default range

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Kilometer | nearby_length_km | 50 | number |  |
| Mile | nearby_length_mi | 30 | number |  |

## List Config

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| View Posts by Timelines | view_posts_by_timelines | true | boolean |  |
| View Comments by Timelines | view_comments_by_timelines | false | boolean |  |
| View Posts by Nearby | view_posts_by_nearby | true | boolean |  |
| View Comments by Nearby | view_comments_by_nearby | false | boolean |  |
| Post Brief Word Limit | post_brief_length | 280 | number |  |
| Comment Brief Word Limit | comment_brief_length | 280 | number |  |
| Comment visibility rule | comment_visibility_rule | 0 | number | Unit: days<br>0 means no restrictions, 7 means 7 days of visibility.<br><br>Based on the post's publishing time, if it exceeds the visibility rule in days, the post's comments will no longer be shown and cannot be commented on. |

## Preview Config

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Post like users preview | preview_post_like_users | 0 | number | 0 is not enabled, maximum number 10 |
| Post comments preview | preview_post_comments | 0 | number | 0 is not enabled, maximum number 5 |
| Post preview type | preview_post_comments_type | like | string | `like` like count<br>`comment` comment count<br>`oldest` publish time<br>`latest` publish time |
| Post comment preview conditions | preview_post_comments_threshold | 10 | number | `like` and `comment` are only used to indicate the number of previews that will be output. |
| Comment like users preview | preview_comment_like_users | 0 | number | 0 is not enabled, maximum number 10 |
| Comment replies preview | preview_comment_replies | 3 | number | 0 is not enabled, maximum number 5 |
| Comment reply preview conditions | preview_comment_replies_type | oldest | string | `like` like count<br>`oldest` publish time<br>`latest` publish time |

## Manage Config

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Post Edit Permission | post_edit | false | boolean |  |
| How Long Can Edit | post_edit_time_limit | 5 | number |  |
| Sticky Post Edit Permission | post_edit_sticky_limit | false | boolean |  |
| Digest Post Edit Permission | post_edit_digest_limit | false | boolean |  |
| Post Delete Permission | post_delete | true | boolean |  |
| Sticky Post Delete Permission | post_delete_sticky_limit | true | boolean |  |
| Digest Post Delete Permission | post_delete_digest_limit | true | boolean |  |
| Comment Edit Permissions | comment_edit | false | boolean |  |
| How Long Can Edit | comment_edit_time_limit | 5 | number |  |
| Sticky Comment Edit Permission | comment_edit_sticky_limit | false | boolean |  |
| Digest Comment Edit Permission | comment_edit_digest_limit | false | boolean |  |
| Comment Delete Permission | comment_delete | true | boolean |  |
| Sticky Comment Delete Permission | comment_delete_sticky_limit | true | boolean |  |
| Digest Comment Delete Permission | comment_delete_digest_limit | true | boolean |  |

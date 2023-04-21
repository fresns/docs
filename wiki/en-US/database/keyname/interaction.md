# Interaction

> Panel > Operations > Interaction

## Content Function

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Mention Feature | mention_status | true | boolean |  |
| Hashtag Feature | hashtag_status | true | boolean |  |
| Hashtag Format | hashtag_format | 2 | number | Difference between `#topic` and `#topic#` |
| Hashtag Length | hashtag_length | 20 | number |  |
| Hashtag Regular Expression | hashtag_regexp |  | object |  |
| Post Like Users Preview | preview_post_like_users | 0 | number | 0 means not enabled, maximum number is 10 |
| Post Comments Preview Quantity | preview_post_comments | 0 | number | 0 means not enabled, maximum number is 5 |
| Post Comment Preview Type | preview_post_comment_sort | like | string | `like` for like count, `comment` for child comment count, `oldest` for ascending publish time, `latest` for descending publish time |
| Post Comment Preview Condition | preview_post_comment_require | 10 | number | Specific to `like` and `comment`, indicates the number required for preview to be shown |
| Sub-comment Preview Quantity | preview_sub_comments | 3 | number | 0 means not enabled, maximum number is 5 |
| Sub-comment Preview Type | preview_sub_comment_sort | oldest | string | `like` for like count, `oldest` for ascending publish time, `latest` for descending publish time |
| Comment Visibility Rule | comment_visibility_rule | 0 | number | Unit: days<br>0 means no restrictions, 7 means 7 days of visibility<br>Based on the post's publishing time, if it exceeds the visibility rule in days, the post's comments will no longer be shown and cannot be commented on. |
| Nearby Posts Default Range (km) | nearby_length_km | 50 | number |  |
| Nearby Posts Default Range (mi) | nearby_length_mi | 30 | number |  |

- Hashtag Regular Expression(Default Value): `{"hash":"/#[\\p{L}\\p{N}\\p{M}]+[^\n\\p{P}]#/u","space":"/#[\\p{L}\\p{N}\\p{M}]+[^\n\\p{P}\\s]/u"}`

## Conversation Function

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Conversation Feature | conversation_status | false | boolean |  |
| Conversation Attachments | conversation_files | ["image"] | array | image,video,audio,document<br>Array |

## Follow Function

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| View Posts by Followed Object | view_posts_by_follow_object | true | boolean |  |
| View Comments by Followed Object | view_comments_by_follow_object | false | boolean |  |

## Interaction Function

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Like User | like_user_setting | false | boolean | Like |
| Like Group | like_group_setting | false | boolean | Like |
| Like Hashtag | like_hashtag_setting | false | boolean | Like |
| Like Post | like_post_setting | true | boolean | Like |
| Like Comment | like_comment_setting | true | boolean | Like |
| Dislike User | dislike_user_setting | false | boolean |  |
| Dislike Group | dislike_group_setting | false | boolean |  |
| Dislike Hashtag | dislike_hashtag_setting | false | boolean |  |
| Dislike Post | dislike_post_setting | true | boolean |  |
| Dislike Comment | dislike_comment_setting | true | boolean |  |
| Follow User | follow_user_setting | true | boolean | Follow |
| Follow Group | follow_group_setting | true | boolean | Join |
| Follow Hashtag | follow_hashtag_setting | false | boolean | Subscribe |
| Follow Post | follow_post_setting | true | boolean | Favorite |
| Follow Comment | follow_comment_setting | true | boolean | Favorite |
| Block User | block_user_setting | false | boolean | Block |
| Block Group | block_group_setting | false | boolean | Block |
| Block Hashtag | block_hashtag_setting | false | boolean | Not Interested |
| Block Post | block_post_setting | false | boolean | Dislike |
| Block Comment | block_comment_setting | false | boolean | Dislike |

## View user content settings

**Which of the user's content can be viewed by others**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Their Posts | it_posts | true | boolean | Posts |
| Their Comments | it_comments | false | boolean | Comments |
| Users They Like | it_like_users | false | boolean | Like |
| Groups They Like | it_like_groups | false | boolean | Like |
| Hashtags They Like | it_like_hashtags | false | boolean | Like |
| Posts They Like | it_like_posts | true | boolean | Like |
| Comments They Like | it_like_comments | false | boolean | Like |
| Users They Dislike | it_dislike_users | false | boolean |  |
| Groups They Dislike | it_dislike_groups | false | boolean |  |
| Hashtags They Dislike | it_dislike_hashtags | false | boolean |  |
| Posts They Dislike | it_dislike_posts | false | boolean |  |
| Comments They Dislike | it_dislike_comments | false | boolean |  |
| Users They Follow | it_follow_users | true | boolean | Following |
| Groups They Follow | it_follow_groups | true | boolean | Joined |
| Hashtags They Follow | it_follow_hashtags | false | boolean | Subscribed |
| Posts They Follow | it_follow_posts | false | boolean | Favorited |
| Comments They Follow | it_follow_comments | false | boolean | Favorited |
| Users They Block | it_block_users | false | boolean | Blocked |
| Groups They Block | it_block_groups | false | boolean | Blocked |
| Hashtags They Block | it_block_hashtags | false | boolean | Not Interested |
| Posts They Block | it_block_posts | false | boolean | Dislike |
| Comments They Block | it_block_comments | false | boolean | Dislike |

**Default content list when accessing a user's home page**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| They home page default content list | it_home_list | it_posts | string |  |

- `it_home_list` Option
    - it_posts
    - it_comments
    - **user_likers** Users Who Liked Them
    - **user_dislikers**  Users Who Disliked Them
    - **user_followers** Users Who Followed Them
    - **user_blockers** Users Who Blocked Them
    - it_like_users
    - it_like_groups
    - it_like_hashtags
    - it_like_posts
    - it_like_comments
    - it_dislike_users
    - it_dislike_groups
    - it_dislike_hashtags
    - it_dislike_posts
    - it_dislike_comments
    - it_follow_users
    - it_follow_groups
    - it_follow_hashtags
    - it_follow_posts
    - it_follow_comments
    - it_block_users
    - it_block_groups
    - it_block_hashtags
    - it_block_posts
    - it_block_comments

## View interaction log settings

**Which interaction logs can be viewed**

**User**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Users Who Liked Them | user_likers | false | boolean |  |
| Users Who Disliked Them | user_dislikers | false | boolean |  |
| Users Who Followed Them | user_followers | true | boolean |  |
| Users Who Blocked Them | user_blockers | false | boolean |  |
| Total Users Who Liked Them | user_liker_count | true | boolean |  |
| Total Users Who Disliked Them | user_disliker_count | false | boolean |  |
| Total Users Who Followed Them | user_follower_count | true | boolean |  |
| Total Users Who Blocked Them | user_blocker_count | false | boolean |  |

**Group**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Users Who Liked the Group | group_likers | true | boolean |  |
| Users Who Disliked the Group | group_dislikers | false | boolean |  |
| Users Who Followed the Group | group_followers | true | boolean |  |
| Users Who Blocked the Group | group_blockers | false | boolean |  |
| Total Users Who Liked the Group | group_liker_count | true | boolean |  |
| Total Users Who Disliked the Group | group_disliker_count | false | boolean |  |
| Total Users Who Followed the Group | group_follower_count | true | boolean |  |
| Total Users Who Blocked the Group | group_blocker_count | false | boolean |  |

**Hashtag**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Users Who Liked the Hashtag | hashtag_likers | true | boolean |  |
| Users Who Disliked the Hashtag | hashtag_dislikers | false | boolean |  |
| Users Who Followed the Hashtag | hashtag_followers | true | boolean |  |
| Users Who Blocked the Hashtag | hashtag_blockers | false | boolean |  |
| Total Users Who Liked the Hashtag | hashtag_liker_count | true | boolean |  |
| Total Users Who Disliked the Hashtag | hashtag_disliker_count | false | boolean |  |
| Total Users Who Followed the Hashtag | hashtag_follower_count | true | boolean |  |
| Total Users Who Blocked the Hashtag | hashtag_blocker_count | false | boolean |  |

**Post**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Users Who Liked the Post | post_likers | true | boolean |  |
| Users Who Disliked the Post | post_dislikers | false | boolean |  |
| Users Who Followed the Post | post_followers | true | boolean |  |
| Users Who Blocked the Post | post_blockers | false | boolean |  |
| Total Users Who Liked the Post | post_liker_count | true | boolean |  |
| Total Users Who Disliked the Post | post_disliker_count | false | boolean |  |
| Total Users Who Followed the Post | post_follower_count | true | boolean |  |
| Total Users Who Blocked the Post | post_blocker_count | false | boolean |  |

**Comment**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Users Who Liked the Comment | comment_likers | true | boolean |  |
| Users Who Disliked the Comment | comment_dislikers | false | boolean |  |
| Users Who Followed the Comment | comment_followers | true | boolean |  |
| Users Who Blocked the Comment | comment_blockers | false | boolean |  |
| Total Users Who Liked the Comment | comment_liker_count | true | boolean |  |
| Total Users Who Disliked the Comment | comment_disliker_count | false | boolean |  |
| Total Users Who Followed the Comment | comment_follower_count | true | boolean |  |
| Total Users Who Blocked the Comment | comment_blocker_count | false | boolean |  |

**Which interactions the user can see about themselves**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Users who like me | my_likers | false | boolean | This setting will be invalid when `user_likers` is enabled |
| Users who dislike me | my_dislikers | false | boolean | This setting will be invalid when `user_dislikers` is enabled |
| Users who follow me | my_followers | true | boolean | This setting will be invalid when `user_followers` is enabled |
| Users who block me | my_blockers | false | boolean | This setting will be invalid when `user_blockers` is enabled |
| Total number of users who like me | my_liker_count | true | boolean | This setting will be invalid when `user_liker_count` is enabled |
| Total number of users who dislike me | my_disliker_count | false | boolean | This setting will be invalid when `user_disliker_count` is enabled |
| Total number of users who follow me | my_follower_count | true | boolean | This setting will be invalid when `user_follower_count` is enabled |
| Total number of users who block me | my_blocker_count | false | boolean | This setting will be invalid when `user_blocker_count` is enabled |

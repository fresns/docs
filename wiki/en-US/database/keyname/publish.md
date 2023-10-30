# Publish

> Panel > Operations > Publish

## Post

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Post Requirement - Email | post_email_verify | false | boolean |  |
| Post Requirement - Phone | post_phone_verify | false | boolean |  |
| Post Requirement - Real Name | post_real_name_verify | false | boolean |  |
| <hr> |  |  |  |  |
| Special Post Rule | post_limit_status | false | boolean |  |
| Rule Type | post_limit_type | 1 | number | 1. Time period limit<br>2. Recurring time period limit |
| Time Period Limit - Start Time | post_limit_period_start |  | string |  |
| Time Period Limit - End Time | post_limit_period_end |  | string |  |
| Recurring Time Period Limit - Start Time | post_limit_cycle_start | 23:30 | string |  |
| Recurring Time Period Limit - End Time | post_limit_cycle_end | 08:30 | string |  |
| Limitation Rule | post_limit_rule | 1 | number | 1. Can post, but requires review<br>2. Prohibit publish |
| Limitation Tip | post_limit_tip |  | string | **Multilingual** |
| Special Rule Whitelist | post_limit_whitelist | ["1"] | array | User role ID |
| <hr> |  |  |  |  |
| Post Edit Permission | post_edit | false | boolean |  |
| Time Limit for Editing Posts | post_edit_time_limit | 5 | number |  |
| Sticky Post Edit Permission | post_edit_sticky_limit | false | boolean |  |
| Digest Post Edit Permission | post_edit_digest_limit | false | boolean |  |
| Post Delete Permission | post_delete | true | boolean |  |
| Sticky Post Delete Permission | post_delete_sticky_limit | true | boolean |  |
| Digest Post Delete Permission | post_delete_digest_limit | true | boolean |  |
| <hr> |  |  |  |  |
| Post Editor | post_editor_service |  | **plugin** | Plugin application scenario parameter `editor` |
| <hr> |  |  |  |  |
| Group | post_editor_group | true | boolean |  |
| Title | post_editor_title | true | boolean |  |
| Sticker | post_editor_sticker | true | boolean |  |
| Image | post_editor_image | false | boolean |  |
| Video | post_editor_video | false | boolean |  |
| Audio | post_editor_audio | false | boolean |  |
| Document | post_editor_document | false | boolean |  |
| Mention | post_editor_mention | true | boolean |  |
| Hashtag | post_editor_hashtag | true | boolean |  |
| Extended Function | post_editor_extend | false | boolean |  |
| Location | post_editor_location | false | boolean |  |
| Anonymous | post_editor_anonymous | false | boolean |  |
| <hr> |  |  |  |  |
| Image Upload Method | post_editor_image_upload_form | fresns | string | fresns or plugin |
| Image Upload Quantity | post_editor_image_upload_number | 9 | number |  |
| Video Upload Method | post_editor_video_upload_form | fresns | string | fresns or plugin |
| Video Upload Quantity | post_editor_video_upload_number | 1 | number |  |
| Audio Upload Method | post_editor_audio_upload_form | fresns | string | fresns or plugin |
| Audio Upload Quantity | post_editor_audio_upload_number | 1 | number |  |
| Document Upload Method | post_editor_document_upload_form | fresns | string | fresns or plugin |
| Document Upload Quantity | post_editor_document_upload_number | 10 | number |  |
| Is Group Required | post_editor_group_required | false | boolean |  |
| Title Input Box Force Display | post_editor_title_view | 1 | number | 1. Default Display<br>2. Default Hidden |
| Is Title Required | post_editor_title_required | false | boolean |  |
| Title Word Limit | post_editor_title_length | 60 | number |  |
| Post Word Limit | post_editor_content_length | 10000 | number |  |
| Post Summary Word Limit | post_editor_brief_length | 280 | number |  |

## Comment

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Comment Submission Requirement - Email | comment_email_verify | false | boolean |  |
| Comment Submission Requirement - Phone Number | comment_phone_verify | false | boolean |  |
| Comment Submission Requirement - Real Name | comment_real_name_verify | false | boolean |  |
| <hr> |  |  |  |  |
| Special Rules for Comment Submission | comment_limit_status | false | boolean |  |
| Rule Type | comment_limit_type | 1 | number | 1. Time Period Restriction<br>2. Recurring Time Period Restriction |
| Time Period Restriction - Start Time | comment_limit_period_start |  | string |  |
| Time Period Restriction - End Time | comment_limit_period_end |  | string |  |
| Recurring Time Period Restriction - Start Time | comment_limit_cycle_start | 23:30 | string |  |
| Recurring Time Period Restriction - End Time | comment_limit_cycle_end | 08:30 | string |  |
| Restriction Rule | comment_limit_rule | 1 | number | 1. Can post, but requires review<br>2. Prohibit publish |
| Restriction Tips | comment_limit_tip |  | string | **Multilingual** |
| Special Rule Whitelist Roles | comment_limit_whitelist | ["1"] | array | User Role ID |
| <hr> |  |  |  |  |
| Comment Editing Permissions | comment_edit | false | boolean |  |
| How Long Can Edit | comment_edit_time_limit | 5 | number |  |
| Comment Top After Editing Permissions | comment_edit_sticky_limit | false | boolean |  |
| Comment Essence After Editing Permissions | comment_edit_digest_limit | false | boolean |  |
| Comment Delete Permission | comment_delete | true | boolean |  |
| Sticky Comment Delete Permission | comment_delete_sticky_limit | true | boolean |  |
| Digest Comment Delete Permission | comment_delete_digest_limit | true | boolean |  |
| <hr> |  |  |  |  |
| Comment Editor | comment_editor_service |  | **plugin** | Plugin Application Scene Parameter `editor` |
| <hr> |  |  |  |  |
| Emoji | comment_editor_sticker | true | boolean |  |
| Image | comment_editor_image | false | boolean |  |
| Video | comment_editor_video | false | boolean |  |
| Audio | comment_editor_audio | false | boolean |  |
| Document | comment_editor_document | false | boolean |  |
| Mention | comment_editor_mention | true | boolean |  |
| Hashtag | comment_editor_hashtag | true | boolean |  |
| Extended Function | comment_editor_extend | false | boolean |  |
| Location | comment_editor_location | false | boolean |  |
| Anonymous | comment_editor_anonymous | false | boolean |  |
| <hr> |  |  |  |  |
| Image Upload Method | comment_editor_image_upload_form | fresns | string | fresns or plugin |
| Image Upload Number | comment_editor_image_upload_number | 9 | number |  |
| Video Upload Method | comment_editor_video_upload_form | fresns | string | fresns or plugin |
| Video Upload Number | comment_editor_video_upload_number | 1 | number |  |
| Audio Upload Method | comment_editor_audio_upload_form | fresns | string | fresns or plugin |
| Audio Upload Number | comment_editor_audio_upload_number | 1 | number |  |
| Document Upload Method | comment_editor_document_upload_form | fresns | string | fresns or plugin |
| Document Upload Number | comment_editor_document_upload_number | 10 | number |  |
| Comment Word Limit | comment_editor_content_length | 1000 | number |  |
| Comment Summary Word Limit | comment_editor_brief_length | 280 | number |  |

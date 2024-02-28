# Publish

> Panel > Operations > Publish

## Post

**Publish Request**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Email Required | post_required_email | false | boolean |  |
| Phone Required | post_required_phone | false | boolean |  |
| KYC Required | post_required_kyc | false | boolean |  |

**Publish Rules**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Special Post Rule | post_limit_status | false | boolean |  |
| Rule Type | post_limit_type | 1 | number | 1. Time period limit<br>2. Recurring time period limit |
| Time Period Limit - Start Time | post_limit_period_start |  | string |  |
| Time Period Limit - End Time | post_limit_period_end |  | string |  |
| Recurring Time Period Limit - Start Time | post_limit_cycle_start | 23:30 | string |  |
| Recurring Time Period Limit - End Time | post_limit_cycle_end | 08:30 | string |  |
| Limitation Rule | post_limit_rule | 1 | number | 1. Can post, but requires review<br>2. Prohibit publish |
| Limitation Tip | post_limit_tip |  | string | **Multilingual** |
| Special Rule Whitelist | post_limit_whitelist | ["1"] | array | User role ID |

**Editor**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Post Editor | post_editor_service |  | **plugin** | panelUsages `editor` |
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
| Image Upload Type | post_editor_image_upload_type | api | string | `api`<br>`page`<br>`sdk` |
| Image Upload Quantity | post_editor_image_upload_number | 9 | number |  |
| Video Upload Type | post_editor_video_upload_type | api | string | `api`<br>`page`<br>`sdk` |
| Video Upload Quantity | post_editor_video_upload_number | 1 | number |  |
| Audio Upload Type | post_editor_audio_upload_type | api | string | `api`<br>`page`<br>`sdk` |
| Audio Upload Quantity | post_editor_audio_upload_number | 1 | number |  |
| Document Upload Type | post_editor_document_upload_type | api | string | `api`<br>`page`<br>`sdk` |
| Document Upload Quantity | post_editor_document_upload_number | 10 | number |  |
| Is Group Required | post_editor_group_required | false | boolean |  |
| Title Input Box Force Display | post_editor_title_show | false | boolean |  |
| Is Title Required | post_editor_title_required | false | boolean |  |
| Post Title Word Limit | post_editor_title_length | 60 | number |  |
| Post Word Limit | post_editor_content_length | 10000 | number |  |

## Comment

**Publish Request**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Email Required | comment_required_email | false | boolean |  |
| Phone Required | comment_required_phone | false | boolean |  |
| KYC Required | comment_required_kyc | false | boolean |  |

**Publish Rules**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Special Rules for Comment Submission | comment_limit_status | false | boolean |  |
| Rule Type | comment_limit_type | 1 | number | 1. Time Period Restriction<br>2. Recurring Time Period Restriction |
| Time Period Restriction - Start Time | comment_limit_period_start |  | string |  |
| Time Period Restriction - End Time | comment_limit_period_end |  | string |  |
| Recurring Time Period Restriction - Start Time | comment_limit_cycle_start | 23:30 | string |  |
| Recurring Time Period Restriction - End Time | comment_limit_cycle_end | 08:30 | string |  |
| Restriction Rule | comment_limit_rule | 1 | number | 1. Can post, but requires review<br>2. Prohibit publish |
| Restriction Tips | comment_limit_tip |  | string | **Multilingual** |
| Special Rule Whitelist Roles | comment_limit_whitelist | ["1"] | array | User Role ID |

**Editor**

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Comment Editor | comment_editor_service |  | **plugin** | panelUsages `editor` |
| <hr> |  |  |  |  |
| Sticker | comment_editor_sticker | true | boolean |  |
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
| Image Upload Type | comment_editor_image_upload_type | api | string | `api`<br>`page`<br>`sdk` |
| Image Upload Quantity | comment_editor_image_upload_number | 9 | number |  |
| Video Upload Type | comment_editor_video_upload_type | api | string | `api`<br>`page`<br>`sdk` |
| Video Upload Quantity | comment_editor_video_upload_number | 1 | number |  |
| Audio Upload Type | comment_editor_audio_upload_type | api | string | `api`<br>`page`<br>`sdk` |
| Audio Upload Quantity | comment_editor_audio_upload_number | 1 | number |  |
| Document Upload Type | comment_editor_document_upload_type | api | string | `api`<br>`page`<br>`sdk` |
| Document Upload Quantity | comment_editor_document_upload_number | 10 | number |  |
| Comment Word Limit | comment_editor_content_length | 1000 | number |  |

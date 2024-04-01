---
aside: false
---

# roles

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| rid | varchar(32) | Public ID |  | NO | **Unique** |
| name | json | Role Name |  | NO | **Multilingual** |
| icon_file_id | bigint *UNSIGNED* | Icon File ID |  | YES | Related field [files->id](../systems/files.md) |
| icon_file_url | varchar(255) | Icon File URL |  | YES |  |
| is_display_name | tinyint *UNSIGNED* | Display Text Identifier | 0 | NO | 0.No Display / 1.Display |
| is_display_icon | tinyint *UNSIGNED* | Display Icon Identifier | 0 | NO | 0.No Display / 1.Display |
| nickname_color | char(7) | User Nickname Color Value |  | YES |  |
| permissions | json | Permission Parameters |  | NO |  |
| more_info | json | More Info |  | YES |  |
| rank_state | tinyint *UNSIGNED* | Rank Status | 1 | NO | 1.Not Set |
| sort_order | smallint *UNSIGNED* | Sorting Order | 9 | NO | Ascending order |
| is_enabled | tinyint *UNSIGNED* | Is Enabled | 1 | NO | 0.Disabled / 1.Enabled |
| created_at | timestamp | Create Time | useCurrent | NO | For example, MySQL defaults to `CURRENT_TIMESTAMP` |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

## Introduction to Permission Parameters

Permissions parameter field: `permissions`

```json
[
    // Basic settings
    {
        "permKey": "content_view", // View permission
        "permValue": true, // false=No permission; true=Has permission
        "isCustom": false // false=Fixed; true=Custom
    },
    {
        "permKey": "conversation", // Conversation permission
        "permValue": true, // false=No permission; true=Has permission
        "isCustom": false
    },
    {
        "permKey": "content_link_handle", // Link handling
        "permValue": 1, // 1=Do not parse and encrypt domain, 2=Do not parse but display as text, 3=Parse normally
        "isCustom": false
    },
    // Post publishing settings
    {
        "permKey": "post_publish", // Post publishing permission
        "permValue": true, // false=No permission; true=Has permission
        "isCustom": false
    },
    {
        "permKey": "post_review", // Post review required
        "permValue": false, // false=Not required; true=Required
        "isCustom": false
    },
    {
        "permKey": "post_required_email", // Post requirements - Email
        "permValue": false, // false=Not required; true=Required
        "isCustom": false
    },
    {
        "permKey": "post_required_phone", // Post requirements - Phone
        "permValue": false, // false=Not required; true=Required
        "isCustom": false
    },
    {
        "permKey": "post_required_kyc", // Post requirements - Real name verification
        "permValue": false, // false=Not required; true=Required
        "isCustom": false
    },
    {
        "permKey": "post_limit_status", // Special rules for post publishing
        "permValue": false, // false=Off; true=On
        "isCustom": false
    },
    {
        "permKey": "post_limit_type", // Rule type, valid when post_limit_status=true
        "permValue": 1, // 1.Specify a time period range, 2.Specify a time period range that repeats daily
        "isCustom": false
    },
    {
        "permKey": "post_limit_period_start", // post_limit_type=1 specific
        "permValue": "2022-06-01 22:30:00", // Start date and time
        "isCustom": false
    },
    {
        "permKey": "post_limit_period_end", // post_limit_type=1 specific
        "permValue": "2022-06-06 08:00:00", // End date and time
        "isCustom": false
    },
    {
        "permKey": "post_limit_cycle_start", // post_limit_type=2 specific
        "permValue": "23:00:00", // Start time
        "isCustom": false
    },
    {
        "permKey": "post_limit_cycle_end", // post_limit_type=2 specific
        "permValue": "08:30:00", // End time
        "isCustom": false
    },
    {
        "permKey": "post_limit_rule", // Restriction rules
        "permValue": 1, // 1.Can publish but needs review, 2.Forbidden to publish
        "isCustom": false
    },
    {
        "permKey": "post_second_interval", // Time interval rule
        "permValue": 60, // 0 for no restriction, number in seconds
        "isCustom": false
    },
    {
        "permKey": "post_daily_count", // 24-hour limit
        "permValue": 0, // 0 for no restriction
        "isCustom": false
    },
    {
        "permKey": "post_draft_count", // Draft count limit
        "permValue": 10, // Maximum of 10 unpublished comment drafts
        "isCustom": false
    },
    // Comment publishing settings
    {
        "permKey": "comment_publish", // Comment publishing permission
        "permValue": true, // false=No permission; true=Has permission
        "isCustom": false
    },
    {
        "permKey": "comment_review", // Comment review required
        "permValue": false, // false=Not required; true=Required
        "isCustom": false
    },
    {
        "permKey": "comment_required_email", // Comment requirements - Email
        "permValue": false, // false=Not required; true=Required
        "isCustom": false
    },
    {
        "permKey": "comment_required_phone", // Comment requirements - Phone
        "permValue": false, // false=Not required; true=Required
        "isCustom": false
    },
    {
        "permKey": "comment_required_kyc", // Comment requirements - Real name verification
        "permValue": false, // false=Not required; true=Required
        "isCustom": false
    },
    {
        "permKey": "comment_limit_status", // Special rules for comment publishing
        "permValue": false, // false=Off; true=On
        "isCustom": false
    },
    {
        "permKey": "comment_limit_type", // Rule type, valid when comment_limit_status=true
        "permValue": 1, // 1.Specify a time period range, 2.Specify a time period range that repeats daily
        "isCustom": false
    },
    {
        "permKey": "comment_limit_period_start", // comment_limit_type=1 specific
        "permValue": "2022-06-01 22:30:00", // Start date and time
        "isCustom": false
    },
    {
        "permKey": "comment_limit_period_end", // comment_limit_type=1 specific
        "permValue": "2022-06-06 08:00:00", // End date and time
        "isCustom": false
    },
    {
        "permKey": "comment_limit_cycle_start", // comment_limit_type=2 specific
        "permValue": "23:00:00", // Start time
        "isCustom": false
    },
    {
        "permKey": "comment_limit_cycle_end", // comment_limit_type=2 specific
        "permValue": "08:30:00", // End time
        "isCustom": false
    },
    {
        "permKey": "comment_limit_rule", // Restriction rules
        "permValue": 1, // 1.Can publish but needs review, 2.Forbidden to publish
        "isCustom": false
    },
    {
        "permKey": "comment_second_interval", // Time interval rule
        "permValue": 60, // 0 for no restriction, number in seconds
        "isCustom": false
    },
    {
        "permKey": "comment_draft_count", // Draft count limit
        "permValue": 10, // Maximum of 10 unpublished comment drafts
        "isCustom": false
    },
    // Upload permission settings
    {
        "permKey": "post_editor_image", // Upload image
        "permValue": true, // false=Cannot upload; true=Can upload
        "isCustom": false
    },
    {
        "permKey": "post_editor_image_max_upload_number", // Number of images to upload
        "permValue": 9, // Number of units
        "isCustom": false
    },
    {
        "permKey": "post_editor_video", // Upload video
        "permValue": true, // false=Cannot upload; true=Can upload
        "isCustom": false
    },
    {
        "permKey": "post_editor_video_max_upload_number", // Number of videos to upload
        "permValue": 1, // Number of units
        "isCustom": false
    },
    {
        "permKey": "post_editor_audio", // Upload audio
        "permValue": true, // false=Cannot upload; true=Can upload
        "isCustom": false
    },
    {
        "permKey": "post_editor_audio_max_upload_number", // Number of audios to upload
        "permValue": 2, // Number of units
        "isCustom": false
    },
    {
        "permKey": "post_editor_document", // Upload document
        "permValue": true, // false=Cannot upload; true=Can upload
        "isCustom": false
    },
    {
        "permKey": "post_editor_document_max_upload_number", // Number of documents to upload
        "permValue": 10, // Number of units
        "isCustom": false
    },
    {
        "permKey": "comment_editor_image", // Upload image
        "permValue": true, // false=Cannot upload; true=Can upload
        "isCustom": false
    },
    {
        "permKey": "comment_editor_image_max_upload_number", // Number of images to upload
        "permValue": 9, // Number of units
        "isCustom": false
    },
    {
        "permKey": "comment_editor_video", // Upload video
        "permValue": false, // false=Cannot upload; true=Can upload
        "isCustom": false
    },
    {
        "permKey": "comment_editor_video_max_upload_number", // Number of videos to upload
        "permValue": 1, // Number of units
        "isCustom": false
    },
    {
        "permKey": "comment_editor_audio", // Upload audio
        "permValue": false, // false=Cannot upload; true=Can upload
        "isCustom": false
    },
    {
        "permKey": "comment_editor_audio_max_upload_number", // Number of audios to upload
        "permValue": 2, // Number of units
        "isCustom": false
    },
    {
        "permKey": "comment_editor_document", // Upload document
        "permValue": false, // false=Cannot upload; true=Can upload
        "isCustom": false
    },
    {
        "permKey": "comment_editor_document_max_upload_number", // Number of documents to upload
        "permValue": 10, // Number of units
        "isCustom": false
    },
    // Upload configuration values
    {
        "permKey": "image_max_size", // Maximum supported size for uploading images
        "permValue": 5, // Unit MB
        "isCustom": false
    },
    {
        "permKey": "video_max_size", // Maximum supported size for uploading videos
        "permValue": 50, // Unit MB
        "isCustom": false
    },
    {
        "permKey": "video_max_time", // Maximum supported duration for uploaded videos
        "permValue": 60, // Unit seconds
        "isCustom": false
    },
    {
        "permKey": "audio_max_size", // Maximum supported size for uploading audios
        "permValue": 50, // Unit MB
        "isCustom": false
    },
    {
        "permKey": "audio_max_time", // Maximum supported duration for uploaded audios
        "permValue": 60, // Unit seconds
        "isCustom": false
    },
    {
        "permKey": "document_max_size", // Maximum supported size for uploading documents
        "permValue": 10, // Unit MB
        "isCustom": false
    },
    // Interaction settings
    {
        "permKey": "follow_user_max_count", // Maximum number of users to follow
        "permValue": 500,
        "isCustom": false
    },
    {
        "permKey": "block_user_max_count", // Maximum number of users to block
        "permValue": 500,
        "isCustom": false
    },
    {
        "permKey": "download_file_count", // Download files
        "permValue": 10, // Number of allowed downloads within 24 hours
        "isCustom": false
    }
]
```

## Permission parameter defaults (after compression)

```json
//General Role
[{"permKey":"content_view","permValue":true,"isCustom":false},{"permKey":"conversation","permValue":true,"isCustom":false},{"permKey":"content_link_handle","permValue":3,"isCustom":false},{"permKey":"post_publish","permValue":true,"isCustom":false},{"permKey":"post_review","permValue":false,"isCustom":false},{"permKey":"post_required_email","permValue":false,"isCustom":false},{"permKey":"post_required_phone","permValue":false,"isCustom":false},{"permKey":"post_required_kyc","permValue":false,"isCustom":false},{"permKey":"post_limit_status","permValue":false,"isCustom":false},{"permKey":"post_limit_type","permValue":1,"isCustom":false},{"permKey":"post_limit_period_start","permValue":"2022-06-01 22:30:00","isCustom":false},{"permKey":"post_limit_period_end","permValue":"2022-06-06 08:00:00","isCustom":false},{"permKey":"post_limit_cycle_start","permValue":"23:00:00","isCustom":false},{"permKey":"post_limit_cycle_end","permValue":"08:30:00","isCustom":false},{"permKey":"post_limit_rule","permValue":1,"isCustom":false},{"permKey":"post_second_interval","permValue":60,"isCustom":false},{"permKey":"post_daily_count","permValue":0,"isCustom":false},{"permKey":"post_limit_rule","permValue":1,"isCustom":false},{"permKey":"post_second_interval","permValue":60,"isCustom":false},{"permKey":"post_draft_count","permValue":10,"isCustom":false},{"permKey":"comment_publish","permValue":true,"isCustom":false},{"permKey":"comment_review","permValue":false,"isCustom":false},{"permKey":"comment_required_email","permValue":false,"isCustom":false},{"permKey":"comment_required_phone","permValue":false,"isCustom":false},{"permKey":"comment_required_kyc","permValue":false,"isCustom":false},{"permKey":"comment_limit_status","permValue":false,"isCustom":false},{"permKey":"comment_limit_type","permValue":1,"isCustom":false},{"permKey":"comment_limit_period_start","permValue":"2022-06-01 22:30:00","isCustom":false},{"permKey":"comment_limit_period_end","permValue":"2022-06-06 08:00:00","isCustom":false},{"permKey":"comment_limit_cycle_start","permValue":"23:00:00","isCustom":false},{"permKey":"comment_limit_cycle_end","permValue":"08:30:00","isCustom":false},{"permKey":"comment_limit_rule","permValue":1,"isCustom":false},{"permKey":"comment_second_interval","permValue":60,"isCustom":false},{"permKey":"comment_daily_count","permValue":0,"isCustom":false},{"permKey":"comment_draft_count","permValue":10,"isCustom":false},{"permKey":"post_editor_image","permValue":true,"isCustom":false},{"permKey":"post_editor_image_max_upload_number","permValue":9,"isCustom":false},{"permKey":"post_editor_video","permValue":true,"isCustom":false},{"permKey":"post_editor_video_max_upload_number","permValue":1,"isCustom":false},{"permKey":"post_editor_audio","permValue":true,"isCustom":false},{"permKey":"post_editor_audio_max_upload_number","permValue":2,"isCustom":false},{"permKey":"post_editor_document","permValue":true,"isCustom":false},{"permKey":"post_editor_document_max_upload_number","permValue":10,"isCustom":false},{"permKey":"comment_editor_image","permValue":true,"isCustom":false},{"permKey":"comment_editor_image_max_upload_number","permValue":9,"isCustom":false},{"permKey":"comment_editor_video","permValue":false,"isCustom":false},{"permKey":"comment_editor_video_max_upload_number","permValue":1,"isCustom":false},{"permKey":"comment_editor_audio","permValue":false,"isCustom":false},{"permKey":"comment_editor_audio_max_upload_number","permValue":2,"isCustom":false},{"permKey":"comment_editor_document","permValue":false,"isCustom":false},{"permKey":"comment_editor_document_max_upload_number","permValue":10,"isCustom":false},{"permKey":"image_max_size","permValue":5,"isCustom":false},{"permKey":"video_max_size","permValue":50,"isCustom":false},{"permKey":"video_max_time","permValue":60,"isCustom":false},{"permKey":"audio_max_size","permValue":50,"isCustom":false},{"permKey":"audio_max_time","permValue":60,"isCustom":false},{"permKey":"document_max_size","permValue":10,"isCustom":false},{"permKey":"follow_user_max_count","permValue":500,"isCustom":false},{"permKey":"block_user_max_count","permValue":500,"isCustom":false},{"permKey":"download_file_count","permValue":10,"isCustom":false}]

//Interdiction or Pending Review roles
[{"permKey":"content_view","permValue":true,"isCustom":false},{"permKey":"conversation","permValue":false,"isCustom":false},{"permKey":"content_link_handle","permValue":1,"isCustom":false},{"permKey":"post_publish","permValue":false,"isCustom":false},{"permKey":"post_review","permValue":false,"isCustom":false},{"permKey":"post_required_email","permValue":false,"isCustom":false},{"permKey":"post_required_phone","permValue":false,"isCustom":false},{"permKey":"post_required_kyc","permValue":false,"isCustom":false},{"permKey":"post_limit_status","permValue":false,"isCustom":false},{"permKey":"post_limit_type","permValue":1,"isCustom":false},{"permKey":"post_limit_period_start","permValue":"2022-06-01 22:30:00","isCustom":false},{"permKey":"post_limit_period_end","permValue":"2022-06-06 08:00:00","isCustom":false},{"permKey":"post_limit_cycle_start","permValue":"23:00:00","isCustom":false},{"permKey":"post_limit_cycle_end","permValue":"08:30:00","isCustom":false},{"permKey":"post_limit_rule","permValue":1,"isCustom":false},{"permKey":"post_second_interval","permValue":60,"isCustom":false},{"permKey":"post_limit_rule","permValue":1,"isCustom":false},{"permKey":"post_second_interval","permValue":60,"isCustom":false},{"permKey":"post_daily_count","permValue":1,"isCustom":false},{"permKey":"post_draft_count","permValue":10,"isCustom":false},{"permKey":"comment_publish","permValue":false,"isCustom":false},{"permKey":"comment_review","permValue":false,"isCustom":false},{"permKey":"comment_required_email","permValue":false,"isCustom":false},{"permKey":"comment_required_phone","permValue":false,"isCustom":false},{"permKey":"comment_required_kyc","permValue":false,"isCustom":false},{"permKey":"comment_limit_status","permValue":false,"isCustom":false},{"permKey":"comment_limit_type","permValue":1,"isCustom":false},{"permKey":"comment_limit_period_start","permValue":"2022-06-01 22:30:00","isCustom":false},{"permKey":"comment_limit_period_end","permValue":"2022-06-06 08:00:00","isCustom":false},{"permKey":"comment_limit_cycle_start","permValue":"23:00:00","isCustom":false},{"permKey":"comment_limit_cycle_end","permValue":"08:30:00","isCustom":false},{"permKey":"comment_limit_rule","permValue":1,"isCustom":false},{"permKey":"comment_second_interval","permValue":60,"isCustom":false},{"permKey":"comment_daily_count","permValue":1,"isCustom":false},{"permKey":"comment_draft_count","permValue":10,"isCustom":false},{"permKey":"post_editor_image","permValue":true,"isCustom":false},{"permKey":"post_editor_image_max_upload_number","permValue":9,"isCustom":false},{"permKey":"post_editor_video","permValue":true,"isCustom":false},{"permKey":"post_editor_video_max_upload_number","permValue":1,"isCustom":false},{"permKey":"post_editor_audio","permValue":true,"isCustom":false},{"permKey":"post_editor_audio_max_upload_number","permValue":2,"isCustom":false},{"permKey":"post_editor_document","permValue":true,"isCustom":false},{"permKey":"post_editor_document_max_upload_number","permValue":10,"isCustom":false},{"permKey":"comment_editor_image","permValue":true,"isCustom":false},{"permKey":"comment_editor_image_max_upload_number","permValue":9,"isCustom":false},{"permKey":"comment_editor_video","permValue":false,"isCustom":false},{"permKey":"comment_editor_video_max_upload_number","permValue":1,"isCustom":false},{"permKey":"comment_editor_audio","permValue":false,"isCustom":false},{"permKey":"comment_editor_audio_max_upload_number","permValue":2,"isCustom":false},{"permKey":"comment_editor_document","permValue":false,"isCustom":false},{"permKey":"comment_editor_document_max_upload_number","permValue":10,"isCustom":false},{"permKey":"image_max_size","permValue":5,"isCustom":false},{"permKey":"video_max_size","permValue":50,"isCustom":false},{"permKey":"video_max_time","permValue":60,"isCustom":false},{"permKey":"audio_max_size","permValue":50,"isCustom":false},{"permKey":"audio_max_time","permValue":60,"isCustom":false},{"permKey":"document_max_size","permValue":10,"isCustom":false},{"permKey":"follow_user_max_count","permValue":500,"isCustom":false},{"permKey":"block_user_max_count","permValue":500,"isCustom":false},{"permKey":"download_file_count","permValue":0,"isCustom":false}]
```

# Storage

> Panel > Systems > Storage

## Image

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Storage Service | image_service |  | **plugin** | panelUsages `storage` |
| Secret ID | image_secret_id |  | string |  |
| Secret Key | image_secret_key |  | string |  |
| Secret App | image_secret_app |  | string |  |
| Storage Name | image_bucket_name |  | string |  |
| Storage Region | image_bucket_region |  | string |  |
| Storage Domain | image_bucket_domain |  | string | Starts with `http://` or `https://`, without trailing `/` |
| Filesystem Disk | image_filesystem_disk |  | string | `local` or `remote` |
| Supported Extensions | image_extension_names |  | string | Separated by English commas `,` |
| Supported Maximum Size | image_max_size | 5 | number | Unit: MB |
| Anti-leech Function | image_url_status | false | boolean | Use status |
| Anti-leech Key | image_url_key |  | string |  |
| Anti-leech Signature Expiration | image_url_expire | 10 | number | Unit: minutes |
| Image Processing Position | image_handle_position | end | string | `{empty}` Not used<br>`path-start` Path start position<br>`path-end` Path end position<br>`name-start` Filename start position<br>`name-end` Filename end position (before the extension) |
| Configuration Image Parameters | image_thumb_config |  | string | Configuration image only |
| Proportional Thumbnail Parameters | image_thumb_ratio |  | string | Proportionally reduce or compress the image |
| Square Thumbnail Parameters | image_thumb_square |  | string | Force output of square thumbnail, will crop if not square |
| Original Image Compression Parameters | image_thumb_big |  | string | Original image compression |

- Supported Extensions: `png,gif,jpg,jpeg,bmp,heic`

## Video

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Storage Service | video_service |  | **plugin** | panelUsages `storage` |
| Secret ID | video_secret_id |  | string |  |
| Secret Key | video_secret_key |  | string |  |
| Secret App | video_secret_app |  | string |  |
| Storage Name | video_bucket_name |  | string |  |
| Storage Region | video_bucket_region |  | string |  |
| Storage Domain | video_bucket_domain |  | string | Starts with `http://` or `https://`, without trailing `/` |
| Filesystem Disk | video_filesystem_disk |  | string | `local` or `remote` |
| Supported Extensions | video_extension_names |  | string | Separated by English commas `,` |
| Supported Maximum Size | video_max_size | 50 | number | Unit: MB |
| Supported Maximum Video Length | video_max_time | 60 | number | Unit: seconds |
| Anti-leech Function | video_url_status | false | boolean | Use status |
| Anti-leech Key | video_url_key |  | string |  |
| Anti-leech Signature Expiration | video_url_expire | 10 | number | Unit: minutes |
| Video Transcoding Parameters | video_transcode_parameter |  | string |  |
| Video Transcoding Parameter Handling Position | video_transcode_handle_position |  | string | `{empty}` Not used<br>`path-start` Path start position<br>`path-end` Path end position<br>`name-start` Filename start position<br>`name-end` Filename end position (before the extension) |
| Video Poster Parameters | video_poster_parameter |  | string |  |
| Video Poster Parameter Handling Position | video_poster_handle_position |  | string | `{empty}` Not used<br>`path-start` Path start position<br>`path-end` Path end position<br>`name-start` Filename start position<br>`name-end` Filename end position (before the extension) |

- Supported Extensions: `wmv,rm,mov,mpeg,mp4,<br>3gp,flv,avi,rmvb`

## Audio

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Storage Service | audio_service |  | **plugin** | panelUsages `storage` |
| Secret ID | audio_secret_id |  | string |  |
| Secret Key | audio_secret_key |  | string |  |
| Secret App | audio_secret_app |  | string |  |
| Storage Name | audio_bucket_name |  | string |  |
| Storage Region | audio_bucket_region |  | string |  |
| Storage Domain | audio_bucket_domain |  | string | Starts with `http://` or `https://`, without trailing `/` |
| Filesystem Disk | audio_filesystem_disk |  | string | `local` or `remote` |
| Supported Extensions | audio_extension_names |  | string | Separated by English commas `,` |
| Supported Maximum Size | audio_max_size | 50 | number | Unit: MB |
| Supported Maximum Audio Length | audio_max_time | 60 | number | Unit: seconds |
| Anti-leech Function | audio_url_status | false | boolean | Use status |
| Anti-leech Key | audio_url_key |  | string |  |
| Anti-leech Signature Expiration | audio_url_expire | 10 | number | Unit: minutes |
| Audio Transcoding Parameters | audio_transcode_parameter |  | string |  |
| Audio Transcoding Parameter Handling Position | audio_transcode_handle_position |  | string | `{empty}` Not used<br>`path-start` Path start position<br>`path-end` Path end position<br>`name-start` Filename start position<br>`name-end` Filename end position (before the extension) |

- Supported Extensions: `mp3,wav,m4a`

## Document

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Storage Service | document_service |  | **plugin** | panelUsages `storage` |
| Secret ID | document_secret_id |  | string |  |
| Secret Key | document_secret_key |  | string |  |
| Secret App | document_secret_app |  | string |  |
| Storage Name | document_bucket_name |  | string |  |
| Storage Region | document_bucket_region |  | string |  |
| Storage Domain | document_bucket_domain |  | string | Starts with `http://` or `https://`, without trailing `/` |
| Filesystem Disk | document_filesystem_disk |  | string | `local` or `remote` |
| Supported Extensions | document_extension_names |  | string | Separated by English commas `,` |
| Supported Maximum Size | document_max_size | 10 | number | Unit: MB |
| Anti-leech Function | document_url_status | false | boolean | Use status |
| Anti-leech Key | document_url_key |  | string |  |
| Anti-leech Signature Expiration | document_url_expire | 10 | number | Unit: minutes |
| Preview URL Rule | document_online_preview |  | string | Supports variable names `{docurl}` or `{fid}` |
| Supported Preview Extensions | document_preview_extension_names |  | string |  |

- Supported Extensions: `doc,docx,xls,xlsx,csv,<br>ppt,pptx,pps,ppts,<br>pdf,<br>txt,md,markdown,<br>rar,zip,7z,<br>epub,mobi`
- Supported Preview Extensions: `doc,docx,xls,xlsx,csv,ppt,pptx,pdf`

## Substitution

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Invalid Image Placeholder | image_substitution |  | **file** |  |
| Invalid Video Placeholder | video_substitution |  | **file** |  |
| Invalid Audio Placeholder | audio_substitution |  | **file** |  |
| Invalid Document Placeholder | document_substitution |  | **file** |  |

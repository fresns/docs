# Editor Plugin Development

- Editor Configuration `Panel > Operations > Publish`

## Editor Logic

### Global Permissions

The function of publishing the settings of the configuration page is given the first priority.

> Panel > Operations > Publish

### Role Permissions

Role permission is given the second priority.

> Panel > Operations > Roles

### Upload Permissions

Storage setting is given the third priority.

> Panel > Systems > Storage

### Explanation

- First layer: the global configuration applies to all roles. When a specific condition is enabled, all roles need to meet the condition before publishing account e-mail or mobile phone binding, special rules, etc., excluding whitelist roles configured in such two key names as `post_limit_whitelist` and comment_limit_whitelist.
- Second layer: when no condition is enabled for configuration publishing (or the conditions for publishing configuration are met), identify the primary role. If the permission of the primary role is enabled, members of the role need to meet the condition before publishing permissions and special rules.
    - Note: if the primary role has an expiration time and has expired, permissions of the role should be inherited. If there is no inherited role (or the inherited ID could not find its role), the role permissions of the `default_role` key name and key value in the configuration table shall prevail. If the key value of the configuration table is null (or the role could not be found), the process shall be handled as no permissions are granted.
- Third layer: when the role has not set upload parameters (e.g., whether upload is permitted; the size of uploaded parameters, and upload time), the settings saved by the system shall prevail. If the role has set upload parameters, the role permission shall prevail.


## Editor Permissions

According to the method encapsulated in the description of the above three layers of logic, publishing permission can be obtained based on the user and type.

```php
ConfigUtility::getPublishConfigByType($userId, $type, $langTag, $timezone);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| userId | Number | **required** | `users->id` |
| type | String | **required** | `post` or `comment` |
| langTag | String | *optional* | If empty, the database language is used. |
| timezone | String | *optional* | If empty, the default time zone is used. |


## Editor Function Flow

- 1. Obtain configuration parameter `GET` `/api/v2/editor/{type}/config` to identify permission and render the editor
    - `editor` parameter rendering editor
    - `publish` parameter identifying and publishing permission
    - `editPerm` parameter identifying and editing permission
- 2. Request for `GET` `/api/v2/editor/{type}/drafts` interface to obtain the draft list
    - 2.1 When the draft list is empty, request for `POST` `/api/v2/editor/{type}/create` to create the draft automatically
    - 2.2 If there is a draft, pop up the selection layer.
        - `Select draft` request for `GET` `/api/v2/editor/{type}/{draftId}` to load the content of the draft
        - `Create a draft` request for `POST` `/api/v2/editor/{type}/create` to create a new draft
- 3. The editor updates the logic with `PUT` `/api/v2/editor/{type}/{draftId}` interface in a real-time manner
    - 3.1 When a group is selected (or changed), trigger update;
    - 3.2 When images are uploaded (or deleted), trigger update;
    - 3.3 When videos are uploaded (or deleted), trigger update;
    - 3.4 When audios are uploaded (or deleted), trigger update;
    - 3.5 When files are uploaded (or deleted), trigger update;
    - 3.6 When anonymity is selected (or canceled), trigger update;
    - 3.7 When “location” is obtained in the parameter returned by the call-back interface (or the location is deleted from the editor), trigger update;
    - 3.8 When “comment with button configuration” is obtained in the parameter returned by the call-back interface (or the comment setting is deleted from the editor), trigger update;
    - 3.9 When “read permission configuration” is obtained in the parameter returned by the call-back interface (or read permission is deleted from the editor), trigger update;
    - 3.10 When “specific member list configuration” is obtained in the parameter returned by the call-back interface (or specific member list configuration is deleted from the editor), trigger update;
    - 3.11 When “location” (or the location is deleted from the editor)is obtained in the parameter returned by the call-back interface, trigger update;
    - 3.12 Inputting the title and content would not trigger the update. The editor would update the title and content once every 10 seconds.
- 4. Click to publish
    - 4.1 If the content triggers a [block word](../../database/contents/block-words.md) that prohibits publication, the API will return a block message.
    - 4.2 If the content triggers a [block word](../../database/contents/block-words.md) that needs to be reviewed, the user will be prompted that the content has been submitted for review (API return `code=38200`) and will be published successfully after the review is passed.
    - 4.3 Everything is normal, then the publication is successful.

## Content Rules

- **Mention(At)**: preceded by `@` and ended with a space.
- **Hashtag(Topic)**: based on the configured [editor.toolbar.hashtag.format](../../api/editor/config.md). If the value is 1, the topic should be preceded by `#` and ended with a space; if the value is 2, the topic should be preceded by `#` and ended with `#`. there could be a single space.
- **Sticker(Emoji)**: preceded by `[` and ended with `]`, with no space between `[` and `]`.

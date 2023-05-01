# ConfigUtility

`App\Utilities\ConfigUtility`

## Add Configuration Key

```php
protected $fresnsConfigItems = [
    [
        'item_key' => 'fssms_content', // Key name
        'item_value' => 1, // Key value
        'item_type' => 'number', // Key type: number, string, boolean, array, object, file, plugin, plugins
        'item_tag' => 'fssms', // Key tag, self-defined, make it easy for you to get all the configuration items of a tag in bulk
        'is_multilingual' => 1, // Multilingual or not: 0.No / 1.Yes
        'is_api' => 0, // API output or not: 0.Disable / 1.Allow
        'language_values' => [
            'zh-Hans' => '中文内容', // Multilingual content
            'en' => 'English Content',
        ],
    ],
    [
        'item_key' => 'fssms_keyid',
        'item_value' => 'adfjd3owe1nnsdf',
        'item_type' => 'string',
        'item_tag' => 'fssms',
        'is_multilingual' => 0,
        'is_api' => 0,
    ]
];

ConfigUtility::addFresnsConfigItems($fresnsConfigItems);
```

*If `item_key` exists, it will be automatically skipped*

## Modify Configuration Key Value

```php
protected $fresnsConfigItems = [
    [
        'item_key' => 'fssms_content', // Key name
        'item_value' => 1, // Key value
        'item_type' => 'number', // Key type: number, string, boolean, array, object, file, plugin, plugins
        'item_tag' => 'fssms', // Key tag, self-defined, make it easy for you to get all the configuration items of a tag in bulk
        'is_multilingual' => 1, // Multilingual or not: 0.No / 1.Yes
        'is_api' => 0, // API output or not: 0.Disable / 1.Allow
        'language_values' => [
            'zh-Hans' => '中文内容', // Multilingual content
            'en' => 'English Content',
        ],
    ],
    [
        'item_key' => 'fssms_keyid',
        'item_value' => 'adfjd3owe1nnsdf',
        'item_type' => 'string',
        'item_tag' => 'fssms',
        'is_multilingual' => 0,
        'is_api' => 0,
    ]
];

ConfigUtility::changeFresnsConfigItems($fresnsConfigItems);
```

*Update if exists, create if not*

## Remove Configuration Key

```php
$fresnsConfigKeys = [
    'fssms_type',
    'fssms_keyid'
];

ConfigUtility::removeFresnsConfigItems($fresnsConfigKeys);
```

## Change Multilingual Content

```php
protected $fresnsLangItems = [
    'table_name' => 'configs',
    'table_column' => 'item_value',
    'table_id' => null,
    'table_key' => 'site_name',
    'language_values' => [
        'zh-Hans' => '中文内容',
        'en' => 'English Content',
    ],
];

ConfigUtility::changeFresnsLanguageItems($fresnsLangItems);
```

## Get Status Code Multilingual Description

```php
ConfigUtility::getCodeMessage($code, $fskey, $langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| code | Number | **required** | Status code |
| fskey | String | *optional* | Associated plugin fskey, if empty, it is Fresns |
| langTag | String | *optional* | If empty, the default language is used. |

## Get Account or User Login Error Count

```php
ConfigUtility::getLoginErrorCount($accountId, $userId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| accountId | Number | **required** | `accounts->id` |
| userId | Number | *optional* | `users->id` |

*Output the number of login errors within the last 1 hour*

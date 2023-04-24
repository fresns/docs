# ConfigUtility

`App\Utilities\ConfigUtility`

## 新增配置键

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

*item_key 存在则自动跳过*

## 修改配置键值

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

*存在则修改，不存在则新建*

## 移除配置键

```php
$fresnsConfigKeys = [
    'fssms_type',
    'fssms_keyid'
];

ConfigUtility::removeFresnsConfigItems($fresnsConfigKeys);
```

## 修改多语言内容

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

## 获取状态码多语言描述

```php
ConfigUtility::getCodeMessage($code, $unikey, $langTag);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| code | Number | **required** | Status code |
| unikey | String | *optional* | Associated plugin unikey, if empty, it is Fresns |
| langTag | String | *optional* | If empty, the default language is used. |

## 获取账号或用户登录错误次数

```php
ConfigUtility::getLoginErrorCount($accountId, $userId);
```
| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| accountId | Number | **required** | `accounts->id` |
| userId | Number | *optional* | `users->id` |

*输出近 1 小时内登录错误次数*

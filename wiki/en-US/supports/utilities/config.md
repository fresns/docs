# ConfigUtility

`App\Utilities\ConfigUtility`

## 新增配置键

```php
protected $fresnsConfigItems = [
    [
        'item_key' => 'fssms_content', // 键名
        'item_value' => 1, // 键值
        'item_type' => 'number', // 键类型: number, string, boolean, array, object, file, plugin, plugins
        'item_tag' => 'fssms', // 键标签，自行定义，可便于你批量获取 tag 所有配置项
        'is_multilingual' => 1, // 是否多语言: 0.否 / 1.是
        'is_api' => 0, // 是否接口输出: 0.禁止 / 1.允许
        'language_values' => [
            'zh-Hans' => '中文内容', // 多语言内容
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
        'item_key' => 'fssms_content', // 键名
        'item_value' => 1, // 键值
        'item_type' => 'number', // 键类型: number, string, boolean, array, object, file, plugin, plugins
        'item_tag' => 'fssms', // 键标签，自行定义，可便于你批量获取 tag 所有配置项
        'is_multilingual' => 1, // 是否多语言: 0.否 / 1.是
        'is_api' => 0, // 是否接口输出: 0.禁止 / 1.允许
        'language_values' => [
            'zh-Hans' => '中文内容', // 多语言内容
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
| code | Number | **required** | 状态码 |
| unikey | String | *optional* | 关联插件 unikey，留空则为 Fresns |
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

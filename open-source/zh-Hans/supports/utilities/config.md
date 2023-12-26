# 配置工具 ConfigUtility

`App\Utilities\ConfigUtility`

## 新增配置键

```php
protected $fresnsConfigItems = [
    [
        'item_key' => 'fssms_content', // 键名
        'item_value' => 1, // 键值
        'item_type' => 'number', // 键类型: number, string, boolean, array, object, file, app, apps
        'is_multilingual' => 1, // 是否多语言: 0.否 / 1.是
        'is_api' => 0, // 是否接口输出: 0.禁止 / 1.允许
    ],
    [
        'item_key' => 'fssms_keyid',
        'item_value' => 'adfjd3owe1nnsdf',
        'item_type' => 'string',
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
        'item_type' => 'number', // 键类型: number, string, boolean, array, object, file, app, apps
        'is_multilingual' => 1, // 是否多语言: 0.否 / 1.是
        'is_api' => 0, // 是否接口输出: 0.禁止 / 1.允许
    ],
    [
        'item_key' => 'fssms_keyid',
        'item_value' => 'adfjd3owe1nnsdf',
        'item_type' => 'string',
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

## 获取状态码多语言描述

```php
ConfigUtility::getCodeMessage($code, $fskey, $langTag);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| code | Number | YES | 状态码 |
| fskey | String | NO | 关联插件 fskey，留空则为 Fresns |
| langTag | String | NO | 语言标签，可不传，不传则使用默认语言 |

## 获取账号或用户登录错误次数

```php
ConfigUtility::getLoginErrorCount($accountId, $userId);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| accountId | Number | YES | `accounts->id` |
| userId | Number | NO | `users->id` |

*输出近 1 小时内登录错误次数*

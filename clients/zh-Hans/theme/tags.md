# 模板标签

## 路由

```php
fs_route(route('路由名'))

fs_route(route('fresns.user.index'))
```

- `route` 系统中实际的路由
- `fs_route` 处理路由为多语言路由

## 辅助功能

```php
fs_helpers('辅助函数', '可用方法', $data, $options)

fs_helpers('Arr', 'get', $data, $options)
```

::: details 获取指定数值 `Arr::get`
从数组中，获取指定键名为指定键值的数组

- 辅助函数: `Arr`
- 可用方法: `get`
- 数组数据: `$data`
- 功能选项: `$options`
    - `key` 数组列表键名
    - `values` 符合条件的键值，单个字符串或者多个数组
    - `asArray` 布尔值，结果仅剩一条时，是否保持为数组格式
:::

::: details 移除指定数值 `Arr::forget`
从数组中，移除指定键名为指定键值的数组

- 辅助函数: `Arr`
- 可用方法: `forget`
- 数组数据: `$data`
- 功能选项: `$options`
    - `key` 数组列表键名
    - `values` 符合条件的键值，单个字符串或者多个数组
    - `asArray` 布尔值，结果仅剩一条时，是否保持为数组格式
:::

::: details 返回并清理指定值 `Arr::pull`
从数组中返回指定键的值并删除此键值对

- 辅助函数: `Arr`
- 可用方法: `pull`
- 数组数据: `$data`
- 功能选项: `$options`
    - `key` 数组列表键名
    - `values` 符合条件的键值，单个字符串或者多个数组
    - `asArray` 布尔值，结果仅剩一条时，是否保持为数组格式
:::

## 主题信息

```php
fs_theme('fskey')
```

- `fskey`
- `version`
- `lang`
- `assets`

## 配置值

从 API [全局配置信息](../reference/configs.md)获取配置值

```php
fs_config('配置键名')
```

## 语言配置

- [语言包信息](../reference/language-pack.md)
- 配置位置 `控制面板 > 客户端 > 语言包配置`

```php
fs_lang('语言键名')
```

## 频道扩展

- [频道扩展信息](../api/global/channels.md)

```php
fs_channels()
```

## 表情

- [表情列表](../api/global/stickers.md)

```php
fs_stickers()
```

## 内容类型

- [内容类型列表信息](../api/global/content-types.md)

```php
fs_content_types('post') // post or comment
```

## 内容数据

### 树小组

```php
fs_group_tree()
```

### 内容列表

```php
fs_content_list('频道', '类型')
```

- 频道
    - `user`
    - `group`
    - `hashtag`
    - `geotag`
    - `post`
    - `comment`
- 类型
    - `home`
    - `list`

### 置顶帖子

```php
# 全局置顶
fs_sticky_posts()

# 指定小组的置顶
fs_sticky_posts($gid)
```

### 置顶评论

```php
fs_sticky_comments($pid)
```

## 账号和用户参数

```php
# 是否登录账号
fs_account()->check()
fs_account()->guest()

# 是否登录用户
fs_user()->check()
fs_user()->guest()
```

```php
# 账号参数
fs_account('参数名') // 支持「点表示法」表示多维数组

# 用户参数
fs_user('参数名') // 支持「点表示法」表示多维数组

# 用户概览参数
fs_user_overview('key') // 支持「点表示法」表示多维数组
```

- 参数名来自 API `data` 参数。
- [账号 API](../api/account/detail.md)
- [用户 API](../api/user/detail.md)
- [用户概览 API](../api/user/overview.md)

## 客户端判断

参考: [https://github.com/hisorange/browser-detect](https://github.com/hisorange/browser-detect)

```blade
@mobile
    <p>This is the MOBILE template!</p>
    @include('your-mobile-template')
@endmobile

@tablet
    <p>This is the TABLET template!</p>
    <link rel="stylesheet" href="tablet.css" title="Reduce the page size, load what the user need">
@endtablet

@desktop
    <p>This is the DESKTOP template!</p>
@enddesktop

<!-- Every result key is supported -->
@browser('isBot')
    <p>Bots are identified too :)</p>
@endbrowser
```

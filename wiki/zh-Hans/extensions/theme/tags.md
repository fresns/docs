# 模板标签

## 路由

```php
{{ fs_route(route('路由名')) }}

{{ fs_route(route('fresns.user.index')) }}
```

- `route` 系统中实际的路由
- `fs_route` 处理路由为多语言路由

## 配置值

### 接口配置

从 API [全局配置信息](../../api/global/configs.md)获取配置值

```php
{{ fs_api_config('配置键名') }}
```

### 数据库配置

从本地数据库 [configs](../../database/systems/configs.md) 表获取配置值

```php
{{ fs_db_config('配置键名') }}
```

## 语言配置

- [语言包信息](../../database/dictionary/language-pack.md)
- 配置位置 `控制面板 > 客户端 > 语言包配置`

```php
{{ fs_lang('语言键名') }}
```

## 账号和用户参数

```php
# 是否登录账号
fs_account()->check()

# 是否登录用户
fs_user()->check()
```

```php
# 账号参数
fs_account()->get('参数名')

# 用户参数
fs_user()->get('参数名')
```

- 参数名来自 API `data` 参数。
- [账号 API](../../api/account/detail.md)
- [用户 API](../../api/user/detail.md)

## 用户面板数据

```php
$userPanel['参数名']['参数名']
```

- 参数来自[用户面板](../../api/user/panel.md)接口 `data`

## 客户端判断

```html
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

## 列表和详情页

参数名详见对应接口的 API 数据和[通用数据结构](../../api/data-structure.md)。

# Template Tags

## Route

```php
{{ fs_route(route('route name')) }}

{{ fs_route(route('fresns.user.index')) }}
```

- `route` Real routing in the system
- `fs_route` Handling route as multilingual route

## Config Items

### Get API values

Get configuration values from API [global configuration information](../../api/global/configs.md)

```php
{{ fs_api_config('item_key') }}
```

### Get database values

Get configuration values from the database [configs](../../database/systems/configs.md) table

```php
{{ fs_db_config('item_key') }}
```

## Language Packs

- [Language Pack Information](../../database/dictionary/language-pack.md)
- Configuration Path `Panel > Clients > Language Packs`

```php
{{ fs_lang('KeyName') }}
```

- [Code Message](../../api/error-code.md)
- Configuration Path `Panel > Clients > Code Messages`

```php
{{ fs_code_message('code') }}
```

## Account and User

```php
# Is the account logged in
fs_account()->check()

# Is the user logged in
fs_user()->check()
```

```php
# Account Parameter
fs_account()->get('key')

# User Parameter
fs_user()->get('key')
```

- The parameter key comes from the API `data` parameter.
- [Account Detail API](../../api/account/detail.md)
- [User Detail API](../../api/user/detail.md)

## User Panel

```php
$userPanel['key']['key']
```

From [the user panel](../../api/user/panel.md) interface `data` parameters

## Client Options

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

## List and Detail

The parameter names are detailed in the API data and [common data structures](../../api/data-structure.md) of the corresponding interfaces.
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
fs_account()->guest()

# Is the user logged in
fs_user()->check()
fs_user()->guest()
```

```php
# Account Parameter
fs_account('key')

# User Parameter
fs_user('key')
```

- The parameter key comes from the API `data` parameter.
- [Account Detail API](../../api/account/detail.md)
- [User Detail API](../../api/user/detail.md)

## Global Data

### User Panel

```php
fs_user_panel('key')
// or
fs_user_panel('key.key')
```

From [the user panel](../../api/user/panel.md) interface `data` parameters

### Groups

```php
fs_groups() // All
fs_groups('categories') // Group categories
fs_groups('tree') // Tree all group
```

### Home List

```php
fs_index_list() // All
fs_index_list('users') // User home list
fs_index_list('groups') // Group home list
fs_index_list('hashtags') // Hashtag home list
fs_index_list('posts') // Post home list
fs_index_list('comments') // Comment home list
```

The above wrapper function only gets the first page content, if you need to turn the page, then use the following interface.

```php
// 1.Route method
route('fresns.api.index.list', [$type => 'users', 'page' => 2]) // User home list
route('fresns.api.index.list', [$type => 'groups', 'page' => 2]) // Group home list
route('fresns.api.index.list', [$type => 'hashtags', 'page' => 2]) // Hashtag home list
route('fresns.api.index.list', [$type => 'posts', 'page' => 2]) // Post home list
route('fresns.api.index.list', [$type => 'comments', 'page' => 2]) // Comment home list

// 2.Path method
/api/engine/index-list/users?page=2
/api/engine/index-list/groups?page=2
/api/engine/index-list/hashtags?page=2
/api/engine/index-list/posts?page=2
/api/engine/index-list/comments?page=2
```

### List

```php
fs_list() // All
fs_list('users') // User list
fs_list('groups') // Group list
fs_list('hashtags') // Hashtag list
fs_list('posts') // Post list
fs_list('comments') // Comment list
```

The above wrapper function only gets the first page content, if you need to turn the page, then use the following interface.

```php
// 1.Route method
route('fresns.api.list', [$type => 'users', 'page' => 2]) // User list
route('fresns.api.list', [$type => 'groups', 'page' => 2]) // Group list
route('fresns.api.list', [$type => 'hashtags', 'page' => 2]) // Hashtag list
route('fresns.api.list', [$type => 'posts', 'page' => 2]) // Post list
route('fresns.api.list', [$type => 'comments', 'page' => 2]) // Comment list

// 2.Path method
/api/engine/list/users?page=2
/api/engine/list/groups?page=2
/api/engine/list/hashtags?page=2
/api/engine/list/posts?page=2
/api/engine/list/comments?page=2
```

### Sticky Post List

```php
# Global Sticky
fs_sticky_posts()

# Sticky of the group
fs_sticky_posts($gid)
```

### Sticky Comment List

```php
fs_sticky_comments($pid)
```

### Content Types

```php
fs_content_types($type) // post or comment
```

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
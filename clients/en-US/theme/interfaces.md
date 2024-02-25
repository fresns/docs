# Theme Interfaces

## Extensions Access Token

| Method | Endpoint Path | Route Name | Description |
| --- | --- | --- | --- |
| `GET` | /api/theme/access-token | fresns.api.access-token | [Get Access Token](../reference/callback/access-token.md) |

## Fresns API

| Method | Endpoint Path | Route Name |
| --- | --- | --- | 
| `GET` | /api/theme/actions/`{path}` | fresns.api.get |
| `POST` | /api/theme/actions/`{path}` | fresns.api.post |
| `PUT` | /api/theme/actions/`{path}` | fresns.api.put |
| `PATCH` | /api/theme/actions/`{path}` | fresns.api.patch |
| `DELETE` | /api/theme/actions/`{path}` | fresns.api.delete |

```php
route('fresns.api.get', [
    'path' => '',
])
```

- `path` value is the [API Endpoint Path](../api/index.md)
- These `GET` request interfaces are not supported.:
    - `/api/fresns/v1/common/ip-info`
    - `/api/fresns/v1/group/{gid}/interaction/{type}`
    - `/api/fresns/v1/user/*`
    - `/api/fresns/v1/hashtag/*`
    - `/api/fresns/v1/geotag/*`
    - `/api/fresns/v1/post/*`
    - `/api/fresns/v1/comment/*`
    - `/api/fresns/v1/search/*`

# 主题接口

## 扩展访问令牌

| 请求方式 | 接口路径 | 路由名 | 介绍 |
| --- | --- | --- | --- |
| `POST` | /api/theme/access-token | fresns.api.access-token | [生成扩展访问令牌](../reference/callback/access-token.md) |

## Fresns API

| 请求方式 | 接口路径 | 路由名 | 介绍 |
| --- | --- | --- | --- |
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

- `path` 值为 [API 接口路径](../api/index.md)
- 以下 `GET` 请求接口不支持:
    - `/api/fresns/v1/common/ip-info`
    - `/api/fresns/v1/group/{gid}/interaction/{type}`
    - `/api/fresns/v1/user/*`
    - `/api/fresns/v1/hashtag/*`
    - `/api/fresns/v1/geotag/*`
    - `/api/fresns/v1/post/*`
    - `/api/fresns/v1/comment/*`
    - `/api/fresns/v1/search/*`

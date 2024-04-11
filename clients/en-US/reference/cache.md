# Cache

- [Global Configs](configs.md)
- [Language Pack](language-pack.md)

The basic information from these clients can be used on any page. To prevent frequent API requests from slowing down the load speed, we recommend implementing caching on the client side.

> We also recommend caching the currently logged in account and user profile for, say, 1 minute to avoid frequent requests to the UI. When the user performs an interactive function, such as liking, posting, changing the profile, etc., it can be cached again.

## Cache Time

`/api/fresns/v1/global/configs?keys=cache_datetime,cache_minutes`

- `cache_datetime` Datetime of last server-side configuration.
- `cache_minutes` Recommend that the client caches be saved for a maximum number of minutes, with a value of `null` indicating no limit. If there is no limit, it is suggested to periodically request the interface and only obtain the `cache_datetime,cache_minutes` configuration, compare the validity period with that of the local one. If they are inconsistent, it means that the server has updated the configuration, so please re-cache it.

# Cache

- [Error Codes](error-codes.md)
- [Language Pack](language-pack.md)
- [Global Configs](configs.md)

The foundational information of these three clients might be utilized on every page. To prevent frequent API requests from slowing down the loading speed, we recommend implementing caching on the client side.

> Similarly, caching is advised for the currently logged-in account and user profiles, perhaps with a duration of one minute. This strategy can help avoid excessive requests to the user information interface. Following user interactions, such as like, publish, or modify profiles, the user data should be retrieved and cached anew.

## Cache Time

`/api/fresns/v1/global/configs?keys=cache_datetime,cache_minutes`

- `cache_datetime` Datetime of last server-side configuration.
- `cache_minutes` Recommend that the client caches be saved for a maximum number of minutes, with a value of `null` indicating no limit. If there is no limit, it is suggested to periodically request the interface and only obtain the `cache_datetime,cache_minutes` configuration, compare the validity period with that of the local one. If they are inconsistent, it means that the server has updated the configuration, so please re-cache it.

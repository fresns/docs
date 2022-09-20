# Make URL Sign

The URL signature parameter is the complete [API Headers](../../api/headers.md) information, and the `sign` parameter of Headers is consistent with the API generation rules.

## URL Sign Data

```json
{
    "platformId": 4,
    "version": "2.0.0",
    "appId": "TDh15qYay3x0sARo",
    "timestamp": 1656653400000,
    "sign": "d5db4371a0c2d7e17009dea8d53ecf15a7ec07b9", // Signature generation rules are consistent with api headers
    "langTag": "zh-Hans", // You can leave it blank or pass no parameters
    "timezone": "+8", // You can leave it blank or pass no parameters
    "aid": "6a3bb3bc",
    "uid": 782622, // You can leave it blank or pass no parameters. No means logged in as an account
    "token": "6a3bb3bcdd4b75b1f852a0ef",
    "deviceInfo": {}
}
```

## URL Sign Values

1. Compressing sign data
```json
{"platformId":4,"version":"1.0.0","appId":"qe12345","timestamp":1626426833,"sign":"d5db4371a0c2d7e17009dea8d53ecf15a7ec07b9","langTag":"zh-Hans","timezone":"+8","aid":"6a3bb3bc","uid":782622,"token":"6a3bb3bcdd4b75b1f852a0ef","deviceInfo":""}
```

2. Encode the compressed data in Base64
```
eyJwbGF0Zm9ybUlkIjo0LCJ2ZXJzaW9uIjoiMS4wLjAiLCJhcHBJZCI6InFlMTIzNDUiLCJ0aW1lc3RhbXAiOjE2MjY0MjY4MzMsInNpZ24iOiJkNWRiNDM3MWEwYzJkN2UxNzAwOWRlYThkNTNlY2YxNWE3ZWMwN2I5IiwibGFuZ1RhZyI6InpoLUhhbnMiLCJ0aW1lem9uZSI6Iis4IiwiYWlkIjoiNmEzYmIzYmMiLCJ1aWQiOjc4MjYyMiwidG9rZW4iOiI2YTNiYjNiY2RkNGI3NWIxZjg1MmEwZWYiLCJkZXZpY2VJbmZvIjoiIn0=
```

3. Base64-encoded data is then encoded as a URL
```
eyJwbGF0Zm9ybUlkIjo0LCJ2ZXJzaW9uIjoiMS4wLjAiLCJhcHBJZCI6InFlMTIzNDUiLCJ0aW1lc3RhbXAiOjE2MjY0MjY4MzMsInNpZ24iOiJkNWRiNDM3MWEwYzJkN2UxNzAwOWRlYThkNTNlY2YxNWE3ZWMwN2I5IiwibGFuZ1RhZyI6InpoLUhhbnMiLCJ0aW1lem9uZSI6Iis4IiwiYWlkIjoiNmEzYmIzYmMiLCJ1aWQiOjc4MjYyMiwidG9rZW4iOiI2YTNiYjNiY2RkNGI3NWIxZjg1MmEwZWYiLCJkZXZpY2VJbmZvIjoiIn0%3D
```

The value after Base64 and URL encoding is the plugin URL sign value.

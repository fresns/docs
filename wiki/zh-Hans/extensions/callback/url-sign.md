# 生成路径签名

URL 路径签名参数是完整的 [API Headers](../../api/headers.md) 信息，其中 Headers 的 `sign` 参数同 API 的生成规则一致。

## URL 签名数据

```json
{
    "platformId": 4,
    "version": "2.0.0",
    "appId": "TDh15qYay3x0sARo",
    "timestamp": 1656653400000,
    "sign": "d5db4371a0c2d7e17009dea8d53ecf15a7ec07b9", // 签名生成规则与 headers 一致
    "langTag": "zh-Hans", // 可留空或不传
    "timezone": "+8", // 可留空或不传
    "aid": "6a3bb3bc",  //可留空或不传，没有则表示未登录
    "aidToken": "uoX1hk6SHUgB2MFGJwNx38dem9DA7Vsz",
    "uid": 782622,  //可留空或不传，没有则表示未登录
    "uidToken": "PqBpwPLJgfd1sH0X5JffYFGxTSc8RW7c",
    "deviceInfo": {}
}
```

## URL 签名值

1、将签名数据压缩
```json
{"platformId":4,"version":"1.0.0","appId":"qe12345","timestamp":1626426833,"sign":"d5db4371a0c2d7e17009dea8d53ecf15a7ec07b9","langTag":"zh-Hans","timezone":"+8","aid":"6a3bb3bc","aidToken": "uoX1hk6SHUgB2MFGJwNx38dem9DA7Vsz","uid":782622,"uidToken": "PqBpwPLJgfd1sH0X5JffYFGxTSc8RW7c","deviceInfo":""}
```

2、将压缩后的数据以 Base64 编码
```
eyJwbGF0Zm9ybUlkIjo0LCJ2ZXJzaW9uIjoiMS4wLjAiLCJhcHBJZCI6InFlMTIzNDUiLCJ0aW1lc3RhbXAiOjE2MjY0MjY4MzMsInNpZ24iOiJkNWRiNDM3MWEwYzJkN2UxNzAwOWRlYThkNTNlY2YxNWE3ZWMwN2I5IiwibGFuZ1RhZyI6InpoLUhhbnMiLCJ0aW1lem9uZSI6Iis4IiwiYWlkIjoiNmEzYmIzYmMiLCJhaWRUb2tlbiI6ICJ1b1gxaGs2U0hVZ0IyTUZHSndOeDM4ZGVtOURBN1ZzeiIsInVpZCI6NzgyNjIyLCJ1aWRUb2tlbiI6ICJQcUJwd1BMSmdmZDFzSDBYNUpmZllGR3hUU2M4Ulc3YyIsImRldmljZUluZm8iOiIifQ==
```

3、将 Base64 编码后的数据再以 URL 编码
```
eyJwbGF0Zm9ybUlkIjo0LCJ2ZXJzaW9uIjoiMS4wLjAiLCJhcHBJZCI6InFlMTIzNDUiLCJ0aW1lc3RhbXAiOjE2MjY0MjY4MzMsInNpZ24iOiJkNWRiNDM3MWEwYzJkN2UxNzAwOWRlYThkNTNlY2YxNWE3ZWMwN2I5IiwibGFuZ1RhZyI6InpoLUhhbnMiLCJ0aW1lem9uZSI6Iis4IiwiYWlkIjoiNmEzYmIzYmMiLCJhaWRUb2tlbiI6ICJ1b1gxaGs2U0hVZ0IyTUZHSndOeDM4ZGVtOURBN1ZzeiIsInVpZCI6NzgyNjIyLCJ1aWRUb2tlbiI6ICJQcUJwd1BMSmdmZDFzSDBYNUpmZllGR3hUU2M4Ulc3YyIsImRldmljZUluZm8iOiIifQ%3D%3D
```

经过 Base64 和 URL 编码后的值，便是插件 URL 签名值。

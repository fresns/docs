# 生成访问令牌

URL 路径访问令牌参数是完整的 [API Headers](../../reference/headers.md) 信息，其中 Headers 的 `X-Fresns-Signature` 参数同 API 的生成规则一致。

## 访问令牌数据

```json
{
    "X-Fresns-Sid": "",
    "X-Fresns-App-Id": "yh1OJ7WL",
    "X-Fresns-Client-Platform-Id": 2,
    "X-Fresns-Client-Version": "2.0.0",
    "X-Fresns-Client-Device-Info": "", // 先压缩 Object 信息并转换为字符串，再将字符串以 Base64 编码
    "X-Fresns-Client-Lang-Tag": "zh-Hans", // 可留空或不传
    "X-Fresns-Client-Timezone": "+8", // 可留空或不传
    "X-Fresns-Client-Content-Format": null, // 可留空或不传
    "X-Fresns-Aid": "wIfu6jaF",
    "X-Fresns-Aid-Token": "uoX1hk6SHUgB2MFGJwNx38dem9DA7Vsz",
    "X-Fresns-Uid": 782622,
    "X-Fresns-Uid-Token": "PqBpwPLJgfd1sH0X5JffYFGxTSc8RW7c",
    "X-Fresns-Signature": "a2bda6bb6f21a3d41c78630401de2c17a2bda6bb6f21a3d41c78630401de2c17", // 签名生成规则与 headers 一致
    "X-Fresns-Signature-Timestamp": 1674161913192
}
```

## 访问令牌值

1、将凭证数据压缩并转为字符串
```json
{"X-Fresns-Sid":"","X-Fresns-App-Id":"yh1OJ7WL","X-Fresns-Client-Platform-Id":2,"X-Fresns-Client-Version":"2.0.0","X-Fresns-Client-Device-Info":"","X-Fresns-Client-Lang-Tag":"zh-Hans","X-Fresns-Client-Timezone":"+8","X-Fresns-Client-Content-Format":null,"X-Fresns-Aid":"wIfu6jaF","X-Fresns-Aid-Token":"uoX1hk6SHUgB2MFGJwNx38dem9DA7Vsz","X-Fresns-Uid":782622,"X-Fresns-Uid-Token":"PqBpwPLJgfd1sH0X5JffYFGxTSc8RW7c","X-Fresns-Signature":"a2bda6bb6f21a3d41c78630401de2c17a2bda6bb6f21a3d41c78630401de2c17","X-Fresns-Signature-Timestamp":1674161913192}
```

2、将字符串数据以 Base64 编码
```
eyJYLUZyZXNucy1TaWQiOiIiLCJYLUZyZXNucy1BcHAtSWQiOiJ5aDFPSjdXTCIsIlgtRnJlc25zLUNsaWVudC1QbGF0Zm9ybS1JZCI6MiwiWC1GcmVzbnMtQ2xpZW50LVZlcnNpb24iOiIyLjAuMCIsIlgtRnJlc25zLUNsaWVudC1EZXZpY2UtSW5mbyI6IiIsIlgtRnJlc25zLUNsaWVudC1MYW5nLVRhZyI6InpoLUhhbnMiLCJYLUZyZXNucy1DbGllbnQtVGltZXpvbmUiOiIrOCIsIlgtRnJlc25zLUNsaWVudC1Db250ZW50LUZvcm1hdCI6bnVsbCwiWC1GcmVzbnMtQWlkIjoid0lmdTZqYUYiLCJYLUZyZXNucy1BaWQtVG9rZW4iOiJ1b1gxaGs2U0hVZ0IyTUZHSndOeDM4ZGVtOURBN1ZzeiIsIlgtRnJlc25zLVVpZCI6NzgyNjIyLCJYLUZyZXNucy1VaWQtVG9rZW4iOiJQcUJwd1BMSmdmZDFzSDBYNUpmZllGR3hUU2M4Ulc3YyIsIlgtRnJlc25zLVNpZ25hdHVyZSI6ImEyYmRhNmJiNmYyMWEzZDQxYzc4NjMwNDAxZGUyYzE3YTJiZGE2YmI2ZjIxYTNkNDFjNzg2MzA0MDFkZTJjMTciLCJYLUZyZXNucy1TaWduYXR1cmUtVGltZXN0YW1wIjoxNjc0MTYxOTEzMTkyfQ==
```

3、将 Base64 编码后的数据再以 URL 编码
```
eyJYLUZyZXNucy1TaWQiOiIiLCJYLUZyZXNucy1BcHAtSWQiOiJ5aDFPSjdXTCIsIlgtRnJlc25zLUNsaWVudC1QbGF0Zm9ybS1JZCI6MiwiWC1GcmVzbnMtQ2xpZW50LVZlcnNpb24iOiIyLjAuMCIsIlgtRnJlc25zLUNsaWVudC1EZXZpY2UtSW5mbyI6IiIsIlgtRnJlc25zLUNsaWVudC1MYW5nLVRhZyI6InpoLUhhbnMiLCJYLUZyZXNucy1DbGllbnQtVGltZXpvbmUiOiIrOCIsIlgtRnJlc25zLUNsaWVudC1Db250ZW50LUZvcm1hdCI6bnVsbCwiWC1GcmVzbnMtQWlkIjoid0lmdTZqYUYiLCJYLUZyZXNucy1BaWQtVG9rZW4iOiJ1b1gxaGs2U0hVZ0IyTUZHSndOeDM4ZGVtOURBN1ZzeiIsIlgtRnJlc25zLVVpZCI6NzgyNjIyLCJYLUZyZXNucy1VaWQtVG9rZW4iOiJQcUJwd1BMSmdmZDFzSDBYNUpmZllGR3hUU2M4Ulc3YyIsIlgtRnJlc25zLVNpZ25hdHVyZSI6ImEyYmRhNmJiNmYyMWEzZDQxYzc4NjMwNDAxZGUyYzE3YTJiZGE2YmI2ZjIxYTNkNDFjNzg2MzA0MDFkZTJjMTciLCJYLUZyZXNucy1TaWduYXR1cmUtVGltZXN0YW1wIjoxNjc0MTYxOTEzMTkyfQ%3D%3D
```

经过 Base64 和 URL 编码后的值，便是云应用或扩展插件的访问令牌。

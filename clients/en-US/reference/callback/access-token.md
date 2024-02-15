# Make Access Token

The URL Authorization parameter is the complete [API Headers](../../reference/headers.md) information, and the `X-Fresns-Signature` parameter of Headers is consistent with the API generation rules.

## URL Authorization Data

```json
{
    "X-Fresns-App-Id": "yh1OJ7WL",
    "X-Fresns-Client-Platform-Id": 2,
    "X-Fresns-Client-Version": "2.0.0",
    "X-Fresns-Client-Device-Info": "", // The object information is first compressed and converted to a string, which is then Base64 encoded.
    "X-Fresns-Client-Lang-Tag": "zh-Hans", // You can leave it blank or pass no parameters
    "X-Fresns-Client-Timezone": "+8", // You can leave it blank or pass no parameters
    "X-Fresns-Client-Content-Format": null, // You can leave it blank or pass no parameters
    "X-Fresns-Aid": "wIfu6jaF",
    "X-Fresns-Aid-Token": "uoX1hk6SHUgB2MFGJwNx38dem9DA7Vsz",
    "X-Fresns-Uid": 782622,
    "X-Fresns-Uid-Token": "PqBpwPLJgfd1sH0X5JffYFGxTSc8RW7c",
    "X-Fresns-Signature": "a2bda6bb6f21a3d41c78630401de2c17", // Signature generation rules are consistent with api headers
    "X-Fresns-Signature-Timestamp": 1674161913192
}
```

## URL Authorization Values

1. Compress and convert authorization data to strings
```json
{"X-Fresns-App-Id":"yh1OJ7WL","X-Fresns-Client-Platform-Id":2,"X-Fresns-Client-Version":"2.0.0","X-Fresns-Client-Device-Info":"","X-Fresns-Client-Lang-Tag":"zh-Hans","X-Fresns-Client-Timezone":"+8","X-Fresns-Client-Content-Format":null,"X-Fresns-Aid":"wIfu6jaF","X-Fresns-Aid-Token":"uoX1hk6SHUgB2MFGJwNx38dem9DA7Vsz","X-Fresns-Uid":782622,"X-Fresns-Uid-Token":"PqBpwPLJgfd1sH0X5JffYFGxTSc8RW7c","X-Fresns-Signature":"a2bda6bb6f21a3d41c78630401de2c17","X-Fresns-Signature-Timestamp":1674161913192}
```

2. Base64 encoding of string data
```
eyJYLUZyZXNucy1BcHAtSWQiOiJ5aDFPSjdXTCIsIlgtRnJlc25zLUNsaWVudC1QbGF0Zm9ybS1JZCI6MiwiWC1GcmVzbnMtQ2xpZW50LVZlcnNpb24iOiIyLjAuMCIsIlgtRnJlc25zLUNsaWVudC1EZXZpY2UtSW5mbyI6IiIsIlgtRnJlc25zLUNsaWVudC1MYW5nLVRhZyI6InpoLUhhbnMiLCJYLUZyZXNucy1DbGllbnQtVGltZXpvbmUiOiIrOCIsIlgtRnJlc25zLUNsaWVudC1Db250ZW50LUZvcm1hdCI6bnVsbCwiWC1GcmVzbnMtQWlkIjoid0lmdTZqYUYiLCJYLUZyZXNucy1BaWQtVG9rZW4iOiJ1b1gxaGs2U0hVZ0IyTUZHSndOeDM4ZGVtOURBN1ZzeiIsIlgtRnJlc25zLVVpZCI6NzgyNjIyLCJYLUZyZXNucy1VaWQtVG9rZW4iOiJQcUJwd1BMSmdmZDFzSDBYNUpmZllGR3hUU2M4Ulc3YyIsIlgtRnJlc25zLVNpZ25hdHVyZSI6ImEyYmRhNmJiNmYyMWEzZDQxYzc4NjMwNDAxZGUyYzE3IiwiWC1GcmVzbnMtU2lnbmF0dXJlLVRpbWVzdGFtcCI6MTY3NDE2MTkxMzE5Mn0=
```

3. Base64-encoded data is then encoded as a URL
```
eyJYLUZyZXNucy1BcHAtSWQiOiJ5aDFPSjdXTCIsIlgtRnJlc25zLUNsaWVudC1QbGF0Zm9ybS1JZCI6MiwiWC1GcmVzbnMtQ2xpZW50LVZlcnNpb24iOiIyLjAuMCIsIlgtRnJlc25zLUNsaWVudC1EZXZpY2UtSW5mbyI6IiIsIlgtRnJlc25zLUNsaWVudC1MYW5nLVRhZyI6InpoLUhhbnMiLCJYLUZyZXNucy1DbGllbnQtVGltZXpvbmUiOiIrOCIsIlgtRnJlc25zLUNsaWVudC1Db250ZW50LUZvcm1hdCI6bnVsbCwiWC1GcmVzbnMtQWlkIjoid0lmdTZqYUYiLCJYLUZyZXNucy1BaWQtVG9rZW4iOiJ1b1gxaGs2U0hVZ0IyTUZHSndOeDM4ZGVtOURBN1ZzeiIsIlgtRnJlc25zLVVpZCI6NzgyNjIyLCJYLUZyZXNucy1VaWQtVG9rZW4iOiJQcUJwd1BMSmdmZDFzSDBYNUpmZllGR3hUU2M4Ulc3YyIsIlgtRnJlc25zLVNpZ25hdHVyZSI6ImEyYmRhNmJiNmYyMWEzZDQxYzc4NjMwNDAxZGUyYzE3IiwiWC1GcmVzbnMtU2lnbmF0dXJlLVRpbWVzdGFtcCI6MTY3NDE2MTkxMzE5Mn0%3D
```

The value after Base64 and URL encoding is the plugin URL Authorization value.

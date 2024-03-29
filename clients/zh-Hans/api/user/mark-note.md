# 更新标记备注

- 接口地址：`/api/fresns/v1/user/mark-note`
- 请求方式：`PATCH`
- 传参方式：`application/json`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |
| X-Fresns-Uid | YES | YES |
| X-Fresns-Uid-Token | YES | YES |

## Body 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | String | YES | 标记类型 `user`,`group`,`hashtag`,`geotag`,`post`,`comment` |
| fsid | Number / String | YES | 目标 `FsID`<br>user 传参 uid 或 username<br>group 传参 gid<br>hashtag 传参 htid<br>geotag 传参 gtid<br>post 传参 pid<br>comment 传参 cid |
| note | String | NO | 备注内容，仅对 `follow` 或 `block` 有效 |

**接口使用说明**

- 对自己关注或屏蔽的对象进行备注。

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```

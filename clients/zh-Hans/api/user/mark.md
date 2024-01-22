# 操作标记

- 接口地址：`/api/fresns/v1/user/mark`
- 请求方式：`POST`
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
| markType | String | YES | 标记行为 `like`,`dislike`,`follow`,`block` |
| type | String | YES | 标记类型 `user`,`group`,`hashtag`,`geotag`,`post`,`comment` |
| fsid | Number / String | YES | 目标 `FsID`<br>user 传参 uid 或 username<br>group 传参 gid<br>hashtag 传参 htid<br>geotag 传参 gtid<br>post 传参 pid<br>comment 传参 cid |
| note | String | NO | 备注内容，仅对 `follow` 或 `block` 有效 |

**接口使用说明**

- 标记的新建（创建）和取消（删除）使用同一个接口和同样参数，未标记时为新建，已标记时为取消。
- 是否有权操作，配置入口 `运营 > 互动配置 > 互动行为设置`，配置值在对应内容接口 `interaction` 参数中。
- 操作小组关注标记时，如果小组参数 `followType = 2` 时，不能通过该接口建立关注（由关联插件接管）。
- `like` 和 `dislike` 为互斥行为，如果已经 `like` 再操作 `dislike` 则将 `like` 取消并建立新的 `dislike`，反之亦然。
- `follow` 和 `block` 为互斥行为，如果已经 `follow` 再操作 `block` 则将 `follow` 取消并建立新的 `block`，反之亦然。
- 无法对自己操作 `follow` 和 `block` 标记。

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```

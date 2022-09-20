# 输入提示信息

- 接口地址：`/api/v2/common/input-tips`
- 请求方式：`GET`
- 传参方式：`Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| aid | NO | YES |
| uid | NO | YES |
| token | NO | YES |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | String | YES | 选其一 `user`,`group`,`hashtag`,`post`,`extend` |
| key | String | YES | 关键词 |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": [
        {
            "fsid": "String / 简写 id 或者 slug",
            "name": "String / 名称",
            "image": "String / 图片链接",
            "nickname": "String / type=user 专用，昵称",
            "followStatus": "Boolean / type=user 专用，关注状态",
        }
    ]
}
```

::: details 开发说明
- 多语言字段只查询当前语言，如果当前未定义语言则查询默认语言。
- 优先展示已关注的用户、小组、话题、帖子。
- 优先展示我创建的扩展内容。

| 参数名 | 用户名-关联字段 | 小组名-关联字段 | 话题名-关联字段 | 帖子标题-关联字段 | 扩展内容标题-关联字段 |
| --- | --- | --- | --- | --- | --- |
| fsid | users > uid | groups > gid | hashtags > slug | posts > pid | extends > eid |
| name | users > username | languages > lang_content | hashtags > name | posts > title | languages > lang_content |
| nickname | users > nickname |  |  |  |  |
| followStatus | user_follows > follow_type=1 | user_follows > follow_type=2 | user_follows > follow_type=3 | user_follows > follow_type=4 |  |
| image | users > avatar_file_url | groups > cover_file_url | hashtags > cover_file_url |  | extends > cover_file_url |
:::
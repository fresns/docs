# 提交发表（或审核）

- 接口地址：`/api/v2/editor/{type}/{draftId}`
- 请求方式：`POST`
- 传参方式：`Rest`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| aid | YES | YES |
| aidToken | YES | YES |
| uid | YES | YES |
| uidToken | YES | YES |

## Rest 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | String | YES | `post` 或 `comment` |
| draftId | Number | YES | 草稿 ID |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": null
}
```

::: details 开发说明
- 1、判断日志表 `state` 字段，值为 `1` 或 `4` 的时候才可以提交。
- 2、内容合规检测
    - 内容不能为空，并且长度不超限制，不含禁用词。
    - 如果有标题，则判断是否超出长度限制，是否有禁用词。
- 3、判断是否有发表权限 `ConfigUtility::getPublishConfigByType()['perm']['publish']`
- 4、判断是否特殊条件。
    - 日期时间限制 `ConfigUtility::getPublishConfigByType()['limit']['type'] == 1`
    - 时间段限制 `ConfigUtility::getPublishConfigByType()['limit']['type'] == 2`
- 5、如果是编辑，判断是否符合可编辑条件。
- 6、小组权限判断
    - 帖子：是否选择了小组，判断小组是否存在，以及是否有发表权限。
    - 评论：判断所属帖子是否选择了小组，判断小组是否存在，以及是否有评论权限。
- 7、判断是否触发审核
    - 所属角色
    - 所属小组
    - 审核词
    - 凡是触发审核，状态码为 `38200` 内容已提交，待审核通过后才能正式发表。
    - 触发审核时，接触审核通知的命令字 `reviewNotice`
:::
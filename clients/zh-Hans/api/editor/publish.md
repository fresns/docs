# 快速发表

- 接口地址：`/api/fresns/v1/editor/{type}/publish`
- 请求方式：`POST`
- 传参方式：`multipart/form-data`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |
| X-Fresns-Uid | YES | YES |
| X-Fresns-Uid-Token | YES | YES |

## Path 变量

| 变量名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | String | YES | `post` 或 `comment` |

## Body 参数

### 发表帖子

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| quotePid | String | NO | 引用的帖子 PID |
| gid | String | NO | 小组<br>`editor.features.group.required`<br>如果配置必填，则此处传参也必填 |
| title | String | NO | 标题<br>`editor.toolbar.title.required`<br>如果配置必填，则此处传参也必填 |
| content | String | NO | 正文内容<br>内容中插入文件，格式为 `[file:{fid}]` |
| isMarkdown | Boolean | NO | 内容是否为 MD 格式 |
| isAnonymous | Boolean | NO | 是否匿名 |
| commentDisabled | Boolean | NO | 是否禁止评论 |
| commentPrivate | Boolean | NO | 是否私有评论<br>私有则仅评论作者和帖子作者可见 |
| location | String | NO | 位置信息: 压缩 Object 信息为字符串传参 |
| archives | String | NO | 扩展参数: 压缩 Array 信息为字符串传参 |
| extends | String | NO | 扩展内容: 压缩 Array 信息为字符串传参 |
| image | File | NO | 图片文件 |

### 发表评论

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| commentPid | String | YES | 评论哪个帖子 |
| commentCid | String | NO | 留空表示评论帖子<br>有值表示回复这条评论 |
| content | String | NO | 正文内容<br>内容中插入文件，格式为 `[file:{fid}]` |
| isMarkdown | Boolean | NO | 内容是否为 MD 格式 |
| isAnonymous | Boolean | NO | 是否匿名 |
| location | String | NO | 位置信息: 压缩 Object 信息为字符串传参 |
| archives | String | NO | 扩展参数: 压缩 Array 信息为字符串传参 |
| extends | String | NO | 扩展内容: 压缩 Array 信息为字符串传参 |
| image | File | NO | 图片文件 |

**接口使用说明**

- 跳过草稿逻辑，直接发表内容。发表内容不存草稿（历史）。
- 支持接口直传单个图片文件。
- `location`, `extends`, `archives` 参见[更新草稿接口](draft-update.md)

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": {
        "type": "String / post 或 comment",
        "did": "String / 草稿 ID", // 不是草稿则为 null
        "fsid": "String / 正式内容的 pid 或 cid" // 不是正式内容则为 null
    }
}
```

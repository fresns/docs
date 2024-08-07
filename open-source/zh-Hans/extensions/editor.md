# 编辑器开发

- 编辑器配置位置 `控制面板 > 运营配置 > 发布配置`

## 编辑器逻辑

### 全局权限

发表配置页设置的功能为第一优先级

> 控制面板 > 运营配置 > 发布配置

### 角色权限

角色权限为第二优先级

> 控制面板 > 运营配置 > 用户角色

### 上传权限

存储设置为第三优先级

> 控制面板 > 系统设置 > 存储设置

### 解说

- 第一层：全局配置对全员有效，当开启特定条件时，全员需要满足该条件才能发表，比如账号邮箱或手机号绑定、特殊规则等；但是白名单角色除外，配置在 `post_limit_whitelist` 和 `comment_limit_whitelist` 两个键名中。
- 第二层：当发表配置未开启条件时（或者符合发表配置的条件），再判断主角色的，如果主角色权限有开启，则该主角色的成员需要满足条件才能发表，比如发表权限、特殊规则等。
    - 第二层备注：如果主角色有过期时间，并且已经过期，则以继承角色权限为主；如果无继承角色（或者该继承 ID 找不到角色），则以配置表 `default_role` 键名键值的角色权限为准；如果配置表键值为空（或找不到角色），则当无权处理。
- 第三层：当角色权限未设置上传参数时，以系统存储设置为准，如果角色有设置，则以角色权限为准，比如是否可以上传、上传大小和时长等。


## 编辑器权限

根据上方三层逻辑的描述封装好的方法，可根据用户和类型获取发表权限。

```php
ConfigUtility::getPublishConfigByType($userId, $type, $langTag, $timezone);
```
| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| userId | Number | YES | `users->id` |
| type | String | YES | `post` 或 `comment` |
| langTag | String | NO | 语言标签，可不传，不传则使用默认语言 |
| timezone | String | NO | UTC 时区，可不传，不传则使用数据库时区 |


## 编辑器功能流程

- 1、获取配置参数 `GET` `/api/fresns/v1/editor/{type}/configs`，判断权限并渲染编辑器
    - `editor` 参数渲染编辑器
    - `publish` 参数判断发表权限
    - `editPerm` 参数判断编辑权限
- 2、请求 `GET` `/api/fresns/v1/editor/{type}/drafts` 接口，获取草稿列表
    - 2.1、草稿列表为空，自动请求 `POST` `/api/fresns/v1/editor/{type}/draft` 创建草稿
    - 2.2、有草稿，弹出选择层。
        - `选择草稿` 请求 `GET` `/api/fresns/v1/editor/{type}/draft/{did}` 加载草稿内容
        - `创建草稿` 请求 `POST` `/api/fresns/v1/editor/{type}/draft` 创建新的草稿
- 3、编辑器实时更新逻辑，使用 `PATCH` `/api/fresns/v1/editor/{type}/draft/{did}` 接口
    - 3.1、当选择了小组（或更换了小组），触发更新；
    - 3.2、当上传了图片（或者删除了图片），触发更新；
    - 3.3、当上传了视频（或者删除了视频），触发更新；
    - 3.4、当上传了音频（或者删除了音频），触发更新；
    - 3.5、当上传了文档（或者删除了文档），触发更新；
    - 3.6、当选择匿名（或取消匿名），触发更新；
    - 3.7、当回调返参获取到“位置”（或编辑器中删除位置），触发更新；
    - 3.8、当回调返参获取到“评论附带按钮配置”（或编辑器中删除评论设置），触发更新；
    - 3.9、当回调返参获取到“阅读权限配置”（或编辑器中删除阅读权限配置），触发更新；
    - 3.10、当回调返参获取到“特定成员列表配置”（或编辑器中删除特定成员列表配置），触发更新；
    - 3.11、当回调返参获取到“扩展内容”（或编辑器中删除扩展内容），触发更新；
    - 3.12、标题和内容的录入，不会主动触发更新，编辑器自己每 10 秒更新一次标题和内容。
- 4、点击「发表」
    - 4.1、如果内容触发审核，则提示用户已经提交审核（接口返回 `code=38200`），审核通过后将发表成功。
    - 4.2、一切正常，则发表成功。

## 内容规律

- **艾特**：以 @ 符号开头，空格结尾。
- **话题**：根据配置 [editor.toolbar.hashtag.format](https://docs.fresns.com/zh-hans/clients/api/editor/configs.html)，值为 1 则是 # 符号开头，空格结尾；值为 2，则是 # 符号开头，# 符号结尾，双 # 号中间可以有单个空格（不能连续空格），但是符号后面或前面不支持有空格。
- **表情符**：以 [ 符号开头，] 符号结尾，中间不能有空格。

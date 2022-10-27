# operations

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | Primary Key ID |  | NO | 自动递赠 |
| type | tinyint *UNSIGNED* | 类型 | 1 | NO | 1.自定义 / 2.互动按钮图 / 3.勋章图标 / 4.提示文案 |
| code | varchar(32) | 代码 |  | NO | 纯小写英文 |
| style | varchar(32) | 风格 |  | NO | primary / secondary / success / danger / warning / info |
| title | varchar(128) | 名称 |  | YES | **多语言**  |
| description | text | 描述 |  | YES | **多语言** |
| image_file_id | bigint *UNSIGNED* | 图片文件 ID |  | YES | 关联字段 [files->id](../systems/files.md) |
| image_file_url | varchar(255) | 图片文件 URL |  | YES |  |
| image_active_file_id | bigint *UNSIGNED* | 二态图文件 ID |  | YES | 关联字段 [files->id](../systems/files.md) |
| image_active_file_url | varchar(255) | 二态图文件 URL |  | YES |  |
| display_type | tinyint *UNSIGNED* | 展示类型 | 1 | NO | 1.基础 / 2.功能（插件） |
| plugin_unikey | varchar(64) | 关联插件 |  | NO | 关联字段 [plugins->unikey](../plugins/plugins.md)<br>哪个插件创建的，也是功能用途的插件页 |
| is_enable | tinyint *UNSIGNED* | 是否有效 | 1 | NO | 0.无效 / 1.有效 |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

## code 用途编码

- `1` 自定义 `customizes`
    - {code}
- `2` 互动按钮图 `buttonIcons`
    - `like` 点赞图标
    - `dislike` 点踩图标
    - `follow` 关注图标
    - `block` 屏蔽图标
    - `comment` 评论图标
    - `share` 分享图标
    - `more` 更多图标
- `3` 个性装饰图 `diversifyImages`
    - `title` 标题图
        - 用户: 例如「联名」「小店」「徽章」等图标或功能图标
        - 小组: 例如「开发者入驻」
        - 话题: 例如「趋势」
        - 帖子: 例如「投票」「抽奖」「商品」等标注帖子内容的图标
        - 评论: 例如「神评」「优质评价」「热评」
    - `decorate` 挂件图
        - 用户: 头像挂件
        - 小组: 封面图挂件
        - 话题: 封面图挂件
        - 帖子: 角标挂件
        - 评论: 角标挂件
    - `verified` 认证图
        - 用户: 身份认证
        - 小组: 官方认证
        - 话题: 认证话题
        - 帖子: 内容证实
        - 评论: 内容证实
    - `medal` 勋章图
        - 用户: 例如「徽章」
        - 小组:
        - 话题:
        - 帖子: 例如「专业」
        - 评论:
- `4` 提示文案 `tips`
    - `alert` 提示文本

除以上系统内置定义外，插件可自行定义，用户支持关联多个，用途编码可供客户端区分用途和显示位置。

## 接口输出示例

```json
{
    "operations": {
        "customizes": [
            {
                "code": "operations->code",
                "style": "operations->style",
                "name": "operations->name",
                "description": "operations->description",
                "imageUrl": "operations->image_file_id or image_file_url",
                "imageActiveUrl": "operations->image_active_file_id or image_active_file_url",
                "displayType": "operations->display_type",
                "pluginUrl": "operations->plugin_unikey",
            }
        ],
        "buttonIcons": [
            {
                "code": "operations->code",
                "style": "operations->style",
                "name": "operations->name",
                "description": "operations->description",
                "imageUrl": "operations->image_file_id or image_file_url",
                "imageActiveUrl": "operations->image_active_file_id or image_active_file_url",
                "displayType": "operations->display_type",
                "pluginUrl": "operations->plugin_unikey",
            }
        ],
        "diversifyImages": [
            {
                "code": "operations->code",
                "style": "operations->style",
                "name": "operations->name",
                "description": "operations->description",
                "imageUrl": "operations->image_file_id or image_file_url",
                "imageActiveUrl": "operations->image_active_file_id or image_active_file_url",
                "displayType": "operations->display_type",
                "pluginUrl": "operations->plugin_unikey",
            }
        ],
        "tips": [
            {
                "code": "operations->code",
                "style": "operations->style",
                "name": "operations->name",
                "description": "operations->description",
                "imageUrl": "operations->image_file_id or image_file_url",
                "imageActiveUrl": "operations->image_active_file_id or image_active_file_url",
                "displayType": "operations->display_type",
                "pluginUrl": "operations->plugin_unikey",
            }
        ],
    }
}
```

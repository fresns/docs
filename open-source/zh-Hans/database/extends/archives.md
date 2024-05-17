---
aside: false
---

# archives *扩展参数表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | 主键 ID |  | NO | 自动递增 |
| app_fskey | varchar(64) | 关联插件 |  | NO | 关联字段 [apps->fskey](../apps/apps.md)<br>哪个插件创建的 |
| name | json | 名称 |  | YES | **多语言** |
| description | json | 介绍 |  | YES | **多语言** |
| code | varchar(32) | 代码 |  | NO | **唯一值**，纯英文字母，不支持任何符号或空格 |
| usage_type | tinyint *UNSIGNED* | 用途类型 |  | NO | [内容类型编号](../numbered-description.md#内容类型编号) |
| usage_group_id | int *UNSIGNED* | 用途是小组内容专用时使用 | 0 | NO | 关联字段 [groups->id](../contents/groups.md)<br>配合 `post` 或 `comment` 使用 |
| form_type | varchar(16) | 表单元素 |  | NO |  |
| form_options | json | 选项类型配置值 |  | YES | **多语言**<br>数组格式，为 select,checkbox,radio 等类型提供选项值 |
| is_tree_option | tinyint *UNSIGNED* | 是否树结构选项 | 0 | NO | 0.否 / 1.是 |
| is_multiple | tinyint *UNSIGNED* | 是否多选 | 0 | NO | 0.否 / 1.是 `对 select 元素有效` |
| is_required | tinyint *UNSIGNED* | 是否必填 | 0 | NO | 0.否 / 1.是 |
| file_type | tinyint *UNSIGNED* | 文件类型 |  | YES | `form_type=file` 1.图片 / 2.视频 / 3.音频 / 4.文档 |
| input_pattern | varchar(128) | 自定义正则表达式 |  | YES |  |
| input_max | smallint *UNSIGNED* | 最大值 |  | YES |  |
| input_min | smallint *UNSIGNED* | 最小值 |  | YES |  |
| input_maxlength | smallint *UNSIGNED* | 最大长度 |  | YES |  |
| input_minlength | smallint *UNSIGNED* | 最小长度 |  | YES |  |
| sort_order | smallint *UNSIGNED* | 排列顺序 | 9 | NO | 升序排序 |
| is_enabled | tinyint *UNSIGNED* | 是否有效 | 1 | NO | 0.无效 / 1.有效<br>无效后，所有关联均无效 |
| created_at | timestamp | 创建时间 | useCurrent | NO | 比如 MySQL 默认值为 CURRENT_TIMESTAMP |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |

## form_type 字段介绍

| `form_type` | HTML Code | 描述 |
| --- | --- | --- |
| input | `<input type="text">` | 单行文本域 |
| textarea | `<textarea></textarea>` | 多行文本域 |
| select | `<select></select>` | 下拉选项 |
| radio | `<input type="radio">` | 单选按钮 |
| checkbox | `<input type="checkbox">` | 多选复选框 |
| color | `<input type="color">` | 颜色选择器 |
| time | `<input type="time">` | 时间选择器 |
| date | `<input type="date">` | 日期选择器 |
| month | `<input type="month">` | 年月选择器 |
| datetime | `<input type="datetime-local">` | 日期时间选择器 |
| number | `<input type="number">` | 数字输入框 |
| email | `<input type="email">` | 邮箱输入框 |
| url | `<input type="url">` | 网址输入框 |
| file | `<input type="file">` | 单个文件上传 |
| tags | `<input type="text">` | 标签输入框，格式 `["tag", "tag"]` |

## form_options 字段介绍

```json
{
    "语言标签": [
        {"name": "IT", "value": 1, "options": [
            {"name": "互联网", "value": 11, "options": []}
        ]},
        {"name": "制造", "value": 2, "options": []},
        {"name": "医疗", "value": 3, "options": []},
        {"name": "金融", "value": 4, "options": []},
        {"name": "商业", "value": 5, "options": []},
        {"name": "文化", "value": 6, "options": []},
        {"name": "艺术", "value": 7, "options": []},
        {"name": "法律", "value": 8, "options": []},
        {"name": "教育", "value": 9, "options": []},
        {"name": "行政", "value": 10, "options": []}
    ]
}
```

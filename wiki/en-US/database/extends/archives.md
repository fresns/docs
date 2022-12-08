# archives

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | Primary Key ID |  | NO | Auto Increment |
| plugin_unikey | varchar(64) | 关联插件 |  | NO | 关联字段 [plugins->unikey](../plugins/plugins.md)<br>哪个插件创建的 |
| name | varchar(64) | 名称 |  | YES | **多语言**  |
| description | text | 介绍 |  | YES | **多语言** |
| code | varchar(32) | 代码 |  | NO | **Unique**，纯英文字母，不支持任何符号或空格 |
| usage_type | tinyint *UNSIGNED* | 用途类型 |  | NO | 1.用户 / 2.小组 / 3.话题 / 4.帖子 / 5.评论 |
| form_element | varchar(16) | 表单元素 |  | NO | HTML form 元素 |
| element_type | varchar(16) | 表单元素类型 |  | YES | 与 form_element 对应的类型 |
| element_options | json | 选项类型配置值 |  | YES | 数组格式，支持**多语言**存储<br>为 select,checkbox,radio 等类型提供选项值 |
| file_type | tinyint *UNSIGNED* | 文件类型 |  | YES | `form_element=input` + `element_type=file`<br>仅以上两个配置匹配时才使用，用于声明上传文件类型<br>1.图片 / 2.视频 / 3.音频 / 4.文档 |
| is_multiple | tinyint *UNSIGNED* | 是否多选 | 0 | NO | 0.否 / 1.是<br>对 select,email,file 等元素有效  |
| is_required | tinyint *UNSIGNED* | 是否必填 | 0 | NO | 0.否 / 1.是 |
| input_pattern | varchar(128) | 自定义正则表达式 |  | YES |  |
| input_max | smallint *UNSIGNED* | 最大值 |  | YES |  |
| input_min | smallint *UNSIGNED* | 最小值 |  | YES |  |
| input_maxlength | smallint *UNSIGNED* | 最大长度 |  | YES |  |
| input_minlength | smallint *UNSIGNED* | 最小长度 |  | YES |  |
| input_size | smallint *UNSIGNED* | 大小 |  | YES |  |
| input_step | smallint *UNSIGNED* | 步骤 |  | YES |  |
| rating | smallint *UNSIGNED* | 排列顺序 | 9 | NO | 升序排序 |
| api_type | varchar(16) | 接口类型 | string | NO | 同[配置表](../systems/configs.md) `item_type` 字段逻辑一样，支持 file/plugin/plugins 等类型 |
| is_enable | tinyint *UNSIGNED* | 是否有效 | 1 | NO | 0.无效 / 1.有效<br>无效后，所有关联均无效 |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |


## 表单介绍

| form_element 表单元素 | element_type 元素类型 | element_options 选项类型配置值 |
| --- | --- | --- |
| input | checkbox<br>color<br>file<br>... | 见下方 json 数组，可供 `checkbox`,`radio` 等类型使用 |
| textarea |  |  |
| select |  | 见下方 json 数组，可供 `select`,`multiple` 等类型使用 |
| ... |  |  |

## element_options 选项类型配置值

```json
[
    {"name": "IT", "value": 1},
    {"name": "制造", "value": 2},
    {"name": "医疗", "value": 3},
    {"name": "金融", "value": 4},
    {"name": "商业", "value": 5},
    {"name": "文化", "value": 6},
    {"name": "艺术", "value": 7},
    {"name": "法律", "value": 8},
    {"name": "教育", "value": 9},
    {"name": "行政", "value": 10}
]
```

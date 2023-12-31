---
aside: false
---

# extends *扩展内容表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | 主键 ID | | NO | 自动递增 |
| eid | varchar(32) | 对外公开 ID |  | NO | **唯一值** |
| user_id | bigint *UNSIGNED* | 创建者 ID |  | NO | 关联字段 [users->id](../users/users.md) |
| type | tinyint *UNSIGNED* | 类型 | 1 | NO | 1.文本扩展 / 2.信息扩展 / 3.交互扩展 |
| view_type | tinyint *UNSIGNED* | 视图类型 | 1 | NO |  |
| app_fskey | varchar(64) | 创建者插件 |  | NO | 关联字段 [apps->fskey](../apps/apps.md) |
| url_parameter | varchar(128) | 自定义参数 |  | YES | 逻辑参见[地址拼接说明](../apps/apps.md#地址拼接说明) |
| image_file_id | bigint *UNSIGNED* | 封面图 ID |  | YES | 关联字段 [files->id](../systems/files.md) |
| image_file_url | varchar(255) | 封面图 URL |  | YES |  |
| content | json | 内容信息 |  | YES |  |
| action_items | json | 交互项目 |  | YES |  |
| position | tinyint *UNSIGNED* | 显示位置 | 2 | NO | 1.上方 / 2.下方 |
| is_enabled | tinyint *UNSIGNED* | 是否有效 | 1 | NO | 0.无效 / 1.有效 |
| ended_at | timestamp | 结束时间 |  | YES |  |
| created_at | timestamp | 上传时间 | useCurrent | NO | 比如 MySQL 默认值为 CURRENT_TIMESTAMP |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES | 为空代表没有删除 |

## 视图类型

- 文本扩展
    - 1. 基础
- 信息扩展
    - 1. 正方形信息框架
    - 2. 大号正方形信息框架
    - 3. 纵图信息框架
    - 4. 横图信息框架
- 交互扩展
    - 1. 投票

## 内容信息

**文本扩展**

```json
{
    "content": "String / 文本内容",
    "isMarkdown": "Boolean / 是否为 MD 格式"
}
```

**信息扩展**

```json
{
    "title": "object / 标题（多语言）",
    "titleColor": "String / 标题颜色",
    "descPrimary": "object / 主要副信息（多语言）",
    "descPrimaryColor": "String / 主要副信息颜色",
    "descSecondary": "object / 次要副信息（多语言）",
    "descSecondaryColor": "String / 次要副信息颜色",
    "buttonName": "object / 按钮名称（多语言）",
    "buttonColor": "String / 按钮名称颜色"
}
```

**交互扩展**

```json
{
    "title": "object / 标题（多语言）",
    "titleColor": "String / 标题颜色"
}
```

## 交互项目

```json
[
    {
        "name": "object / 名称（多语言）",
        "key": "String / 键名",
        "value": "String / 键值",
        "hasOperated": "Boolean / 当前用户是否已操作"
    }
]
```

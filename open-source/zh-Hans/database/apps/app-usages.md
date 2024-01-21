---
aside: false
---

# app_usages *插件关联使用表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | 主键 ID |  | NO | 自动递增 |
| usage_type | tinyint *UNSIGNED* | 类型 |  | NO | 1.钱包充值<br>2.钱包提现<br>3.编辑器扩展<br>4.内容类型扩展<br>5.管理扩展<br>6.小组扩展<br>7.用户功能扩展<br>8.用户资料扩展<br>9.频道扩展 |
| app_fskey | varchar(64) | 关联应用 |  | NO | 关联字段 [apps->fskey](../apps/apps.md) |
| name | json | 名称 |  | NO | **多语言** |
| icon_file_id | bigint *UNSIGNED* | 图标文件 ID |  | YES | 关联字段 [files->id](../systems/files.md) |
| icon_file_url | varchar(255) | 图标文件 URL |  | YES |  |
| scene | varchar(16) | type=3,4,5 专用：使用场景 |  | YES | 1.帖子 / 2.评论 / 3.用户<br>多个用英文逗号隔开 |
| editor_toolbar | tinyint *UNSIGNED* | type=3 专用：是否为工具栏显示 | 0 | NO | 0.否 / 1.是 |
| editor_number | tinyint *UNSIGNED* | type=3 专用：使用数量 |  | YES | 最大值 10 |
| is_group_admin | tinyint *UNSIGNED* | type=5,6 专用：小组管理员专用 | 0 | NO | 0.否 / 1.是<br>当值为 1 时，roles 字段无效 |
| group_id | int *UNSIGNED* | type=6 专用：小组 ID |  | YES | 关联字段 [groups->id](../contents/groups.md)<br>关联插件所属小组 |
| roles | varchar(128) | 有权使用的角色 |  | YES | 有权角色 ID，多个以英文逗号隔开 |
| parameter | varchar(128) | 自定义参数 |  | YES |  |
| sort_order | smallint *UNSIGNED* | 排列顺序 | 9 | NO | 升序排序 |
| can_delete | tinyint *UNSIGNED* | 是否禁止删除 | 1 | NO | 0.禁止删除 / 1.允许删除 |
| is_enabled | tinyint *UNSIGNED* | 是否启用 | 1 | NO | 0.停用 / 1.启用 |
| created_at | timestamp | 创建时间 | useCurrent | NO | 比如 MySQL 默认值为 CURRENT_TIMESTAMP |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |

## 应用场景参数介绍

**编辑器扩展-应用场景**

- 1.帖子：应用在发表帖子编辑器中
- 2.评论：应用在发表评论编辑器中

**管理扩展-应用场景**

- 1.帖子：应用在帖子功能菜单中
- 2.评论：应用在帖子功能菜单中
- 2.用户：应用在用户主页功能菜单中

## 地址拼接说明和自定义参数说明

- 查看 apps 表[地址拼接说明](apps.md#地址拼接说明)

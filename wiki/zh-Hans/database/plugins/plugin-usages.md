# plugin_usages *插件关联使用表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | 主键 ID |  | NO | 自动递赠 |
| usage_type | tinyint *UNSIGNED* | 类型 |  | NO | 1.钱包充值<br>2.钱包提现<br>3.编辑器扩展<br>4.内容类型扩展<br>5.管理扩展<br>6.小组扩展<br>7.用户功能扩展<br>8.用户资料扩展 |
| plugin_fskey | varchar(64) | 关联插件名称 |  | NO | 关联字段 [plugins->fskey](../plugins/plugins.md) |
| name | varchar(128) | 名称 |  | NO | **多语言** |
| icon_file_id | bigint *UNSIGNED* | 图标文件 ID |  | YES | 关联字段 [files->id](../systems/files.md) |
| icon_file_url | varchar(255) | 图标文件 URL |  | YES |  |
| scene | varchar(16) | type=3,5 专用：使用场景 |  | YES | 1.帖子 / 2.评论 / 3.用户<br>多个用英文逗号隔开 |
| editor_toolbar | tinyint *UNSIGNED* | type=3 专用：是否为工具栏显示 | 0 | NO | 0.否 / 1.是 |
| editor_number | tinyint *UNSIGNED* | type=3 专用：使用数量 |  | YES | 最大值 10 |
| data_sources | json |  type=4 专用：数据来源参数 |  | YES |  |
| is_group_admin | tinyint *UNSIGNED* | type=5,6 专用：小组管理员专用 | 0 | NO | 0.否 / 1.是<br>当值为 1 时，roles 字段无效 |
| group_id | int *UNSIGNED* | type=6 专用：小组 ID |  | YES | 关联字段 [groups->id](../contents/groups.md)<br>关联插件所属小组 |
| roles | varchar(128) | 有权使用的角色 |  | YES | 有权角色 ID，多个以英文逗号隔开 |
| parameter | varchar(128) | 自定义参数 |  | YES |  |
| rating | smallint *UNSIGNED* | 排列顺序 | 9 | NO | 升序排序 |
| can_delete | tinyint *UNSIGNED* | 是否禁止删除 | 1 | NO | 0.禁止删除 / 1.允许删除 |
| is_enabled | tinyint *UNSIGNED* | 是否启用 | 1 | NO | 0.停用 / 1.启用 |
| created_at | timestamp | 创建时间 | CURRENT_TIMESTAMP | NO |  |
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

## data_sources 字段介绍

```json
{
    "postByAll": {
        "pluginFskey": "为空代表默认，采用主程序 API 输出数据，有值则将接口请求转发给该插件",
        "pluginRating": [
            {
                "id": "接口 pluginRating 参数，转给插件，插件会知道数字代表什么",
                "intro": [
                    {
                        "langTag": "语言标签",
                        "title":"排序标题",
                        "description":"排序描述"
                    },
                    {
                        "langTag": "zh-Hans",
                        "title":"推荐模式",
                        "description":"优先查看推荐帖子"
                    }
                ]
            }
        ]
    },
    "postByFollow": {
        "pluginFskey": "",
        "pluginRating": [
            // 同上
        ]
    },
    "postByNearby": {
        "pluginFskey": "",
        "pluginRating": [
            // 同上
        ]
    },
    "commentByAll": {
        "pluginFskey": "",
        "pluginRating": [
            // 同上
        ]
    },
    "commentByFollow": {
        "pluginFskey": "",
        "pluginRating": [
            // 同上
        ]
    },
    "commentByNearby": {
        "pluginFskey": "",
        "pluginRating": [
            // 同上
        ]
    }
}
```

## 地址拼接说明和自定义参数说明

- 查看 plugins 表[地址拼接说明](plugins.md#地址拼接说明)

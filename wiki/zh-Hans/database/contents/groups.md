# groups *小组表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | 小组 ID | | NO | 自动递增 |
| gid | varchar(32) | 对外公开 ID |  | NO | **唯一值** |
| parent_id | int *UNSIGNED* | 父级小组 ID |  | YES | type=2 时使用 |
| user_id | bigint *UNSIGNED* | 创建者 ID |  | YES | 关联字段 [users->id](../users/users.md) |
| name | varchar(64) | 小组名称 |  | NO | **多语言**  |
| description | varchar(255) | 小组描述 |  | YES | **多语言** |
| type | tinyint *UNSIGNED* | 是否小组分类 | 2 | NO | 1.小组分类（仅作为父级小组，不可发帖）<br>2.小组<br>3.子小组，小组内小组 |
| type_mode | tinyint *UNSIGNED* | 小组模式 | 1 | NO | 1.公开（任何人都能查看小组内帖子）<br>2.非公开（只有成员才能查看小组内帖子） |
| type_mode_end_after | tinyint *UNSIGNED* | 非公开小组配置 | 1 | NO | 1.不限制<br>2.小组内容全部不可见<br>3.到期前内容可见，新内容不可见 |
| type_find | tinyint *UNSIGNED* | 是否可发现<br>也可理解为是否显示 | 1 | NO | 1.可发现（任何人都能找到这个小组）<br>2.不可发现（只有成员能找到这个小组） |
| type_follow | tinyint *UNSIGNED* | 关注方式 | 1 | NO | 1.原生方式 / 2.插件方式 |
| plugin_unikey | varchar(64) | 关联插件 |  | YES | type_follow=2 时使用<br>关联字段 [plugins->unikey](../plugins/plugins.md) |
| sublevel_public | tinyint *UNSIGNED* | type=3 专用<br>子级小组是否公开 | 0 | NO | 0.不公开，仅小组内专用<br>1.公开，全站可见 |
| cover_file_id | bigint *UNSIGNED* | 小组封面图 ID |  | YES | 关联字段 [files->id](../systems/files.md) |
| cover_file_url | varchar(255) | 小组封面图 URL |  | YES |  |
| banner_file_id | bigint *UNSIGNED* | 小组条幅图 ID |  | YES | 关联字段 [files->id](../systems/files.md) |
| banner_file_url | varchar(255) | 小组条幅图 URL |  | YES |  |
| rating | smallint *UNSIGNED* | 显示顺序 | 9 | NO | 升序排序 |
| is_recommend | tinyint *UNSIGNED* | 推荐状态 | 0 | NO | 0.不推荐 / 1.推荐 |
| recommend_rating | smallint *UNSIGNED* | 推荐顺序 | 9 | NO | 升序排序 |
| permissions | json | 权限参数 |  | NO |  |
| like_count | int *UNSIGNED* | 点赞数 | 0 | NO | 有多少用户点赞了该小组 |
| dislike_count | int *UNSIGNED* | 点踩数 | 0 | NO | 有多少用户点踩了该小组 |
| follow_count | int *UNSIGNED* | 关注数 | 0 | NO | 有多少用户关注了（收藏）该小组 |
| block_count | int *UNSIGNED* | 屏蔽数 | 0 | NO | 有多少用户屏蔽了（不感兴趣）该小组 |
| post_count | int *UNSIGNED* | 帖子数 | 0 | NO | 有多少帖子发表在该小组 |
| comment_count | int *UNSIGNED* | 评论数 | 0 | NO | 有多少评论发表在该小组 |
| post_digest_count | int *UNSIGNED* | 精华数 | 0 | NO | 插件操作加精，插件加减统计数 |
| comment_digest_count | int *UNSIGNED* | 精华数 | 0 | NO | 插件操作加精，插件加减统计数 |
| is_enable | tinyint *UNSIGNED* | 是否启用 | 1 | NO | 0.不启用 / 1.启用 |
| created_at | timestamp | 创建时间 | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |

## 权限参数介绍

```json
{
    // 非公开模式的白名单角色
    "mode_whitelist_roles": [
        "2", "3"
    ],
    // 发表帖子设置
    "publish_post": 1, // 发表帖子权限 1.所有用户 2.仅关注了小组的用户 3.仅指定的角色用户 4.仅限小组管理员
    "publish_post_roles": [
        // 有权角色 ID，关联字段 roles > id
        "2", "3"
    ],
    "publish_post_review": false, // 是否发帖开启审核
    // 发表评论设置
    "publish_comment": 1, // 发表评论权限 1.所有用户 2.仅关注了小组的用户 3.仅指定的角色用户 4.仅限小组管理员
    "publish_comment_roles": [
        "2", "3"
    ],
    "publish_comment_review": false, // 是否评论开启审核
    // 以下可以新增自定义设置
}
```

## 权限参数默认值

```json
{"mode_whitelist_roles":[],"publish_post":1,"publish_post_roles":[],"publish_post_review":false,"publish_comment":1,"publish_comment_roles":[],"publish_comment_review":false}
```

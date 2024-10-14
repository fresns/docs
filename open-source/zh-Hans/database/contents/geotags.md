---
aside: false
---

# geotags *地理表*

| 字段名 | 字段类型 | 字段注释 | 默认值 | 可空 | 备注 |
| --- | --- | --- | --- | --- | --- |
| id | int *UNSIGNED* | 主键 ID | | NO | 自动递增 |
| gtid | varchar(32) | 对外公开 ID |  | NO | **唯一值** |
| type | smallint *UNSIGNED* | 类型 | 1 | NO | 用于自定义用途，比如分类或过滤 |
| cover_file_id | bigint *UNSIGNED* | 封面图 ID |  | YES | 关联字段 [files->id](../systems/files.md) |
| cover_file_url | varchar(255) | 封面图 URL |  | YES |  |
| place_id | varchar(64) | Place ID |  | YES | **唯一值**<br>地图服务商专属 ID |
| place_type | varchar(64) | Place Type | unknown | NO | 地图服务商地点位置 |
| name | json | 地理名 |  | YES | **多语言** |
| description | json | 地理描述 |  | YES | **多语言** |
| city_id | int *UNSIGNED* | 城市 ID |  | YES |  |
| map_id | tinyint *UNSIGNED* | 服务商编号 | 1 | NO | 来源[地图服务商](../../configs/dictionary/maps.md)键值字典 |
| map_longitude | decimal(12,8) | 地图-经度 |  | NO | 浮点数，范围为 -180~180，负数表示西经 |
| map_latitude | decimal(12,8) | 地图-纬度 |  | NO | 浮点数，范围为 -90~90，负数表示南纬 |
| map_location | geometry | 地图-经纬度 |  | NO | `latitude`, `longitude`<br>`SRID 4326` |
| district | json | 地区 |  | YES | **多语言** |
| address | json | 地址 |  | YES | **多语言** |
| more_info | json | 更多信息字段 |  | YES |  |
| view_count | int *UNSIGNED* | 浏览数 | 0 | NO | 由插件记录 |
| like_count | int *UNSIGNED* | 赞数 | 0 | NO | 有多少用户赞了该地理 |
| dislike_count | int *UNSIGNED* | 踩数 | 0 | NO | 有多少用户踩了该地理 |
| follow_count | int *UNSIGNED* | 关注数 | 0 | NO | 有多少用户关注了（收藏）该地理 |
| block_count | int *UNSIGNED* | 屏蔽数 | 0 | NO | 有多少用户屏蔽了（不感兴趣）该地理 |
| post_count | int *UNSIGNED* | 帖子数 | 0 | NO | 有多少帖子关联了该地理 |
| comment_count | int *UNSIGNED* | 评论数 | 0 | NO | 有多少评论关联了该地理 |
| post_digest_count | int *UNSIGNED* | 精华数 | 0 | NO | 插件操作加精，插件加减统计数 |
| comment_digest_count | int *UNSIGNED* | 精华数 | 0 | NO | 插件操作加精，插件加减统计数 |
| last_post_at | timestamp | 最后发表帖子时间 |  | YES |  |
| last_comment_at | timestamp | 最后发表评论时间 |  | YES |  |
| is_enabled | tinyint *UNSIGNED* | 是否启用 | 1 | NO | 0.不启用 / 1.启用 |
| created_at | timestamp | 创建时间 | useCurrent | NO | 比如 MySQL 默认值为 CURRENT_TIMESTAMP |
| updated_at | timestamp | 更新时间 |  | YES |  |
| deleted_at | timestamp | 删除时间 |  | YES |  |

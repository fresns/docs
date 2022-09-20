# placements

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID | | NO | 自动递增 |
| plugin_unikey | varchar(64) | 创建者 |  | NO | 该条记录哪个插件创建的<br>关联字段 [plugins->unikey](../plugins/plugins.md) |
| placement_type | tinyint *UNSIGNED* | 目标类型 |  | NO | 1.用户 / 2.小组 / 3.话题 / 4.帖子 / 5.评论<br>读取哪种内容作为列表页参数 |
| placement_id | bigint *UNSIGNED* | Key ID |  | NO | 1.关联字段 users > id<br>2.关联字段 groups > id<br>3.关联字段 hashtags > id<br>4.关联字段 posts > id<br>5.关联字段 comments > id |
| placement_template | json | 植入内容模板 |  | NO | 自定义编号，来源于使用的客户端 |
| placement_name | varchar(64) | 名称 |  | NO | **多语言**<br>比如：赞助商、广告、你可能感兴趣等 |
| open_type | tinyint *UNSIGNED* | 打开类型 |  | NO | 1.用户主页 / 2.小组详情页 / 3.话题详情页<br>4.帖子详情页 / 5.评论详情页 / 6.扩展内联框架<br>7.插件页 / 8.指定网址 |
| open_value | varchar(128) | 目标值 |  | NO | 用户、小组、话题、帖子、评论，则是对应的主键 ID<br>扩展内联框架是 `extends->id`<br>插件页是 `unikey`，指定网址是 URL |
| position | tinyint *UNSIGNED* | 植入位置 | 5 | NO |  |
| starting_at | timestamp | 起始时间 |  | YES | 为空代表立马开始 |
| expired_at | timestamp | 失效时间 |  | YES | 为空代表永久有效 |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |


## 位置说明

- position=3 代表在列表页第 3 位置插入。同一个位置有多条有效记录，只要有效期内，都输出，由客户端决定选取显示。
- 如果帖子列表每页 30 条，植入位置为 35，则代表在第 2 页第 5 位置当中插入。

## 植入内容模板

```json
[
    {
        "appId": "主程序密钥 ID，根据接口请求的 App ID 来决定输出的模板代码是哪个",
        "tplCode": "模板代码，可能是数字编号，也可能是英文字母，字符串类型。"
        // 客户端凭此代码决定用哪个模板显示该植入内容。
    },
    {
        "appId": "twvhl69n2uqygnox",
        "tplCode": "1"
    }
]
```
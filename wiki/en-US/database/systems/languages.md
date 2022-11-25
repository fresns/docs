# languages

| Column Name | Type | Comment | Default | Null | Remark |
| --- | --- | --- | --- | --- | --- |
| id | bigint *UNSIGNED* | Primary Key ID |  | NO | 自动递赠 |
| table_name | varchar(64) | 表名 |  | NO | 哪个表 |
| table_column | varchar(64) | 字段名 |  | NO | 哪个字段是多语言 |
| table_id | bigint *UNSIGNED* | 数据记录的主键 ID |  | YES | 哪条数据记录是多语言，该条记录的`主键 ID` |
| table_key | varchar(64) | 数据记录的标识名 |  | YES | 如果数据记录不以`主键 ID`为依据时，则填写数据记录的标识名<br>例如：配置表不以`主键 ID`为依据，所以使用`键名`作为标识名 |
| lang_tag | char(16) | Language Tag |  | NO | 参见「[多语言唯一性逻辑](../../extensions/multilingual.md)」 |
| lang_content | longtext | 语言内容 |  | NO |  |
| created_at | timestamp | Create Time | CURRENT_TIMESTAMP | NO |  |
| updated_at | timestamp | Update Time |  | YES |  |
| deleted_at | timestamp | Delete Time |  | YES |  |

## 涉及“多语言”的数据表

|  表名  |  字段名  |  控制面板路径  |
|  ---  |  ---  |  ---  |
|  roles  |  name  |  Panel > 运营配置 > 用户角色  |
|  stickers  |  name  |  Panel > 运营配置 > 发表配置 > 表情配置  |
|  groups  |  name  |  Panel > 运营配置 > 内容小组  |
|  groups  |  description  |  Panel > 运营配置 > 内容小组  |
|  plugin_usages  |  name  |  Panel > 扩展管理  |
|  users_icons  |  name  |  *插件录入*  |
|  hashtags  |  description  |  *插件录入*  |
|  post_appends  |  allow_btn_name  |  *插件录入*  |
|  post_appends  |  post_btn_name  |  *插件录入*  |
|  extends  |  title  |  *插件录入*  |
|  extends  |  desc_primary  |  *插件录入*  |
|  extends  |  desc_secondary  |  *插件录入*  |
|  extends  |  btn_name  |  *插件录入*  |

## 涉及“多语言”的配置参数

|  键名  |  描述  |  控制面板路径  |
|  ---  |  ---  |  ---  |
|  account_terms  |  服务条款  |  Panel > 基础设置 > 政策条款  |
|  account_privacy  |  隐私权政策  |  Panel > 基础设置 > 政策条款  |
|  account_cookies |  Cookies 政策  |  Panel > 基础设置 > 政策条款  |
|  account_delete  |  注销说明  |  Panel > 基础设置 > 政策条款  |
|  site_name  |  站点名称  |  Panel > Systems > 站点设置  |
|  site_desc  |  站点介绍  |  Panel > Systems > 站点设置  |
|  |  自定义名称  |  Panel > 运营配置 > 命名配置  |
|  *_limit_tip  |  限制提示语  |  Panel > 运营配置 > 发表配置  |
|  extcredits1_name  |  扩展 1 名称  |  *插件录入*  |
|  extcredits1_unit  |  扩展 1 单位  |  *插件录入*  |
|  extcredits2_name  |  扩展 2 名称  |  *插件录入*  |
|  extcredits2_unit  |  扩展 2 单位  |  *插件录入*  |
|  extcredits3_name  |  扩展 3 名称  |  *插件录入*  |
|  extcredits3_unit  |  扩展 3 单位  |  *插件录入*  |
|  extcredits4_name  |  扩展 4 名称  |  *插件录入*  |
|  extcredits4_unit  |  扩展 4 单位  |  *插件录入*  |
|  extcredits5_name  |  扩展 5 名称  |  *插件录入*  |
|  extcredits5_unit  |  扩展 5 单位  |  *插件录入*  |

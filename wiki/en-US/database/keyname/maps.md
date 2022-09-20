# Maps

> Panel > Systems > Maps

- 主信息来自 plugin_usages 表
    - type = 9
    - 显示顺序 = rating
    - 关联的插件 = plugin_unikey
    - 显示名称 = name
    - 显示图标 = icon_file_id + icon_file_url
    - 服务商 = parameter `仅存储服务商编号`
    - 启用状态 = is_enable

- 次信息来自 configs 表
    - 以如下规则存储在配置表

| Key Tag | Key Name | Description | is_api |
| --- | --- | --- | --- |
| maps | map_{maps > id} | 地图配置 | 0 |
| maps | map_2 | Google 地图 | 0 |

```json
{
    "mapId": "2",
    "appId": "123",
    "appKey": "123",
}
```

**配置表存储说明：**
- 由于配置表键名是唯一值，所以一个服务商只能有一条记录，多个关联插件共用；所以配置名以 `map_` 加服务商编号为键名。
- 键值类型 object
- 删除时，仅删除 plugin_usages 表记录，不删除配置表键名信息。
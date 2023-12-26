# 设置

> 控制面板 > 仪表盘 > 设置

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 面板配置 | panel_configs `path` |  | object |  |
| 版本类型 | build_type | 1 | number | 主程序升级版本类型 |
| 开发者模式 | developer_mode |  | object |  |

**面板配置**

```json
{
    "path": "admin",
    "port": null,
    "ipv4": [],
    "ipv6": [],
    "accountSupport": {
        "email": true,
        "phone": true,
        "aid": true
    }
}
```

**开发者模式**

```json
{
    "apiSignature": true, // API Signature
    "cache": true // 缓存
}
```

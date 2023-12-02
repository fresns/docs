# 介绍

使用 Fresns 统一和标准化的 API 开发客户端，创建可以服务于三种环境的应用程序，只需一次开发努力，确保兼容性和效率。

## 返回结果格式

Fresns API 遵循 `RESTful` 标准，返回结果的格式如下：

| 参数 | 描述 |
| --- | --- |
| code | [状态码](error-codes.md) |
| message | 状态消息 |
| data | 数据 |

```json
{
    "code": 0,
    "message": "ok",
    "data": {}
}
```

## 数据规范

- 空数组使用 `[]`
- 空对象使用 `null`
- like/dislike/follow/block 计数类 count 参数值，如果为 `null` 则表示后台配置为不公开，如果为公开则是数字值。

## 简写 ID 介绍

| 简写 ID | 描述 |
| --- | --- |
| aid | 账号 ID |
| uid | 用户 ID |
| sid | 空间 ID |
| gid | 小组 ID |
| rid | 角色 ID |
| nid | 通知 ID |
| cvid | 对话 ID |
| cmid | 对话消息 ID |
| hid | 话题 ID |
| gtid | 地理 ID |
| pid | 帖子 ID |
| cid | 评论 ID |
| hpid | 历史帖子 ID |
| hcid | 历史评论 ID |
| fid | 文件 ID |
| eid | 扩展内容 ID |
| did | 草稿 ID |

## 运行模式介绍

- [全局配置](configs.md)键名 [site_mode](configs.md#站点设置)
    - 公开模式，键值为 `public`
    - 私有模式，键值为 `private`
- 每个接口的介绍页都有两种模式的账号和用户参数是否必传说明。

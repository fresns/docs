---
aside: false
---

# 扩展信息

## 扩展资料信息

```json
{
    "code": "String / 标识码",
    "name": "String / 名称",
    "description": "String / 描述",
    "value": "String / 参数值",
}
```

- 参考资料: [archives](../database/extends/archives.md)

## 扩展运营信息

```json
{
    "customizes": [
        {
            "code": "String / 标识码",
            "style": "String / 风格 primary, secondary, success, danger, warning, info",
            "name": "String / 名称",
            "description": "String / 描述",
            "image": "String / 图片 URL",
            "activeImage": "String / 二态图片 URL",
            "displayType": "Number / 展示类型 1.基础 2.功能（应用）",
            "appUrl": "String / 展示类型 2 专用，应用访问地址",
        }
    ],
    "buttonIcons": [
        {
            // 同上
        }
    ],
    "diversifyImages": [
        {
            // 同上
        }
    ],
    "tips": [
        {
            // 同上
        }
    ]
}
```

- 参考资料: [operations](../database/extends/operations.md#code-用途编码)

## 扩展内容信息

```json
{
    "texts": [
        {
            "eid": "String / 扩展内容 ID",
            "type": "Number / 类型编号",
            "typeString": "String / 类型字符串",
            "content": "String / 内容",
            "isMarkdown": "Boolean / 内容是否为 MD 格式",
            "position": "Number / 显示位置 1.上方 2.下方",
            "appUrl": "String / 应用访问地址"
        }
    ],
    "infos": [
        {
            "eid": "String / 扩展内容 ID",
            "type": "Number / 类型编号",
            "typeString": "String / 类型字符串",
            "cover": "String / 封面图",
            "title": "String / 标题",
            "titleColor": "String / 标题颜色",
            "descPrimary": "String / 主要副信息",
            "descPrimaryColor": "String / 主要副信息颜色",
            "descSecondary": "String / 次要副信息",
            "descSecondaryColor": "String / 次要副信息颜色",
            "buttonName": "String / 按钮名称",
            "buttonColor": "String / 按钮名称颜色",
            "position": "Number / 显示位置 1.上方 2.下方",
            "appUrl": "String / 应用访问地址"
        }
    ],
    "actions": [
        {
            "eid": "String / 扩展内容 ID",
            "type": "Number / 类型编号",
            "typeString": "String / 类型字符串",
            "title": "String / 标题",
            "titleColor": "String / 标题颜色",
            "hasOperated": "Boolean / 当前用户是否已操作",
            "status": "Boolean / false 表示已过结束时间",
            "endDateTime": "String / 结束时间",
            "items": [
                {
                    "name": "String / 名称",
                    "key": "String / 键名",
                    "value": "String / 键值",
                    "hasOperated": "Boolean / 当前用户是否已操作"
                }
            ]
        }
    ],
}
```

- 参考资料: [extends](../database/extends/extends.md)

## 扩展功能信息

```json
{
    "fskey": "String / 应用 Fskey",
    "icon": "String / 扩展图标地址",
    "name": "String / 扩展名称",
    "appUrl": "String / 应用访问地址",
    "badgeType": "Number / 扩展提示类型 null.无 1.红点 2.文字 3.数字",
    "badgeValue": "String / 扩展提示值，文字或数字",
}
```

- 参考资料: [plugin_usages](../database/extends/plugin_usages.md)

# 规范生成键名

## 门户配置

| 键标签 | 键名 | 备注 | 禁止接口输出 |
| --- | --- | --- | --- |
| portals | portal_`{platforms>id}` | 门户内容 | 1 |

例如 PC Web 平台的门户键名为 `portal_2`

资料：[终端平台编号](../dictionary/platforms.md)

## 主题模板配置

> Fresns 控制面板 > 应用中心 > 网站引擎

| 栏目标题 | 组件类型 | 键名 | 说明 |
| --- | --- | --- | --- |
| 电脑端主题模板 | select | {unikey}_Pc | 关联存储主题模板文件名 `item_tag = themes` |
| 手机端主题模板 | select | {unikey}_Mobile | 关联存储主题模板文件名 `item_tag = themes` |

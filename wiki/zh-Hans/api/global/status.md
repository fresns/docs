# 客户端状态

- 接口地址：`/status.json`
- 请求方式：`GET`
- 这是一个固定的文件，不是路由接口，直接读取网站根目录的 status.json 文件。

## 返回结果

```json
{
    "name": "Fresns",
    "version": "2.17.0",
    "activate": true,
    "deactivateDescription": {
        "default": "",
        "en": "",
        "zh-Hans": "",
        "zh-Hant": ""
    }
}
```

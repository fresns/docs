# 客户端状态

- 接口地址：`/status.json`
- 请求方式：`GET`
- 这是一个固定的文件，不是路由接口，直接读取网站根目录的 status.json 文件。

## 返回结果

```json
{
    "name": "Fresns",
    "version": "2.0.0",
    "activate": true,
    "deactivateDescription": {
        "default": "",
        "en": "",
        "zh-Hans": "",
        "zh-Hant": ""
    },
    "client": {
        "mobile": {
            "ios":{
                "version": "",
                "appStore": ""
            },
            "android":{
                "version": "",
                "googlePlay": "",
                "downloads": {
                    "apk": ""
                }
            }
        },
        "tablet":{
            "ios":{
                "version": "",
                "appStore": ""
            },
            "android":{
                "version": "",
                "googlePlay": "",
                "downloads": {
                    "apk": ""
                }
            }
        },
        "desktop": {
            "macos":{
                "version": "",
                "appStore": "",
                "downloads": {
                    "intel": "",
                    "appleSilicon": ""
                }
            },
            "windows":{
                "version": "",
                "downloads": {
                    "x86": "",
                    "x64": ""
                }
            },
            "linux":{
                "version": "",
                "downloads": {
                    "x86Deb": "",
                    "x86Rpm": "",
                    "x86AppImage": "",
                    "armDeb": "",
                    "armRpm": "",
                    "armAppImage": "",
                    "mipsDeb": ""
                }
            }
        }
    }
}
```

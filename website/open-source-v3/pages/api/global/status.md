# Client Status

- Endpoint Path: `/status.json`
- Method: `GET`
- This is a fixed file, not a routing interface, that reads the status.json file directly from the site root directory.

## Return

```json
{
    "name": "Fresns",
    "version": "2.0.0",
    "activate": true,
    "deactivateDescribe": {
        "default": "",
        "en": "",
        "zh-Hans": "",
        "zh-Hant": ""
    },
    "client": {
        "mobile": {
            "ios":{
                "version": "1.0.0",
                "describe": {
                    "default": "",
                    "en": "",
                    "zh-Hans": "",
                    "zh-Hant": ""
                },
                "appStore": ""
            },
            "android":{
                "version": "1.0.0",
                "describe": {
                    "default": "",
                    "en": "",
                    "zh-Hans": "",
                    "zh-Hant": ""
                },
                "googlePlay": "",
                "downloads": {
                    "apk": ""
                }
            }
        },
        "tablet":{
            "ios":{
                "version": "1.0.0",
                "describe": {
                    "default": "",
                    "en": "",
                    "zh-Hans": "",
                    "zh-Hant": ""
                },
                "appStore": ""
            },
            "android":{
                "version": "1.0.0",
                "describe": {
                    "default": "",
                    "en": "",
                    "zh-Hans": "",
                    "zh-Hant": ""
                },
                "googlePlay": "",
                "downloads": {
                    "apk": ""
                }
            }
        },
        "desktop": {
            "macos":{
                "version": "1.0.0",
                "describe": {
                    "default": "",
                    "en": "",
                    "zh-Hans": "",
                    "zh-Hant": ""
                },
                "appStore": "",
                "downloads": {
                    "intel": "",
                    "appleSilicon": ""
                }
            },
            "windows":{
                "version": "1.0.0",
                "describe": {
                    "default": "",
                    "en": "",
                    "zh-Hans": "",
                    "zh-Hant": ""
                },
                "downloads": {
                    "x86": "",
                    "x64": ""
                }
            },
            "linux":{
                "version": "1.0.0",
                "describe": {
                    "default": "",
                    "en": "",
                    "zh-Hans": "",
                    "zh-Hant": ""
                },
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

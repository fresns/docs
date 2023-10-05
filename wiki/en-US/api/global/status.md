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

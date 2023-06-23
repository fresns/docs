# Client Status

- Endpoint Path: `/status.json`
- Method: `GET`
- This is a fixed file, not a routing interface, that reads the status.json file directly from the site root directory.

## Return

```json
{
    "name": "Fresns",
    "activate": true,
    "deactivateDescription": {
        "default": "",
        "en": "",
        "zh-Hans": "",
        "zh-Hant": ""
    }
}
```

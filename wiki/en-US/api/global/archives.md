# Extend Archives

- Endpoint Path: `/api/v2/global/{type}/archives`
- Method: `GET`
- Request: `Rest` + `Query`

## Headers Optional Parameter

| Parameter Name | Public Mode (Required) | Private Mode (Required) |
| --- | --- | --- |
| aid | **required** | **required** |
| aidToken | **required** | **required** |
| uid | **required** | **required** |
| uidToken | **required** | **required** |

## Rest Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | **required** | `user`,`group`,`hashtag`,`post`,`comment` |

## Query Params

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| unikey | String | *optional* | 留空输出全部，有值输出指定插件的扩展资料（扩展自定义字段） |

## Return

```json
{
    "code": 0,
    "message": "ok",
    "data": [
        {
            "plugin": "String / 插件 Unikey",
            "name": "String / 名称",
            "code": "String / Code",
            "formElement": "String / HTML 表单元素",
            "elementType": "String / 表单元素类型",
            "elementOptions": "Array / 选项类型配置值",
            "fileType": "Number / 1.图片 2.视频 3.音频 4.文档", // elementType 为 file 时使用
            "fileAccept": "String / 支持的文件后缀，例如 .jpg,.png", // elementType 为 file 时使用
            "fileExt": "String / 支持的文件后缀，例如 jpg,png", // elementType 为 file 时使用
            "isMultiple": "Boolean / 是否多选，对 select,email,file 等元素有效",
            "isRequired": "Boolean / 是否必填",
            "inputPattern": "String / 自定义正则表达式",
            "inputMax": "Number / 最大值",
            "inputMin": "Number / 最小值",
            "inputMaxlength": "Number / 最大长度",
            "inputMinlength": "Number / 最小长度",
            "inputSize": "Number / 大小",
            "inputStep": "Number / 步骤",
        }
    ]
}
```

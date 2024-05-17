# 扩展档案

- 接口地址：`/api/fresns/v1/global/{type}/archives`
- 请求方式：`GET`
- 传参方式：`Rest` + `Query`

## Headers 可选参数

| 参数名 | 公开模式（是否必传） | 私有模式（是否必传） |
| --- | --- | --- |
| X-Fresns-Aid | YES | YES |
| X-Fresns-Aid-Token | YES | YES |
| X-Fresns-Uid | YES | YES |
| X-Fresns-Uid-Token | YES | YES |

## Path 变量

| 变量名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| type | String | YES | `user`,`post`,`comment` |

## Query 参数

| 参数名 | 类型 | 是否必传 | 说明 |
| --- | --- | --- | --- |
| gid | String | NO | 配合 `post` 或 `comment` 使用，获取指定小组的内容配置 |

**接口使用说明**

| `formType` | HTML Code | 描述 |
| --- | --- | --- |
| input | `<input type="text">` | 单行文本域 |
| textarea | `<textarea></textarea>` | 多行文本域 |
| select | `<select></select>` | 下拉选项 |
| radio | `<input type="radio">` | 单选按钮 |
| checkbox | `<input type="checkbox">` | 多选复选框 |
| color | `<input type="color">` | 颜色选择器 |
| time | `<input type="time">` | 时间选择器 |
| date | `<input type="date">` | 日期选择器 |
| month | `<input type="month">` | 年月选择器 |
| datetime | `<input type="datetime-local">` | 日期时间选择器 |
| number | `<input type="number">` | 数字输入框 |
| email | `<input type="email">` | 邮箱输入框 |
| url | `<input type="url">` | 网址输入框 |
| file | `<input type="file">` | 单个文件上传 |
| tags | `<input type="text">` | 标签输入框，格式 `["tag", "tag"]` |

## 返回结果

```json
{
    "code": 0,
    "message": "ok",
    "data": [
        {
            "fskey": "String / 应用 Fskey",
            "name": "String / 名称",
            "description": "String / 描述",
            "code": "String / Code",
            "formType": "String / 表单类型",
            "formOptions": "Array / 选项类型配置值", // select, checkbox, radio
            "isTreeOption": "Boolean / 是否树结构选项",
            "isMultiple": "Boolean / 是否多选", // select
            "isRequired": "Boolean / 是否必填",
            "fileType": "Number / 1.图片 2.视频 3.音频 4.文档", // elementType 为 file 时使用
            "fileExtensions": "String / 支持的文件后缀，例如 jpg,png", // elementType 为 file 时使用
            "fileAccept": "String / 支持的文件后缀，例如 .jpg,.png", // elementType 为 file 时使用
            "inputPattern": "String / 自定义正则表达式",
            "inputMax": "Number / 最大值",
            "inputMin": "Number / 最小值",
            "inputMaxlength": "Number / 最大长度",
            "inputMinlength": "Number / 最小长度"
        }
    ]
}
```

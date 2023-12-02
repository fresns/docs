---
aside: false
---

# 文件信息

```json
{
    "fid": "String / 文件 fid",
    "type": "Number / 文件类型编号 1.图片 2.视频 3.音频 4.文档",
    "status": "Boolean / 是否有效",
    "substitutionImageUrl": "String / 文件无效提示图",
    "sensitive": "Boolean / 是否为敏感文件",
    "name": "String / 完整原始名称",
    "mime": "String / 文件扩展名",
    "extension": "String / 文件后缀名",
    "size": "String / 大小",
    "md5": "String / 文件 md5 编码",
    "sha": "String / 文件 sha 编码",
    "shaType": "String / 文件 sha 类型",
    "moreInfo": {
        // 扩展信息 files->more_info
    },
    // 图片专用参数
    "imageWidth": "Number / 图片宽度",
    "imageHeight": "Number / 图片高度",
    "imageLong": "Boolean / 是否长图",
    "imageRatioUrl": "String / 等比例缩略图地址",
    "imageSquareUrl": "String / 正方形缩略图地址",
    "imageBigUrl": "String / 原图压缩图地址",
    // 视频专用参数
    "videoTime": "Number / 视频时长",
    "videoPosterUrl": "String / 视频封面图链接",
    "videoUrl": "String / 视频链接",
    // 音频专用参数
    "audioTime": "Number / 音频时长",
    "audioUrl": "String / 音频链接",
    // 文档专用参数
    "documentPreviewUrl": "String / 文件预览链接",
    // 音视频共有参数
    "transcodingState": "Number / 音视频转码状态 1.待转码 2.转码中 3.转码完成 4.转码失败"
}
```

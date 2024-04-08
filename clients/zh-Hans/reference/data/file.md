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
    "warning": "String / 警告: none/nudity/violence/sensitive",
    "name": "String / 完整原始名称",
    "mime": "String / 文件扩展名",
    "extension": "String / 文件后缀名",
    "size": "String / 大小",
    "sha": "String / 文件 sha 编码",
    "shaType": "String / 文件 sha 类型",
    // 公共参数
    "width": "Number / 宽度",
    "height": "Number / 高度",
    "duration": "Number / 音视频时长",
    // 图片专用参数
    "imageLong": "Boolean / 是否长图",
    "imageRatioUrl": "String / 等比例缩略图地址",
    "imageSquareUrl": "String / 正方形缩略图地址",
    "imageBigUrl": "String / 原图压缩图地址",
    // 视频专用参数
    "videoPosterUrl": "String / 视频封面图链接",
    "videoUrl": "String / 视频链接",
    // 音频专用参数
    "audioUrl": "String / 音频链接",
    // 文档专用参数
    "documentPreviewUrl": "String / 文件预览链接",
    // 音视频共有参数
    "transcodingState": "Number / 音视频转码状态 1.待转码 2.转码中 3.转码完成 4.转码失败",
    // 帖子和评论专用
    "sortOrder": "Number / 排序",
    "moreInfo": {
        // 更多信息
    }
}
```

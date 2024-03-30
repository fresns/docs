---
aside: false
---

# File Info

```json
{
    "fid": "String / File fid",
    "type": "Number / File type number 1.Image 2.Video 3.Audio 4.Document",
    "status": "Boolean / Is valid",
    "substitutionImageUrl": "String / Invalid file prompt image",
    "warning": "String / Warning: none/nudity/violence/sensitive",
    "name": "String / Complete original name",
    "mime": "String / File MIME type",
    "extension": "String / File extension",
    "size": "String / Size",
    "md5": "String / File md5 encoding",
    "sha": "String / File sha encoding",
    "shaType": "String / File sha type",
    "moreInfo": {
        // files->more_info
    },
    // Image Parameters
    "imageWidth": "Number / Image width",
    "imageHeight": "Number / Image height",
    "imageLong": "Boolean / Is long image",
    "imageRatioUrl": "String / Proportional thumbnail URL",
    "imageSquareUrl": "String / Square thumbnail URL",
    "imageBigUrl": "String / Compressed original image URL",
    // Video Parameters
    "videoDuration": "Number / Video duration",
    "videoPosterUrl": "String / Video cover image URL",
    "videoUrl": "String / Video URL",
    // Audio Parameters
    "audioDuration": "Number / Audio duration",
    "audioUrl": "String / Audio URL",
    // Document Parameters
    "documentPreviewUrl": "String / Document preview URL",
    // Audio or Video Parameter
    "transcodingState": "Number / Audio or video transcoding status 1.Pending 2.Transcoding 3.Transcoding complete 4.Transcoding failed"
}
```

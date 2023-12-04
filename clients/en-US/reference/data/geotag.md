---
aside: false
---

# Geotag Info

```json
{
    "gtid": "String / Geotag ID",
    "url": "String / Geotag Detail Page URL",
    "name": "String / Geotag Name",
    "cover": "String / Geotag Cover Image",
    "description": "String / Geotag Description",
    "likeCount": "Number / Total Like Count",
    "dislikeCount": "Number / Total Dislike Count",
    "followCount": "Number / Total Follow Count",
    "blockCount": "Number / Total Block Count",
    "postCount": "Number / Total Post Count",
    "postDigestCount": "Number / Total Digest Post Count",
    "commentCount": "Number / Total Comment Count",
    "commentDigestCount": "Number / Total Digest Comment Count",
    "createdDatetime": "String / Geotag Creation Datetime",
    "mapId": "Number / Latitude and Longitude Map ID",
    "latitude": "String / Latitude",
    "longitude": "String / Longitude",
    "scale": "String / Map Scale",
    "continent": "String / Continent Name",
    "continentCode": "String / Continent Code",
    "country": "String / Country Name",
    "countryCode": "String / Country Code",
    "region": "String / Province Name",
    "regionCode": "String / Province Code",
    "city": "String / City Name",
    "cityCode": "String / City Code",
    "district": "String / District Name",
    "address": "String / Address",
    "zip": "String / Postal Code",
    "poiId": "String / POI ID",
    "moreInfo": {
        // Data Table geotags->more_info
    },
    "archives": [
        // Common Data Structure -> Extend Archive Info
    ],
    "operations": {
        // Common Data Structure -> Extend Operation Info
    },
    "extends": {
        // Common Data Structure -> Extend Content Info
    },
    "interaction": {
        "likeSetting": "Boolean / Whether like is allowed",
        "likeName": "String / Custom Like Action Name",
        "dislikeSetting": "Boolean / Whether dislike is allowed",
        "dislikeName": "String / Custom Dislike Action Name",
        "followSetting": "Boolean / Whether follow is allowed",
        "followName": "String / Custom Follow Action Name",
        "blockSetting": "Boolean / Whether block is allowed",
        "blockName": "String / Custom Block Action Name",
        "likeStatus": "Boolean / Like Status",
        "dislikeStatus": "Boolean / Dislike Status",
        "followStatus": "Boolean / Follow Status",
        "blockStatus": "Boolean / Block Status",
        "note": "String / My interaction note (follow or block)"
    }
}
```

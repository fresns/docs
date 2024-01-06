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
    "placeId": "String / Map Place ID",
    "placeType": "String / Map Place Type",
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
    "viewCount": "Number / View Count",
    "likeCount": "Number / Total Like Count",
    "dislikeCount": "Number / Total Dislike Count",
    "followCount": "Number / Total Follow Count",
    "blockCount": "Number / Total Block Count",
    "postCount": "Number / Total Post Count",
    "postDigestCount": "Number / Total Digest Post Count",
    "commentCount": "Number / Total Comment Count",
    "commentDigestCount": "Number / Total Digest Comment Count",
    "createdDatetime": "String / Geotag Creation Datetime",
    "distance": "Number / Distance between the geotag location and me",
    "unit": "String / Unit of distance from me, km or mi",
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
        "likeEnabled": "Boolean / Whether like is allowed",
        "likeName": "String / Custom Like Action Name",
        "likeUserTitle": "String / User title for like interactive",
        "likePublicRecord": "Boolean / Whether the records is public",
        "likePublicCount": "Boolean / Whether the count is public",
        "dislikeEnabled": "Boolean / Whether dislike is allowed",
        "dislikeName": "String / Custom Dislike Action Name",
        "dislikeUserTitle": "String / User title for dislike interactive",
        "dislikePublicRecord": "Boolean / Whether the records is public",
        "dislikePublicCount": "Boolean / Whether the count is public",
        "followEnabled": "Boolean / Whether follow is allowed",
        "followName": "String / Custom Follow Action Name",
        "followUserTitle": "String / User title for follow interactive",
        "followPublicRecord": "Boolean / Whether the records is public",
        "followPublicCount": "Boolean / Whether the count is public",
        "blockEnabled": "Boolean / Whether block is allowed",
        "blockName": "String / Custom Block Action Name",
        "blockUserTitle": "String / User title for block interactive",
        "blockPublicRecord": "Boolean / Whether the records is public",
        "blockPublicCount": "Boolean / Whether the count is public",
        "likeStatus": "Boolean / Like Status",
        "dislikeStatus": "Boolean / Dislike Status",
        "followStatus": "Boolean / Follow Status",
        "blockStatus": "Boolean / Block Status",
        "note": "String / My interaction note (follow or block)"
    }
}
```

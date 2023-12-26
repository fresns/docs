# Error Code

To avoid confusion and potential conflict risks, Fresns status codes prohibit the use of numeric codes consistent with HTTP status codes. Fresns takes `0` as the success code, all other codes indicate a request error, and the `5-digit` code indicates the response status.

- `0` Request successful

## Plugin

- `1****` Plugin Usage
    - `11***` Plugin Manager
    - `12***` Marketplace
    - `13***` Plugin business functions

## Cmd Word

- `2****` Command Word Usage
    - `21***` Cmd Word Manager
    - `22***` Official Business Command Word
        - `221**` Basic
        - `222**` Send
        - `223**` Account
        - `224**` User
        - `225**` Wallet
        - `226**` File
        - `227**` Content
        - `229**` Crontab
    - `23***` Command Word Business Functions

## API

- `3****` API Usage
    - `30***` Commons
    - `31***` Headers
        - `311**` Platform
        - `312**` Version
        - `313**` App ID / Secret and Sign
        - `314**` Lang Tag and Timezone
        - `315**` Account
        - `316**` User
        - `317**` Device Info
    - `32***` Extensions
        - `321**` Configuration Class
        - `322**` Validation Class
        - `323**` Running Class
    - `33***` Systems
    - `34***` Accounts
        - `341**` Parameter Verification
        - `342**` Register
        - `343**` Login
        - `344**` Modification and Configuration
        - `345**` Wallet
    - `35***` Users
        - `351**` Parameter Verification
        - `352**` User Auth
        - `353**` User Permissions
    - `36***` Interactions
        - `361**` Role
        - `362**` Mark
        - `353**` Publish
        - `364**` Delete
        - `365**` Reset
        - `366**` Conversation
        - `367**` Notification
    - `37***` Contents
        - `371**` Group
        - `372**` Hashtag
        - `373**` Geotag
        - `374**` Post
        - `375**` Comment
        - `376**` File
        - `377**` Extend
    - `38***` Editor
        - `381**` Edit Validation
        - `382**` Check Parameter

## Callback

- `4****` Callback Usage

## Other

- `5****` Customize Usage

## Usage Examples

**If used in combination with HTTP status code, you can learn from the following examples.**

- `13404` indicates that the `plugin` could not find the resource;
- `23415` indicates that the `command word` cannot handle the media format attached to the request;
- `50501` indicates that the `third-party API` does not support the requested function and cannot complete the request.

The first two digits are the code assigned by Fresns, and the last three digits are HTTP status codes. The combination of the two can also quickly locate the problem when an error occurs.

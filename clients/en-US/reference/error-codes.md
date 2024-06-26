# Error Codes

| Code | Message |
| --- | --- |
| 0 | Successful |

## Commons

| Code | Message |
| --- | --- |
| 30000 | Parameter error |
| 30001 | Parameter missing error `(mandatory parameters not passed)` |
| 30002 | Parameter values do not meet the requirements `(The parameter value is not the specified parameter value)`|
| 30003 | The parameter value is not in a valid Json array format |
| 30004 | The parameter value is not in a valid Json object format |
| 30005 | The two-choice parameter value cannot be passed to both parameters |
| 30006 | Same old and new value, no change |
| 30007 | Can't be empty |
| 30008 | Operation failed, please try again |

## Headers

| Code | Message |
| --- | --- |
| 31000 | Headers Error |
| 31101 | Platform ID not exist |
| 31102 | Platform ID and Key do not match |
| 31103 | Platform ID does not match the account or user |
| 31201 | Version not exist |
| 31202 | Version and key do not match |
| 31301 | App ID does not exist or is disabled |
| 31302 | Signature error |
| 31303 | Signature expired |
| 31304 | The key does not have the right to request for the interface |
| 31305 | Read-only key are not entitled to request for the interface |
| 31401 | Language tag incorrect |
| 31402 | Timezone incorrect |
| 31501 | Account not logged in, Unable to use `(AID is empty)` |
| 31502 | Wrong account or record not exist |
| 31503 | Lost login token, Please login again `(Token is empty)` |
| 31504 | Login token is no longer valid, please login again `(Token not enabled or expired)` |
| 31505 | Account login token are incorrect or do not exist `(Account Token is incorrect)` |
| 31506 | Login token is incorrect or does not exist, please login again. |
| 31507 | Login token has expired, please login again. |
| 31508 | There are multiple users for the current account, please select a user |
| 31601 | User not logged in, Unable to use `(UID is empty)` |
| 31602 | Wrong user or record not exist |
| 31603 | User login token are incorrect or do not exist `(User Token is incorrect)` |
| 31604 | The current user has set a PIN, please enter the PIN to log in |
| 31701 | Device information is not available `(Device info is empty)` |
| 31702 | Wrong format of device information |
| 31703 | Missing IP information in device information |

## Extensions

| Code | Message |
| --- | --- |
| 32100 | No service provider configured |
| 32101 | The service provider not exist |
| 32102 | The service provider not enabled |
| 32103 | Service provider config parameter is empty |
| 32104 | S3 uploads are not supported by the storage provider |
| 32105 | Storage service provider configuration exception, temporarily unable to upload file |
| 32201 | Wrong ID or record not exist |
| 32202 | Abnormal data: failed to be queried or data duplicated. |
| 32203 | Record expired and invalid. Please try again. |
| 32204 | Record used. Please try again. |
| 32205 | Record used. Can no longer be used. |
| 32206 | Record content is empty |
| 32301 | No response from the service provider |
| 32302 | Service provider processing failed |
| 32303 | Callback error: data lost or wrong record |
| 32304 | Abnormal execution: file lost or wrong record |

## Systems

| Code | Message |
| --- | --- |
| 33100 | This interface or version has been disabled by the system and cannot be requested |
| 33101 | Request for the interface is forbidden under private mode |
| 33102 | Site mode configuration error |
| 33200 | Verify code template unavailable or not exist |
| 33201 | Send the Verify code too often, please try again later |
| 33202 | Verify code cannot be empty |
| 33203 | Verify code incorrect or expired |
| 33301 | Content contains system banned words, please modify before submitting |
| 33302 | The length of the content exceeds the system limit, please reduce it and submit again |
| 33400 | IP error, not a valid IP address |
| 33401 | The IP is abnormal and the details are not available |
| 33402 | The IP cannot be queried for details |
| 33403 | The IP has been disabled and the system cannot provide service |
| 33404 | The IP is unknown. |

## Accounts

| Code | Message |
| --- | --- |
| 34100 | Account cannot be empty |
| 34101 | Email incorrect |
| 34102 | Phone number incorrect |
| 34103 | Country calling code error |
| 34104 | The new password entered twice does not match |
| 34105 | Password length incorrect |
| 34106 | Password should contain numbers |
| 34107 | Password should contain lowercase letters |
| 34108 | Password should contain uppercase letters |
| 34109 | Password should contain symbols |
| 34110 | Email that do not support the domain |
| 34111 | Password cannot be empty |
| 34112 | Password or verify code cannot be empty |
| 34113 | Birthday cannot be empty |
| 34114 | We are sorry, but according to our Terms of Use, you are not of legal age to use our services. This is to ensure that we comply with applicable laws and to protect the safety of all our users. |
| 34201 | This registration channel has been closed and account registration through this function is prohibited |
| 34202 | Registration with Email not supported |
| 34203 | Registration with Phone number not supported |
| 34204 | The account has registered |
| 34205 | Email has been used |
| 34206 | Phone number has been used |
| 34207 | Login with Email not supported |
| 34208 | Login with Phone number not supported |
| 34301 | Account not exist |
| 34302 | Email not exist |
| 34303 | Phone number not exist |
| 34304 | Incorrect account password |
| 34305 | Incorrect account or wrong password |
| 34306 | The error has exceeded the system limit. Please log in again 1 hour later |
| 34307 | Current account disabled |
| 34308 | The account has been logged out |
| 34401 | Email bound |
| 34402 | Phone bound |
| 34403 | Connect account error `(Connected Token already exists)` |
| 34404 | Connect token is disabled |
| 34405 | You have already connected an account and cannot connect it again. |
| 34406 | Your account is not set up with an email and phone number, so after you are disconnected your account will be empty, and you will not be able to log in, so disconnect is disabled. |
| 34501 | Account wallet not exist or disabled |
| 34502 | Account wallet password is incorrect |
| 34503 | The counterparty wallet not exist or disabled |
| 34504 | Wallet balance is not allowed to make payment |
| 34505 | The counterparty wallet balance is not allowed to make payment |
| 34506 | The closing balance not match with the wallet limit |
| 34507 | The closing balance of the counterparty does not match with the wallet limit |

## Users

| Code | Message |
| --- | --- |
| 35100 | User UID or username cannot be empty |
| 35101 | Could only be modified once within the specified number of days |
| 35102 | Your username can only contain letters, numbers and single hyphens |
| 35103 | Username length incorrect |
| 35104 | Username does not meet the minimum length requirement |
| 35105 | That username has been taken. Please choose another. |
| 35106 | The username contains block words |
| 35107 | Consider using a nickname without special characters so it’s accessible to even more people, including people who are blind or have low vision. |
| 35108 | Nickname length incorrect |
| 35109 | Nickname does not meet the minimum length requirement |
| 35110 | The nickname contains block words |
| 35111 | That nickname has been taken. Please choose another. |
| 35201 | Current user not exist or not belong to the current account |
| 35202 | Current user disabled |
| 35203 | The user has been logged out |
| 35204 | Incorrect User PIN |
| 35301 | Current user has no right to request |
| 35302 | The user has expired and has no right to use the function |
| 35303 | User has expired and is not entitled to view current content |
| 35304 | The content belongs to the new content after the expiration date, the current user has expired and does not have the right to view |
| 35305 | You cannot specify a user to view the content |
| 35306 | The system has been opened in private mode, the current user has no authorization information |
| 35400 | None of the selected users are eligible, the content is empty |

## Interactions

| Code | Message |
| --- | --- |
| **Role** |  |
| 36100 | Wrong role or record not exist |
| 36101 | Current role not configured with permissions. Please contact the administrator to confirm. |
| 36102 | Current role has no right to make request |
| 36103 | Current role has no right to browse |
| 36104 | Current role has no right to publish content |
| 36105 | There is a time limit for the current role to publish content. Please try again within specific time |
| 36106 | Current role has to have an email bound before publishing content |
| 36107 | Current role has to have a mobile phone number bound before publishing content |
| 36108 | KYC verify is required for current role to publish content |
| 36109 | Current role has no right to upload images |
| 36110 | Current role has no right to upload videos |
| 36111 | Current role has no right to upload audios |
| 36112 | Current role has no right to upload files |
| 36113 | File size exceeds the set limit |
| 36114 | File time length exceeds the set limit |
| 36115 | The number of files exceeds the set limit |
| 36116 | Current role has no conversation message permission |
| 36117 | The current role has reached the upper limit of today download, please download again tomorrow. |
| 36118 | The current number of characters has reached the maximum number and cannot be added |
| 36119 | Publish too fast, please post again at intervals. Please check the current role settings for details |
| 36120 | The daily publish limit has been reached, please publish again tomorrow |
| **Mark** |  |
| 36200 | This feature is not open and cannot be operated |
| 36201 | The content is not open and cannot be viewed |
| 36202 | Cannot operate on yourself or your published content |
| **Publish** |  |
| 36300 | Only the specified method of publication is supported, and this interface prohibits requests |
| 36301 | Please have your email bound before publishing content |
| 36302 | Please have your mobile phone number bound before publishing content |
| 36303 | Please go through the KYC verify process before publishing content |
| 36304 | The system has time limit for content publishing. Please try again within specified time |
| 36305 | Post cannot be edited after publication |
| 36306 | Comment can not be edited after publish |
| 36307 | Editing not allowed for top contents |
| 36308 | Editing not allowed for highlighted contents |
| 36309 | Editable time expired |
| 36310 | This extension of file can not be uploaded |
| 36311 | Current user does not have the post permission of the group |
| 36312 | Current user does not have the comment permission of the group |
| 36313 | The current group is closed for publication |
| 36314 | This comment type does not allow editing |
| **Delete** |  |
| 36400 | Failed to delete. Content error or not exist |
| 36401 | The content can not be deleted |
| 36402 | The resource is being used and deletion is not allowed |
| 36403 | You can only delete your own content |
| 36404 | Not allowed to delete in the review, please withdraw the review and then delete |
| 36405 | Content has been published, the draft can no longer operate, if you need to delete please delete the published content |
| **Reset** |  |
| 36500 | Operation failed. Please confirm that you are the author |
| 36501 | There is no need to withdraw the content, for it is not being reviewed |
| **Conversation** |  |
| 36600 | Conversation function is not enabled and cannot be used |
| 36601 | Conversation exception or non-existent |
| 36602 | The conversation does not belong to the current user |
| 36603 | You can not send messages to yourself |
| 36604 | Each message should be either [file] or [text] |
| 36605 | The message could not be sent for the block words it contains |
| 36606 | The user they set that only the users he follows can send messages |
| 36607 | The user they set that only the users he follows and the verified users can send messages |
| 36608 | The other party they set the conversation off function |
| 36609 | Only your own conversation messages could be deleted. |
| **Notification** |  |
| 36700 | Notification exception or non-existent |
| 36701 | The notification does not belong to the current user |
| 36702 | Only your own notification messages could be deleted. |

## Contents

| Code | Message |
| --- | --- |
| **Group** |  |
| 37100 | Wrong group or record not exist |
| 37101 | Group disabled |
| 37102 | None of the selected groups are eligible, the content is empty |
| 37103 | Only members can view this group. |
| 37104 | Only members can see who's in the group and what they post. |
| 37105 | The current user disabled from viewing the content of this group |
| 37106 | The service has expired and cannot be viewed and interacted with in this group |
| 37107 | Service has expired, can't view new content |
| **Hashtag** |  |
| 37200 | Wrong hashtag or record not exist |
| 37201 | Hashtag disabled |
| 37202 | None of the selected hashtags are eligible, the content is empty |
| **Geotag** |  |
| 37300 | Wrong geotag or record not exist |
| 37301 | Geotag disabled |
| 37302 | None of the selected geotags are eligible, the content is empty |
| **Post** |  |
| 37400 | Wrong post or record not exist |
| 37401 | Post disabled |
| 37402 | Wrong post log or record not exist |
| 37403 | Post log suspended |
| 37404 | The content could not be accessed without authorization |
| **Comment** |  |
| 37500 | Wrong comment or record not exist |
| 37501 | Comment disabled |
| 37502 | Wrong comment log or record not exist |
| 37503 | Comment log suspended |
| 37504 | Comments are only visible to the author of the post |
| 37505 | The post has timed out and no longer shows comments |
| **File** |  |
| 37600 | Wrong file or record not exist |
| 37601 | File disabled |
| 37602 | You are not authorized to edit this file. |
| **Extend** |  |
| 37700 | Wrong extend content or record not exist |
| 37701 | Extend Disabled |
| 37702 | Extend key does not exist |
| **Archive** |  |
| 37800 | Wrong archive content or record not exist |
| 37801 | Archive configuration disabled |
| 37802 | Archive configuration mismatch |

## Editor

| Code | Message |
| --- | --- |
| **Edit Validation** |  |
| 38100 | Draft ID is incorrect or does not exist |
| 38101 | You can only edit your own content |
| 38102 | The content is being reviewed and can not be edited |
| 38103 | The content has been published and can not be edited |
| 38104 | Content being reviewed can not be submitted again |
| 38105 | Content being published can not be submitted again |
| 38106 | Failed to create draft comment. Only first-level comment can create draft |
| 38107 | Draft creation failed, draft box is full, please organize and create again |
| 38108 | Comment failed, belongs to the post or has been deleted |
| 38109 | Comment failed, the post belongs to the comment function has been closed |
| 38110 | The author of the post has made the comment private, do not support separate reconfiguration of comments |
| **Check Parameter** |  |
| 38200 | Content has been submitted, pending review and approval before official publication |
| 38201 | The existence of content to be audited, the system does not allow the simultaneous submission of two pieces of content for review, to be submitted after the end of the audit |
| 38202 | Title cannot be empty |
| 38203 | The title is too long and has exceeded the length limit |
| 38204 | The content cannot be empty, please write the content and then publish |
| 38205 | The content is too long and has exceeded the length limit |
| 38206 | There are banned words in the title, please modify it before publishing |
| 38207 | There are banned words in the content, please revise before publishing |
| 38208 | Group cannot be empty, please select group |
| 38209 | The author has set only the users he follows to comment |
| 38210 | The author has set only the users he follows and the verified users can comment |
| 38211 | The author has turned off the comment function |
| 38212 | Only users mentioned by the author can comment |

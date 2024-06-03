# Release Notes

All notable changes to this project will be documented in this file.


## 3.3.2 (06/04/2024)

### Changed
- API: Content data `editControls` parameter name changed to `controls`


## 3.3.1 (06/03/2024)

### Fixes
- API: Follow user error
- Data: SQLite database geospatial compatibility


## 3.3.0 (06/01/2024)

### Added
- API: Added name and unit parameters to the user extended score record list.
- Models: For video file information, if there is a poster processing parameter but no poster path, the file path is used to generate the poster directly from the video file.
- Account: Connect configuration now supports uploading custom icons.

### Fixes
- API: Resolved cache key name conflict in post and comment list interfaces.
- API: Added visibility condition to the group list query criteria.
- API: Fixed block failure in post and comment lists.
- Words: Set user extended score, re-fetch final score from the database to avoid data inconsistency due to abnormal execution.
- Utilities: Corrected model name error in city data creation.

### Changed
- Data: Modified language pack key naming for wallet and extended score, replacing the word "Log" with "Record".
- Models: When the site_url configuration item is empty, the content URL is also empty.


## 3.2.1 (05/20/2024)

### Fixes
- Panel: Group editing does not prohibit specifying itself as the parent group.

### Changed
- Panel: Storage settings refactored. Please refer to the plugin introduction for reconfiguration.
- Panel: Removed custom cookie prefix functionality.
- Words: Renamed command for obtaining temporary file URLs.


## 3.2.0 (05/18/2024)

### Added
- API: Tree structure for group lists supports querying by type.

### Fixes
- API: Optimized editor and draft parameters.
- API: Issue with group follow type parameter values.
- Data: Corrected parameters for extend archives.
- Panel: Configuration items lost when saving role permission settings.

### Changed
- API: Refactored extend archives interface. `/api/fresns/v1/global/{type}/archives`


## 3.1.3 (05/12/2024)

### Fixes
- Data: Modify the token field length in the account interconnection information table to accommodate longer character storage.
- Panel: Theme upgrade did not automatically clear version number cache.
- Panel: Incorrect 302 error in JS language pack link.
- Framework: Optimize 404 and 500 error page views.


## 3.1.2 (05/06/2024)

### Fixes
- API: `gender_custom` and `gender_pronoun` parameter errors in user profile update interface.
- API: `hcid` parameter error in draft comments.
- API: User birthday format error.
- Panel: Panel language cookie changed to persistent.
- Console: Fixed http proxy configuration bug.


## 3.1.1 (04/30/2024)

### Fixes
- API: Fixed an issue where notification messages would cause errors when the post was deleted.
- Account: Resolved the ordering issue with language tag retrieval middleware.
- Account: Corrected the mismatch between template ID for sending verification codes and verification.
- Panel: Addressed a registration issue with middleware classes, resolving route cache usage.

### Changed
- Models: Renamed constant `TempVerifyCode::TEMPLATE_EDIT_PROFILE` to `TempVerifyCode::TEMPLATE_UPDATE_PROFILE`.


## 3.1.0 (04/28/2024)

### Added
- API: Content List API now caches query results.
- API: Log creation for post and comment deletions.
- Account: Added "Child Protection" settings.

### Fixes
- API: Fixed incorrect field name in user count.
- API: Fixed ineffective contentType parameter in posts and comments list.
- Account: Fixed incorrect application service provider URL.
- Models: Optimized constant numbering in callback content table and log table.
- Panel: `encryptCookies` setting does not support decimals, converted to underscores on panel save.

### Changed
- API: Refactored user profile and settings interface.
    - `/api/fresns/v1/user/profile`
    - `/api/fresns/v1/user/setting`
- Helpers: Optimized parameter order in `CacheHelper::put`.
- Data: Renamed `darkMode` in language pack to `appearance`, added languages `light` and `dark`.
- Website-Engine: Refactored multilingual logic, switching languages no longer changes URL, uses `?language={langTag}` instead.


## 3.0.0 (04/15/2024)

- 3.x first version

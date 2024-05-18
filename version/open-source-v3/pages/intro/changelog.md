# Release Notes

All notable changes to this project will be documented in this file.


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

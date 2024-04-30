# Release Notes

All notable changes to this project will be documented in this file.


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

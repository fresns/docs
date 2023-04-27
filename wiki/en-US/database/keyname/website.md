# Website

> Panel > Clients > Website

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Engine Cookie Prefix | engine_cookie_prefix | fresns_ | string |  |
| Engine API Type | engine_api_type | local | string | `local` or `remote` |
| Key Association | engine_key_id |  | number | Related field [session_keys->id](../systems/session-keys.md) |
| API Host | engine_api_host |  | string |  |
| API App ID | engine_api_app_id |  | string |  |
| API App Secret | engine_api_app_secret |  | string |  |
| Stat Code | website_stat_code |  | string | Webpage statistical tool code |
| Stat Code Position | website_stat_position |  | string | `head` or `body`<br>Position to load the statistical code in HTML |
| Website Interactive Function | website_status | true | boolean | After disabling the web interactive function, specify the number of content displayed when visiting the website<br>For example, projects focused on mobile app operations, websites are only used for sharing and diverting, and do not want users to use the full functionality. |
| Display Content Number | website_number | 5 | number | After disabling the web interactive function, the user access will only display a certain number of content<br>For example, if set to 5, users will only see 5 entries whether they visit the post list or view comments. |
| Content Display Ratio | website_percentage | 30 | number | After disabling the web interactive function, the post content display ratio, unit: percentage<br>For example, if set to 30%, only 30% of the post content will be displayed when visiting the post details page, and the remaining content is recommended to be viewed in the App. |
| China Mode | site_china_mode | false | boolean | `false` or `true`<br>Whether to display filing information, turn it off if the website server is not in Mainland China |
| Internet Content Provider Filing | china_icp_filing |  | string | [https://beian.miit.gov.cn](https://beian.miit.gov.cn/) |
| Internet Content Provider License | china_icp_license |  | string | [https://dxzhgl.miit.gov.cn](https://dxzhgl.miit.gov.cn/) |
| Public Security Bureau Filing | china_psb_filing |  | string | [http://www.beian.gov.cn](http://www.beian.gov.cn/) |
| Broadcasting License | china_broadcasting_license |  | string | [https://zw.nrta.gov.cn](https://zw.nrta.gov.cn/) |

## Theme Configuration

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Desktop Theme | FresnsEngine_Desktop |  | string | Official engine desktop theme configuration |
| Mobile Theme | FresnsEngine_Mobile |  | string | Official engine mobile theme configuration |

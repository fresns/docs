# 政策设置

> 控制面板 > 系统 > 政策设置

| 栏目标题 | 键名 | 默认键值 | 键值类型 | 说明 |
| --- | --- | --- | --- | --- |
| 是否显示-服务条款 | account_terms_status | false | boolean | true 或 false |
| 是否显示-隐私权政策 | account_privacy_status | false | boolean | true 或 false |
| 是否显示-Cookie 政策 | account_cookie_status | false | boolean | true 或 false |
| 是否显示-IP 属地 | account_ip_location_status | false | boolean | true 或 false |
| 是否显示-注销说明 | account_delete_status | false | boolean | true 或 false |
| 是否启用-注销功能 | delete_account_type | 1 | number | 1.不启用注销功能<br>2.逻辑注销<br>3.物理注销 |
| 注销功能-注销缓冲期 | delete_account_todo | 7 | number | 单位：天 |
| 服务条款内容 | account_terms_policy |  | object | **多语言**，Markdown 格式 |
| 隐私权政策内容 | account_privacy_policy |  | object | **多语言**，Markdown 格式 |
| Cookie 政策内容 | account_cookie_policy |  | object | **多语言**，Markdown 格式 |
| 注销说明内容 | account_delete_policy |  | object | **多语言**，Markdown 格式 |

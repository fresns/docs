# 状态码使用

为了避免混淆和潜在的冲突风险，Fresns 状态码禁止与 HTTP 状态码采用一致的数字代码。Fresns 以 `0` 为成功代码，其余代码均表示请求出错，以 `5` 位数字代码表示响应状态。

- `0` 请求成功

## 应用相关

- `1****` 应用相关
    - `11***` Fresns OAuth
    - `12***` Fresns Cloud
    - `13***` Fresns Distributed
    - `14***` Fresns Client
    - `15***` 开发者平台
    - `16***` 应用市场
    - `17***` 插件管理器
    - `18***` 第三方应用业务功能

## 命令字相关

- `2****` 命令字相关
    - `21***` 命令字管理器
    - `22***` 官方业务命令字
        - `221**` 基础功能
        - `222**` 发信功能
        - `223**` 账号功能
        - `224**` 用户功能
        - `225**` 钱包功能
        - `226**` 文件功能
        - `227**` 内容功能
        - `229**` 定时任务
    - `23***` 第三方业务命令字

## API 业务功能相关

- `3****` API 业务功能相关
    - `30***` 通用
    - `31***` Headers
        - `311**` 平台
        - `312**` 版本号
        - `313**` App ID / Secret 和 Sign
        - `314**` 语言和时区
        - `315**` 账号
        - `316**` 用户
        - `317**` 设备信息
    - `32***` 扩展功能
        - `321**` 配置相关
        - `322**` 验参相关
        - `323**` 执行相关
    - `33***` 系统配置
    - `34***` 账号
        - `341**` 参数验证
        - `342**` 注册
        - `343**` 登录
        - `344**` 修改和配置
        - `345**` 钱包交易
    - `35***` 用户
        - `351**` 参数验证
        - `352**` 用户登录
        - `353**` 用户权限相关
    - `36***` 互动
        - `361**` 角色权限
        - `362**` 操作
        - `353**` 发表
        - `364**` 删除
        - `365**` 撤回
        - `366**` 对话
        - `367**` 通知
    - `37***` 内容
        - `371**` 小组相关
        - `372**` 话题相关
        - `373**` 地理相关
        - `374**` 帖子相关
        - `375**` 评论相关
        - `376**` 文件相关
        - `377**` 扩展相关
    - `38***` 编辑器
        - `381**` 编辑鉴权相关
        - `382**` 内容验参相关

## 回调返参相关

- `4****` 回调返参相关

## 第三方自定义

- `5****` 第三方自定义

## 使用示例

**如果与 HTTP 状态码结合使用，可借鉴下方示例。**

- `13404` 表示为 `插件` 找不到资源；
- `23415` 表示 `命令字` 无法处理请求附带的媒体格式；
- `50501` 表示 `第三方 API` 不支持请求的功能，无法完成请求。

前两位为 Fresns 分配的代码，后三位为 HTTP 状态码，两者结合也可以在出错时快速定位问题。

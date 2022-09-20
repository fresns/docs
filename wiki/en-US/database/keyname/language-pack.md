# Language Packs

> Panel > Clients > Language Packs

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| 语言包 | language_pack | [language_pack](../dictionary/language-pack.md) | array |  |

## Language Identifier

**先以 [language_pack](../dictionary/language-pack.md) 为键名存储语言标识名**

切换不同配置页的时候，统一的输入列表，每个配置页都可以新增或删减（删，需二次确认）。

```json
[
    {"name":"accountLogin","canDelete":true}, //可以删除
    {"name":"accountRegister","canDelete":false}, //不可以删除
    {"name":"accountRecovery","canDelete":false}
]
```

## Language Content

**再以 language_pack_contents 为键名，存储所有语言标识对应的语言的内容**

```json
[
    {"name":"accountLogin","content":"登录"},
    {"name":"accountRegister","content":"注册"},
    {"name":"accountRecovery","content":"找回密码"},
]
```
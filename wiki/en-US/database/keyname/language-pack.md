# Language Packs

> Panel > Clients > Language Packs

| Menu Title | Key Name | Default Key Value | Value Type | Description |
| --- | --- | --- | --- | --- |
| Language Pack | language_pack | [language_pack](../dictionary/language-pack.md) | array |  |

## Language Identifier

**The language identifier is initially stored under the key name [language_pack](../dictionary/language-pack.md).**

When switching between configuration pages, the input list is unified and each configuration page can be added or deleted (deletion requires a second confirmation).

```json
[
    {"name":"accountLogin","canDelete":true}, //It is possible to delete
    {"name":"accountRegister","canDelete":false}, //cannot be deleted
    {"name":"accountRecovery","canDelete":false}
]
```

## Language Content

The `language_pack_contents` key is used to store the contents of all languages corresponding to the language identifier.

```json
[
    {"name":"accountLogin","content":"Login"},
    {"name":"accountRegister","content":"Register"},
    {"name":"accountRecovery","content":"Recovery Password"},
]
```
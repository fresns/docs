# Contributing Guide

Hi! I'm really excited that you are interested in contributing to Fresns. Before submitting your contribution, please make sure to take a moment and read through the following guidelines:

## Collaboration Specification

| Guide | Description |
| --- | --- |
| [The Twelve Factors](https://12factor.net/) | Adam Wiggins |
| [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) | Conventional Commits |
| [Semantic Versioning](https://semver.org/) | Gravatars |
| [Chinese Docs Writing Guide](https://github.com/jarvis-tang/copywriting-style-guide) | Jarvis Tang |
| [English Docs Writing Guide](writing-guide.md) | Vue.js |

::: details View Commit Type Introduction
- All contents of the log should use ASCII characters, not Chinese or emoji, so as to maximize compatibility and facilitate program processing. The overall structure is as follows:
```
Type (optional category): Short description

Optional detail

Optional note
```
- A complete example:
```
feat(auth): increase length of new API key

the length is increased from 24 to 32 for new API keys

close #12
```
| Type | Description |
| --- | --- |
| feat | feature - All commit that implements new functions and behaviors belong to this type. |
| fix | Commit to fix defects |
| chore | Routine maintenance changes, such as the configuration of linter, etc. |
| test | Changes related to testing |
| refactor | Improvement of code structure without changing behavior |
| style | Revise the code style (only simple changes such as indentation and blank lines, and use refactor if it affects the structure) |
| cosm | cosmetic - Pure visual changes to the interface without changing behavior |
| docs | Improvement of documents, including external documents and code comments |
| build | And changes related to building process, continuous integration, etc. |
:::

## Help Tools

| Tool | Description |
| --- | --- |
| [StyleCI](https://styleci.io/) | The Web Coding Style Fixer |

## Coding Style

In order to keep the Fresns codebase clean and consistent, we have a number of coding style guidelines that we follow. When in doubt, read the source code.

Don't worry if your code styling isn't perfect! [StyleCI](https://styleci.io/) will automatically merge any style fixes into Fresns repositories after pull requests are merged. This allows us to focus on the content of the contribution and not the code style.

Fresns follows the [PSR-2](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md) coding standard and the [PSR-4](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md) autoloading standard. On top of this, we conform to a number of other style rules (opens new window). We use PHP 7 type hinting and return type declarations where possible, and [PHPDoc](https://docs.phpdoc.org/) to provide inline documentation. Try and mimic the style used by the rest of the codebase in your contributions.

- Namespaces should be singular (eg. Fresns\Discussion, not Fresns\Discussions)
- Interfaces should be suffixed with Interface (eg. MailableInterface)
- Abstract classes should be prefixed with Abstract (eg. AbstractModel)
- Traits should be suffixed with Trait (eg. ScopeVisibilityTrait)
- "status" or "state"
    - status is used to describe an outcome of an operation (e.g. success/fail).
    - state is used to describe a stage in a process (e.g. pending/dispatched).

## Database Style

**Tables** should be named as follows:

- Use plural form (`languages`)
- Separate multiple words with underscores (`session_tokens`)
- For relationships tables, join the two table names in singular form with an underscore in alphabetical order (eg. `discussion_user`)

**Columns** should be named according to their data type:

- DATETIME or TIMESTAMP: `{verbed}_at` (eg. created_at, read_at) or `{verbed}_until` (eg. suspended_until)
- INT that is a count: `{noun}_count` (eg. comment_count, word_count)
- Foreign key: `{verbed}_{entity}_id` (eg. hidden_user_id)
    - Verb can be omitted for primary relationship (eg. post author is just `user_id`)
- BOOL: `is_{adjective} `(eg. is_locked)
- The landmark time value must be a `TIMESTAMP` type field to ensure that the time zone request is supported (e.g. creation time, update time and operation behavior time).
- The color field is uniformly stored as a `6-bit hexadecimal` color value.

## Contributor License Agreement

By contributing your code to Fresns you grant the Fresns Foundation (Stichting Fresns) a non-exclusive, irrevocable, worldwide, royalty-free, sublicensable, transferable license under all of Your relevant intellectual property rights (including copyright, patent, and any other rights), to use, copy, prepare derivative works of, distribute and publicly perform and display the Contributions on any licensing terms, including without limitation: (a) open source licenses like the MIT license; and (b) binary, proprietary, or commercial licenses. Except for the licenses granted herein, You reserve all right, title, and interest in and to the Contribution.

You confirm that you are able to grant us these rights. You represent that You are legally entitled to grant the above license. If Your employer has rights to intellectual property that You create, You represent that You have received permission to make the Contributions on behalf of that employer, or that Your employer has waived such rights for the Contributions.

You represent that the Contributions are Your original works of authorship, and to Your knowledge, no other person claims, or has the right to claim, any right in any invention or patent related to the Contributions. You also represent that You are not legally obligated, whether by entering into an agreement or otherwise, in any way that conflicts with the terms of this license.

The Fresns Foundation acknowledges that, except as explicitly described in this Agreement, any Contribution which you provide is on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, ANY WARRANTIES OR CONDITIONS OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY, OR FITNESS FOR A PARTICULAR PURPOSE.

```
/*
 * Fresns (https://fresns.org)
 * Copyright (C) 2021-Present Jarvis Tang
 * Released under the Apache-2.0 License.
 */
```

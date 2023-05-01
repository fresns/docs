# Web Engine Plugin Development

The website functions developed based on the main program API include integrated engine and independent engine respectively.

- **Integrated Engine**：It is also a plug-in in its nature. From the perspective of the product, it is a complete solution, namely, a complete community function or a complete shopping mall, blogger, and CMS that has been developed. The main program could enable multiple engines simultaneously as long as the routes do not conflict with each other.
- **Independent Engine**：Equivalent to mobile applications (App) and websites deployed and operating outside the main program independently to realize separate management of the business server.

The document is drafted to introduce the development of an integrated engine. Since the integrated engine is a kind of plug-in in its nature, its development logic is the same as that of the plug-in. In this light, reference could be drawn from plug-in development. This document only introduces the difference with the plug-in.

## Introduction to view files

### Front-end description

- The view files (template files) on the foreground interface are stored in the `/extensions/themes/` folder under the root directory of the project. The path guide is stored in the configuration table, with the key name of the configuration taking the format of engine `fskey` + `_Desktop` or + `_Mobile`.
- The engine finds the theme template folder, reads Blade template files and renders the interface according to the guidance of the system.

| Key Name | For example the engine fskey for `FresnsEngine` |
| --- | --- |
| {fskey}_Desktop | FresnsEngine_Desktop |
| {fskey}_Mobile | FresnsEngine_Mobile |

### Back-end description

- If the engine has any background page (setting page), the page should be provided in the `settingPath` parameter of `plugin.json` files.
- After the engine is installed, relevant files would be distributed to the execution position (refer to the plug-in document).


## Engine Product Standards

To ensure that the theme template could still be used when the user is replacing the website engine, it is recommended that developers of the engine and theme template follow the following standard. It could not only help the user but also make the engine developed by you compatible with more theme templates and thereby improve the user scale of the engine.

The standard only offers some suggestions, and you can choose whether to apply it or not. Since the standard mainly applies to the main functions (community functions), you can neglect it if you are developing non-community functions, including CMS, blogger, shopping mall, etc.

### Route Standards

The path standard could avoid path conflict with other engines. For example, when developing engines for other functions including CMS or shopping malls, one could avoid using the following paths. Moreover, it also makes it convenient to use the plug-in when apps have standard URLs for sharing.

- [View route details](../theme/structure.md)
- [View the default engine configuration](../../database/keyname/website.md)

### Template Directory Standard

Applying a standard template file directory could avoid the engine become incompatible when the user is replacing the engine. For a detailed description, please refer to the instructions in the [theme template development](../theme/) views folder. 

## Engine Reference

### Advice on function configuration key name

All websites would involve such configurations as statistics and ICP information. In such a context, to save users from repeated configuration when switching the engine or using multiple engines, it is recommended that a unified configuration key name be used.

The key name of the function configuration is attributed to the `websites` key label. Refer to [website configuration](../../database/keyname/website.md) for details.

### Advice on menu key name

The key name of the menu configuration is attributed to the `menus` key label. Refer to [menu configuration](../../database/keyname/menus.md) for details.

### Advice on routing path

The key name of the routing path configuration is attributed to the `websites` key label. Refer to [path configuration](../../database/keyname/paths.md) for details.

### Advice on access logic

The engine of Fresns official website is the logic for reference.

![Advice on access logic](https://files.fresns.org/wiki/flowchart/access.jpg)

### Advice on account logic

The engine of Fresns official website is the logic for reference.

![Advice on account logic](https://files.fresns.org/wiki/flowchart/account.jpg)

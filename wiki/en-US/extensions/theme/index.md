# Theme Development

The theme of the template is **Laravel Blade** template file, which must rely on the website engine to run and provide the UE&UI interface for the website engine; to develop the theme template, it is necessary to first confirm which engine it was developed for, and it is necessary to follow the template standard of this engine. Please refer to the development documentation of this engine.

## Directory Structure

```php
ThemeDemo/          // Theme template folder (named after uniKey)
├── assets/             // Resource files
│   ├── fresns.png          // Theme cover image (square), must be present and fixed in position
│   ├── js/
│   │   └── app.js
│   └── css/
│       └── style.css
├── portal/             // Portal view folder
├── users/              // User view folder
├── groups/             // Group view folder
├── hashtags/           // Hashtag view folder
├── posts/              // Post view folder
├── comments/           // Comment view folder
├── profile/            // User profile view folder
├── search/             // Search view folder
├── account/            // Account view folder
├── follows/            // Follow view folder
├── messages/           // Message view folder
├── editor/             // Editor view folder
├── functions.blade.php // Theme Functions
├── private.blade.php   // Private Mode Tip Page
├── error.blade.php     // Error Message Page
└── theme.json          // Theme configuration file, responsible for defining the base properties of the theme
```

The theme file and directory structure are defined by Engine, and different engines have different technical solutions, so the file and directory structure will be different. Please read the documentation provided by Engine for details.

See the [path structure](structure.md) for the theme specification of Fresns official engine.


## File Publish

When the theme is installed, the static resources are published to the `public` directory.

| Theme Folder | Publish to the site resource directory |
| --- | --- |
| /extensions/themes/`{unikey}`/assets/ | /public/assets/themes/`{unikey}`/ |
| Other File | No Publish |


## theme.json Config File

- As the theme template is also the mode of warehousing management, the "installation" uses the configuration file of the plug-in to process the warehousing of the theme template information.

```json
{
    "unikey": "ThemeDemo",
    "name": "Theme Demo",
    "description": "This is the demo theme",
    "author": "Jarvis Tang",
    "authorLink": "https://github.com/jarvis-tang",
    "version": "1.0.0",
    "functions": true, // Availability of setting function
    "functionKeys": [
        // Configuration key name of the set function, used in conjunction with functions.blade.php
        {
            "itemKey": "theme_menu_name",
            "itemType": "string",
            "itemTag": "themes",
            "isMultilingual": true,
        },
        {
            "itemKey": "themeSet",
            "itemType": "string",
            "itemTag": "themes",
            "isMultilingual": false,
        },
        {
            "itemKey": "themeSelect",
            "itemType": "string",
            "itemTag": "themes",
            "isMultilingual": false,
            "options": [
                {
                    "label": "option1",
                    "value": "1"
                },
                {
                    "label": "option2",
                    "value": "2"
                },
                {
                    "label": "option3",
                    "value": "3"
                }
            ]
        }
    ]
}
```

## functions.blade.php Settings

[Theme template settings](functions.md) file is responsible for defining the theme template's own configuration items. There are four configuration types.

1. General form tag: Type is input, textarea, select
2. Upload file html tag: Type is input type="file"
3. Multilingual html tag: Type is input or textarea
4. associated plugin html tag: Type is select or select multiple

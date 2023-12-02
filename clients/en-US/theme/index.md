# Theme Development

The integrated web client that runs in Fresns uses the [Laravel Blade](https://laravel.com/docs/10.x/blade) template engine and follows the Blade feature and view files.

## Directory Structure

```php
ThemeDemo/          // Theme template folder (named after fskey)
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
├── geotags/            // Geotag view folder
├── posts/              // Post view folder
├── comments/           // Comment view folder
├── timelines/          // Timeline view 
├── nearby/             // Nearby view folder
├── me/                 // Me view folder
├── messages/           // Message view folder
├── profile/            // User profile view folder
├── search/             // Search view folder
├── editor/             // Editor view folder
├── functions.blade.php // Theme Functions
├── error.blade.php     // Error Message Page
├── 404.blade.php       // 404 Page
└── theme.json          // Theme configuration file, responsible for defining the base properties of the theme
```

## File Publish

When the theme is installed, the static resources are published to the `public` directory.

| Theme Folder | Publish to the site resource directory |
| --- | --- |
| /themes/`{fskey}`/assets/ | /public/assets/`{fskey}`/ |
| Other File | No Publish |


## theme.json Config File

- As the theme template is also the mode of warehousing management, the "installation" uses the configuration file of the plug-in to process the warehousing of the theme template information.

```json
{
    "fskey": "ThemeDemo",
    "name": "Theme Demo",
    "description": "This is the demo theme",
    "author": "Jevan Tang",
    "authorLink": "https://github.com/jevantang",
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

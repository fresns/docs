# Theme Functions

Theme template settings file is responsible for defining the theme template's own configuration items. There are four configuration types.

| View File | Description |
| --- | --- |
| functions.blade.php | Theme Function View Template |

## Variables

| Variable | Description |
| --- | --- |
| `$params` | From `theme.json` configuration file `functionItems` |
| `$fileUrls` | The `$params` file type configuration item, processed as a URL value. |
| `$lang` | From `theme.json` configuration file `functionLang` |
| `$apps` | From the list of installed applications (plugins and apps) |
| `$languageStatus` | System language on status `language_status` |
| `$languageMenus` | System language menu list `language_menus` |
| `$defaultLanguage` | System default language tag `default_language` |

## Interface

| Method | Endpoint Path | Route Name | Description |
| --- | --- | --- | --- |
| `PUT` | /api/theme/`{fskey}`/functions | fresns.api.functions | Update [Config Item](https://docs.fresns.com/open-source/database/systems/configs.html) Values |

- Request: `multipart/form-data`
- Submit: `ajax` or `form submit`

```php
route('fresns.api.functions', [
    'fskey' => '' // theme fskey
])
```

## Form

```html
<form action="{{ route('fresns.api.functions', ['fskey' => 'ThemeFrame']) }}" method="post" enctype="multipart/form-data">
    @csrf
    @method('put')

    <!-- input: item_key=fs_theme_name -->
    <input type="text" name="fs_theme_name" value="{{ $params['fs_theme_name'] }}">

    <!-- textarea: item_key=fs_theme_intro -->
    <textarea name="fs_theme_intro">{{ $params['fs_theme_intro'] }}</textarea>

    <!-- input file: item_key=fs_theme_logo -->
    <input type="file" name="fs_theme_logo" value="{{ $params['fs_theme_logo'] }}">
    <!-- or -->
    <input type="url" name="fs_theme_logo" value="{{ $params['fs_theme_logo'] }}">

    <!-- select: item_key=fs_theme_type -->
    <select name="fs_theme_type">
        <option value="" {{ $params['fs_theme_type'] == '' ? 'selected' : '' }}>Null</option>
        <option value="1" {{ $params['fs_theme_type'] == '1' ? 'selected' : '' }}>One</option>
        <option value="2" {{ $params['fs_theme_type'] == '2' ? 'selected' : '' }}>Two</option>
    </select>

    <!-- select multiple: item_key=fs_theme_types -->
    <select name="fs_theme_types" multiple>
        <option value="" {{ $params['fs_theme_type'] == '' ? 'selected' : '' }}>Null</option>
        <option value="1" {{ $params['fs_theme_type'] == '' ? 'selected' : '' }}>One</option>
        <option value="2" {{ $params['fs_theme_type'] == '' ? 'selected' : '' }}>Two</option>
    </select>

    <!-- plugin select multiple: item_key=fs_theme_plugins -->
    @foreach($params['fs_theme_plugins'] as $plugin)
        <input type="text" name="fs_theme_plugins[{{ $plugin['code'] }}][code]">
        <select name="fs_theme_plugins[{{ $plugin['fskey'] }}][fskey]">
            @foreach($apps as $app)
                <option value="{{ $app->fskey }}" {{ $app->fskey == $plugin['fskey'] ? 'selected' : '' }}>{{ $app->name }}</option>
            @endforeach
        </select>
        <input type="number" name="fs_theme_plugins[{{ $plugin['order'] }}][order]">
    @endforeach

    <button type="submit">Save</button>
</form>
```

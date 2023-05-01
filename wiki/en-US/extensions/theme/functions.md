# Theme Functions

Theme template settings file is responsible for defining the theme template's own configuration items. There are four configuration types.

1. General form tag: Type is input, textarea, select
2. Upload file html tag: Type is input type="file"
3. Multilingual html tag: Type is input or textarea
4. associated plugin html tag: Type is select or select multiple

| View File | Description |
| --- | --- |
| functions.blade.php | Theme Function View Template |

## form

```html
<form action="{{ route('panel.theme.functions.update', ['theme' => 'ThemeFrame']) }}" method="post" enctype="multipart/form-data">
    @csrf
    @method('put')

    <!-- input: item_key=fs_theme_name -->
    <input type="text" name="fs_theme_name" value="{{ $params['fs_theme_name']['value'] ?? '' }}">

    <!-- textarea: item_key=fs_theme_intro -->
    <textarea name="fs_theme_intro">{{ $params['fs_theme_intro']['value'] ?? '' }}</textarea>

    <!-- input file: item_key=fs_theme_logo -->
    <input type="hidden" name="fs_theme_logo" value="{{ $params['fs_theme_logo']['value'] }}">
    <input type="file" name="fs_theme_logo_file">
    <input type="url" name="fs_theme_logo_url">

    <!-- select: item_key=fs_theme_type -->
    <select name="fs_theme_type">
        <option value="">Null</option>
        <option value="1">One</option>
        <option value="2">Two</option>
    </select>

    <!-- select multiple: item_key=fs_theme_types -->
    <select name="fs_theme_types" multiple>
        <option value="">Null</option>
        <option value="1">One</option>
        <option value="2">Two</option>
    </select>

    <!-- plugin select multiple: item_key=fs_theme_plugins -->
    @foreach($params['fs_theme_plugins']['value'] ?? [] as $key => $item)
        <input type="text" name="fs_theme_plugins[{{$key}}][code]">
        <select name="fs_theme_plugins[{{$key}}][plugin]">
            <option value="">Null</option>
            <option value="1">One</option>
            <option value="2">Two</option>
        </select>
    @endforeach

    <button type="submit">Save</button>
</form>

<!-- plugin select multiple: template -->
<template id="pluginTemplate">
    <input type="text" class="form-control plugin-code" name="">
    <select class="form-select plugin-fskey" name="">
        <option selected disabled>Please select the plugin</option>
        <option value="">Null</option>
        <option value="1">One</option>
        <option value="2">Two</option>
    </select>
</template>
```

## Multilingual form: input

```html
<!-- Get multilingual data -->
{{ json_encode($params['fs_theme_title']['languages'] ?? []) }}

<!-- Value of the default language -->
{{ $params['fs_theme_title']['defaultLanguage'] ?? '' }}
```

```html
<!-- model(multi-language input): item_key=fs_theme_title -->
<form action="{{ route('panel.theme.functions.update.languages') }}" method="post">
    @csrf
    @method('put')

    <input type="hidden" name="theme" value="ThemeFrame">
    <input type="hidden" name="key" value="fs_theme_title">

    @foreach ($optionalLanguages as $lang)
        {{ $lang['langTag'] }}
        {{ $lang['langName'] }}

        @if ($lang['areaName'])
            {{ '('.$lang['areaName'].')' }}
        @endif

        @if ($lang['langTag'] == $defaultLanguage) Default Language @endif

        <input type="text" name="languages[{{ $lang['langTag'] }}]" value="">
    @endforeach

    <button type="submit">Save</button>
</form>
```

## Multilingual form: textarea

```html
<!-- Get multilingual data -->
{{ json_encode($params['fs_theme_desc']['languages'] ?? []) }}

<!-- Value of the default language -->
{{ $params['fs_theme_desc']['defaultLanguage'] ?? '' }}
```

```html
<!-- model(multi-language textarea): item_key=fs_theme_desc -->
<form action="{{ route('panel.theme.functions.update.languages') }}" method="post">
    @csrf
    @method('put')

    <input type="hidden" name="theme" value="ThemeFrame">
    <input type="hidden" name="key" value="fs_theme_desc">

    @foreach ($optionalLanguages as $lang)
        {{ $lang['langTag'] }}
        {{ $lang['langName'] }}

        @if ($lang['areaName'])
            {{ '('.$lang['areaName'].')' }}
        @endif

        @if ($lang['langTag'] == $defaultLanguage) Default Language @endif

        <textarea name="languages[{{ $lang['langTag'] }}]"></textarea>
    @endforeach

    <button type="submit">Save</button>
</form>
```

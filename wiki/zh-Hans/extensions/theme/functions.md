# 主题功能

主题模板设置文件，负责定义主题模板自己的配置项，共有四种配置类型。

- 1、常规表单组件：组件为 input、textarea、select
- 2、上传文件组件：组件为 input type="file"
- 3、多语言组件：组件为 input 或 textarea
- 4、关联插件组件：组件为 select 或 select multiple

| 模板文件 | 介绍 |
| --- | --- |
| functions.blade.php | 主题功能视图模板 |

## 表单

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
        <input type="number" name="fs_theme_plugins[{{$key}}][order]">
    @endforeach

    <button type="submit">Save</button>
</form>

<!-- plugin select multiple: template -->
<template id="pluginTemplate">
    <input type="text" class="plugin-code" name="">
    <select class="plugin-fskey" name="">
        <option selected disabled>请选择关联插件</option>
        <option value="">Null</option>
        <option value="1">One</option>
        <option value="2">Two</option>
    </select>
    <input type="number" class="plugin-order" name="">
</template>
```

## 多语言表单：单行输入

```html
<!-- 获取多语言数据 -->
{{ json_encode($params['fs_theme_title']['languages'] ?? []) }}

<!-- 默认语言的值 -->
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

        @if ($lang['langTag'] == $defaultLanguage) 默认语言 @endif

        <input type="text" name="languages[{{ $lang['langTag'] }}]" value="">
    @endforeach

    <button type="submit">保存</button>
</form>
```

## 多语言表单：多行输入

```html
<!-- 获取多语言数据 -->
{{ json_encode($params['fs_theme_desc']['languages'] ?? []) }}

<!-- 默认语言的值 -->
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

        @if ($lang['langTag'] == $defaultLanguage) 默认语言 @endif

        <textarea name="languages[{{ $lang['langTag'] }}]"></textarea>
    @endforeach

    <button type="submit">保存</button>
</form>
```

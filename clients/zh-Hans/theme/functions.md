# 主题功能

主题模板设置文件，负责定义主题模板自己的配置项。

| 模板文件 | 介绍 |
| --- | --- |
| functions.blade.php | 主题功能视图模板 |

## 变量

| 变量名 | 介绍 |
| --- | --- |
| `$params` | 来自 `theme.json` 配置文件 `functionItems` |
| `$fileUrls` | `$params` 里文件类型配置项，处理成 URL 值 |
| `$lang` | 来自 `theme.json` 配置文件 `functionLang` |
| `$apps` | 来自已安装的应用列表（插件、应用） |
| `$languageStatus` | 系统语言开启状态 `language_status` |
| `$languageMenus` | 系统语言菜单列表 `language_menus` |
| `$defaultLanguage` | 系统默认语言标签 `default_language` |

## 接口

| 请求方式 | 接口路径 | 路由名 | 介绍 |
| --- | --- | --- | --- |
| `PUT` | /api/theme/`{fskey}`/functions | fresns.api.functions | 更新 [Config Item](https://docs.fresns.com/open-source/database/systems/configs.html) 配置值 |

- 传参方式: `multipart/form-data`
- 提交方式: `ajax` 或者 `form submit`

```php
route('fresns.api.functions', [
    'fskey' => '' // theme fskey
])
```

## 表单

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

## 视图框架

```blade
@extends('ThemeFunctions::layout')

@section('body')
    {{-- form --}}
@endsection

@push('style')
    {{-- css --}}
@endpush

@push('script')
    {{-- js --}}
@endpush
```

# Toolkit

```js
import { ... } from '/sdk/utilities/toolkit';
```

## Retrieve values from multidimensional arrays or objects using dot notation.

```js
dataGet(data, 'key.key', 'defaultValue');
```

## Get the route of the current page.

```js
getCurrentPageRoute();
```

## Get the URL of the current page along with its parameters.

```js
getCurrentPageUrl();
```

## Invoke functions defined on the current page within components.

```js
callPageFunction('functionName', 'argument', '...');
```

## Invoke functions defined on the previous page from the current page or component.

```js
callPrevPageFunction('functionName', 'argument', '...');
```

## Invoke functions defined on a specific page.

```js
callSpecificPageFunction('route', 'functionName', 'argument', '...');
```

## Invoke methods on components located in the previous page.

```js
callPrevPageComponentMethod('componentName', 'functionName', 'argument', '...');
```

## Invoke methods on components within a specific page.

```js
callSpecificPageComponentMethod('route', 'componentName', 'functionName', 'argument', '...');
```

## Parse URL query parameters into a JSON object.

```js
parseUrlParams('urlParams');
```

## Replace group information within a hierarchical tree structure.

```js
replaceGroupTreeInfo('treeData', 'queryGid', 'newGroupInfo');
```

## Truncate and filter textual content.

```js
truncateText('content', 'length', 'retainRichText');
```

## Generate a random string of specified length.

```js
generateRandomString('length');
```

## Determine whether a value is empty, including objects or arrays.

```js
isEmpty('value');
```

## Compare two semantic version numbers.

```js
versionCompare('versionA', 'versionB');
```

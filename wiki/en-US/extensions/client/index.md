# Client Development

Application developed based on the main program [API](../api/) can be independent websites, APPs, WeChat mini programs, fast applications and other forms. If the API of the main program does not meet the requirements, you can install or develop extension plug-ins to add APIs, or manage the equivalent configuration of client applications.

## Web Client

### Standalone Deploy

If your client is a standalone deployment such as Vue, React or other technical solutions, it is just as easy to read the [API documentation](../api/) as it is for an app.

### Run in Fresns

If your client is integrated to run in Fresns, you will need to develop the [web engine](../plugin/engine.md) as a plugin, or develop a theme template based on an existing engine that meets their view criteria.

For example, [FresnsEngine](https://marketplace.fresns.com/open-source/detail/FresnsEngine) is used as the web client runtime support and the following development standards are in place.

- The FresnsEngine client-side technology solution is the **Laravel Blade** template engine, which develops the views (themes) of the FresnsEngine engine with a client-side mindset.
- [Introduction](../theme/)
- [Structure](../theme/structure.md)
- [Template Tags](../theme/tags.md)
- [Theme Functions](../theme/functions.md)

## App Client

Please read the [API documentation](../api/) to develop an app client based directly on the API.

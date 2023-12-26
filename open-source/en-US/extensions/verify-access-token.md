# Verify Access Token

If the plug-in page needs to verify the user's login identity, you can add the authorization variable name to the path, and the client will generate and use the path authorization when accessing. See the description of [callback path variable name](https://docs.fresns.com/clients/reference/callback/variables.html) for details.

## Cmd Word

Get the parameters in the plug-in URL and send them to the command word [verifyAccessToken](../supports/cmd-words/basic.md#verifyAccessToken) for verification.

```php
\FresnsCmdWord::plugin('Fresns')->verifyAccessToken($wordBody);
```

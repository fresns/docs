# Verify URL Sign

If the plug-in page needs to verify the user's login identity, you can add the signature variable name to the path, and the client will generate and use the path signature when accessing. See the description of [callback path variable name](../callback/variables.md) for details.

## Cmd Word

Get the parameters in the plug-in URL and send them to the command word [verifyUrlSign](../../supports/cmd-word/basic.md#verifyurlsign) for verification.

```php
\FresnsCmdWord::plugin('Fresns')->verifyUrlSign($wordBody)
```

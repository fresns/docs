# Login

- Registration and login logic is consistent.
- When accessing the Account Centre, you are automatically redirected to the login page if you are not logged in.
- The loginToken parameter is retrieved on both the login and registration pages after the business process has been completed.

## Web Client

- 1. Get the account settings from the [account_login_service](configs.md#account) global configuration item.
- 2. Replace the path variable with the [extension callback](callback/variables.md) logic to get the final login page URL.
- 3. Use an `iframe` to access the URL page and the user will login on the login page.
- 3. Access to the login page
    - Method 1: Use `iframe` to access the login page.
    - Method 2: Go directly to the login page (current window or new window).
- 4. Listening callbacks (both methods must be supported)
    - Method 1: Listen for the [postMessage](callback/index.md#postmessage-intro) message and get the `loginToken` parameter.
    - Method 2: Use `URL` to get the `loginToken` parameter.
- 5. Request login interface with `loginToken` parameter [/api/fresns/v1/account/auth-token](../api/account/login.md)
- 6. Retrieve account auth token after successful login
    - **aid**: `data.authToken.aid`
    - **aidToken**: `data.authToken.aidToken`
    - **uid**: `data.authToken.uid`
    - **uidToken**: `data.authToken.uidToken`

::: details Use `URL` to get the `loginToken` parameter
- The `{redirectUrl}` variable in the login page path supports the `{loginToken}` variable name.
- When login is complete, if the login page is no longer in the `iframe`, it will be redirected back via `{redirectUrl}`.
- If there is a `{loginToken}` variable name in the `{redirectUrl}` address before the jump, it will be replaced with the login credentials.
- The landing page gets the `loginToken` and handles the rest of the process.
:::

## App Client

- 1. Get the account settings from the [account_login_service](configs.md#account) global configuration item.
- 2. Replace the path variable with the [extension callback](callback/variables.md) logic to get the final login page URL.
- 3. Use an `WebView` to access the URL page and the user will login on the login page.
- 4. Listen for the [postMessage](callback/index.md#postmessage-intro) message and get the `loginToken` parameter.
- 5. Request login interface with `loginToken` parameter [/api/fresns/v1/account/auth-token](../api/account/login.md)
- 6. Retrieve account auth token after successful login
    - **aid**: `data.authToken.aid`
    - **aidToken**: `data.authToken.aidToken`
    - **uid**: `data.authToken.uid`
    - **uidToken**: `data.authToken.uidToken`

## Switch Users

- 1. If the [account detail](data/account.md) have more than one user, you can switch logins using the user detail.
- 2. Request login interface by `uidOrUsername` [/api/fresns/v1/user/auth-token](../api/user/login.md)
- 3. After successful login, replace the user token
    - **uid**: `data.authToken.uid`
    - **uidToken**: `data.authToken.uidToken`

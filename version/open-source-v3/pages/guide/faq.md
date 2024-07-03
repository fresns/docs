# FAQ

- Visit the official interactive community "[Guide](https://discuss.fresns.org/group/guide)" and "[Install and Use (Digest Content)](https://discuss.fresns.org/group/use?allDigest=1)" group to browse through all the FAQ solutions.
- The following is a list of how-to guides.

## Must Read

- [Ways to share Fresns error messages](https://discuss.fresns.org/post/4IJjps9p)
- [Path to Fresns administrator panel login page](https://discuss.fresns.org/post/Y7fyxKMs)
- [Fresns Client (User Interface) Instructions for Use](https://discuss.fresns.org/post/V2VphDSx)

## Environmental issues

- [Timezone anomalies due to Daylight Saving Time can be ignored.](https://discuss.fresns.org/post/h8ZIjVAZ)
- [404 Page Not Found](https://discuss.fresns.org/post/X3JF7qRf)
- [500 Internal Server Error](https://discuss.fresns.org/post/Cp8JUfzQ)
- [502 Bad Gateway](https://discuss.fresns.org/post/sh2EQ8I0)

## Instructions for use

- [Introduction to Fresns Client Channel Default Parameter Configuration](https://discuss.fresns.org/post/NTBRTFwa)
- [Utilize Octane to increase the running speed of Fresns by more than tenfold](https://discuss.fresns.org/post/h1yPOkf1)

## Reset Admin Password

- Enter the Fresns root directory in the terminal and execute the following command to reset the system administrator password.

```sh
php artisan fresns:reset-password
```

## Terminal Cache Clear

- If you are unable to manage the cache through the administrator panel, you can clear the cache by executing the following commands in the terminal.

```sh
php artisan cache:clear     # Clear data cache

php artisan config:clear    # Clear framework configuration cache
php artisan route:clear     # Clear route cache

php artisan config:cache    # Clear and regenerate framework configuration cache
php artisan route:cache     # Clear and regenerate route cache
```

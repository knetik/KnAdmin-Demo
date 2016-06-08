# KnetikAdminCore

### OAuth Setup
set your Oauth configurations in src/client/app/oauth/oauth.module.js

(function () {
    'use strict';
    angular.module('OauthConfig', [])
        .constant('OAUTH_CONFIG', {
            baseUrl: 'http://dev.fanclash.com:8080/rest/',
            clientId: 'knetik',
            clientSecret: 'superSUPERsuperSECRET',
            grantPath: '/oauth/token',
            revokePath: '/oauth/revoke'
        });
})();


## License

MIT

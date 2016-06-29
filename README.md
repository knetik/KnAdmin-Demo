# KnetikAdminCore

### OAuth Setup
set your Oauth configurations in src/client/app/oauth/oauth.config.js
(function () {
    'use strict';
    angular.module('OauthConfig')
        .constant('OAUTH_CONFIG', {
            baseUrl: 'http://dev.admin.skeleton.knetik.com:8080/rest/',
            clientId: 'knetik',
            clientSecret: 'superSUPERsuperSECRET',
            grantPath: '/oauth/token',
            revokePath: '/oauth/revoke'
        });
})();

### Set up dev environment
- install node, npm, gulp, bower
- run npm install
- run gulp


### Production Deployment
- run gulp build and point web server to the build folder.


## License

MIT

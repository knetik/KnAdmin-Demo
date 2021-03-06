(function () {
    'use strict';

    const JSAPI_BASE_URL = 'http://jsapi3-integration.knetik.com/'; //The default base url.

    angular.module('OauthConfig')
        .constant('OAUTH_CONFIG', {
            baseUrl: getJsapiUrl(),
            clientId: 'knetik',
            //clientSecret: 'superSUPERsuperSECRET' //Enable this if the environment requires a client_secret
            grantPath: '/oauth/token',
            revokePath: '/oauth/revoke'
        });

    function getJsapiUrl () {
        let url = JSAPI_BASE_URL;
        
        if(window.location.href.indexOf('localhost') < 0) {
            url = window.location.href
                .replace('admin.', '');

            url = url.substring(0, thirdIndexOf(url, '/'));
        }
        if(url[url.length-1] !== '/') {
            url += '/';
        }
        return url;
    }

    function thirdIndexOf(string, char) {

        let count = 0;
        let index = -1;

        for(let i = 0; i < string.length; i++) {
            if(string[i] === char) {
                count++;
                index = i;
            }
            if(count === 3) {
                break;
            }
        }

        return index;

    }

})();



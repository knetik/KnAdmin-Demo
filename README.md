# KnAdmin
###The Core functionality for Knetik's Admin.

TLDR: 
    - 1: npm install
    - 2: bower install
    - 3: gulp
    
    
###Prerequisites
    - Node >= v4.4.7
    - NPM >= 3.10.3
    - Bower >= 1.7.9
    - Gulp-CLI >= 1.2.1
    - SSH Access to repo https://github.com/knetikmedia/KnAdmin
    - SSH Access to repo https://bitbucket.org/knetikmedia/angular-components
    
###Setup
    - git clone git@github.com:knetikmedia/KnAdmin.git
    - cd into project
    - Set your KnAdmin dependency to the tag that your project wants at ./bower.json
    - npm install
    - bower install
        - If asked what version of angular to choose, pick a version >= 1.5.8. Usually option 2
    
    - Running locally,
        - run "gulp" 
    - Building for Production
        - run "gulp build"
    - Run the production build locally (SHOULD only be for dev purposes)"
        - run "gulp serve-build"
        
        

###OAuth Setup
Admin is considered the UI for JSAPI. 

The JSAPI configuration can be found at src/client/app/oauth/oauth.config.js

For local development by default, Admin points to jsapi3-integration box (At the time of writing this: 'http://jsapi3-integration.knetik.com').

If used in production, Admin will take the JSAPI URL from the window's url. The pattern for production is:

    - Admin URL: https://admin.${PROJECT_NAME}.knetik.com/
    
    - JSAPI URL: https://${PROJECT_NAME}.knetik.com/
    
    - Admin will remove the string 'admin.' from the window url and set that as the jsapi base url.
    

### Side Menu Set Up
To set up your Side Bar Menu you can edit src/client/app/sections/sections.constants.js. This will allow you to specify which order and which sections appear in the Project's Admin. Including new ones specific to admin.

### Project specific sections
KnAdminCore is a wrapper around the bsae KnAdmin project that defines all the core functionality that Knetik provides
"Out of the box". If your project needs additional Admin screens, you SHOULD add them under the "sections" folder in 
the ProjcetAdmin angular module.

The intention of the KnAdmin dependency is for projects to NOT change the functionality of the core admin, however; Project Admin can achieve this and SHOULD only do so if absolutely necessary. 

    - Project Admins can override the $templateCache at a path to the template that you want to override.
        You can then update the template to meet your project's needs. If you wish to add project specific logic to the
        template, you can add a component inside of the view. 
    
    - NOTE: All templates being overrode by a projcet must be compatible with the controller/component that uses 
        the template.

## License

MIT


# Deployment Process
    - gulp build
        - This will uglify and babelify your JS and compile your LESS to CSS and put it in the "build" folder
    - Set the version in bower.json to whatever tag you are building.
    - git commit -m "Built for tag: x.y.z"
    - git push origin master
    - git tag x.y.z && git push --tags

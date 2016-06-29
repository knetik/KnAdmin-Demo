/* global toastr:false, moment:false */
(function () {
    'use strict';

    angular
        .module('SectionsModule')
        .constant('SIDEBAR_MENUS', [{
            name: 'Dashboard',
            state: 'dashboard',
            icon: 'fa fa-dashboard',
            sort: 1,
            items: false
        },{
            name: 'Platform Management',
            icon: 'fa fa-gear',
            sort: 2,
            items: [{
                state: 'configList',
                icon: 'fa fa-cog'
            }, {
                state: 'currencyList',
                icon: 'fa fa-money'
            }, {
                state: 'jobControlList',
                icon: 'fa fa-tasks'
            }, {
                state: 'lookAndFeelEdit',
                icon: 'fa fa-paint-brush'
            }, {
                state: 'rolesList',
                icon: 'fa fa-lock'
            }, {
                state: 'mediaDefinitionsEdit',
                icon: 'fa fa-sitemap'
            }, {
                state: 'adminLogsList',
                icon: 'fa fa-info-circle'
            }]
        },{
            name: 'User Management',
            icon: 'fa fa-users',
            sort: 3,
            items: [{
                state: 'userList',
                icon: 'fa fa-user'
            },
                {
                    state: 'entitlementList',
                    icon: 'fa fa-gift'
                }, {
                    state: 'userTemplateCreate',
                    icon: 'fa fa-user-plus'
                }
            ]
        }, {
            name: 'Store Management',
            icon: 'fa fa-shopping-cart',
            sort: 4,
            items: [
                {
                    state: 'itemsList',
                    icon: 'fa fa-gift'
                },
                {
                    state: 'vendorsList',
                    icon: 'fa fa-briefcase'
                },
                {
                    state: 'itemTemplateList',
                    icon: 'fa fa-suitcase'
                },
                {
                    state: 'subscriptionsList',
                    icon: 'fa fa-rebel'
                },
                {
                    state: 'orderList',
                    icon: 'fa fa-inbox'
                },
                {
                    state: 'bundleList',
                    icon: 'fa fa-briefcase'
                },
                {
                    state: 'couponList',
                    icon: 'fa fa-tag'
                },
                {
                    state: 'salesList',
                    icon: 'fa fa-tag'
                },
                {
                    state: 'shippingItemList',
                    icon: 'fa fa-truck'
                }
            ]
        }, {
            name: 'BRE Management',
            icon: 'fa fa-cubes',
            sort: 5,
            items: [ {
                state: 'rulesList',
                icon: 'fa fa-balance-scale'
            }, {
                state: 'triggersList',
                icon: 'fa fa-flash'
            }, {
                state: 'triggerTypesList',
                icon: 'fa fa-flask'
            }, {
                state: 'globalVariablesList',
                icon: 'fa fa-globe'
            }]
        },{
            name: 'Gamification',
            icon: 'fa fa-gamepad',
            sort: 6,
            items: [{
                state: 'achievementsList',
                icon: 'fa fa-trophy'
            }]
        }, {
            name: 'Campaign Management',
            icon: 'fa fa-bullhorn',
            sort: 7,
            items: [{
                state: 'campaignsList',
                icon: 'fa fa-bullhorn'
            }, {
                state: 'challengesList',
                icon: 'fa fa-star'
            },{
                state: 'activityTypesList',
                icon: 'fa fa-calendar'
            }, {
                state: 'activitiesList',
                icon: 'fa fa-calendar'
            }, {
                state: 'eventsList',
                icon: 'fa fa-flag-checkered'
            }, {
                state: 'rewardsList',
                icon: 'fa fa-trophy'
            }]
        }, {
            name: 'Category Management',
            icon: 'fa fa-list',
            sort: 8,
            items: [{
                state: 'categoriesList',
                icon: 'fa fa-list'
            }]
        }, {
            name: 'Question Management',
            icon: 'fa fa-question',
            sort: 9,
            items: [{
                state: 'questionsList',
                icon: 'fa fa-question'
            }, {
                state: 'questionStatistics',
                icon: 'fa fa-bar-chart'
            }, {
                state: 'bulkList',
                icon: 'fa fa-question-circle'
            }]
        }, {
            name: 'Content Management',
            icon: 'fa fa-file-o',
            sort: 10,
            items: [{
                state: 'articleList',
                icon: 'fa fa-file-text-o'
            }, {
                state: 'pollsList',
                icon: 'fa fa-bar-chart'
            }]
        }, {
            name: 'Media Management',
            icon: 'fa fa-cloud',
            sort: 11,
            items: [{
                state: 'artistList',
                icon: 'fa fa-users'
            }, {
                state: 'assetList',
                icon: 'fa fa-clipboard'
            }, {
                state: 'reportList',
                icon: 'fa fa-warning'
            }]
        }, {
            name: 'Reports',
            icon: 'fa fa-file-text-o',
            sort: 12,
            items: [{

                state: 'executiveRevenue',
                icon: 'fa fa-bar-chart'
            }, {
                state: 'orderSummaries',
                icon: 'fa fa-pie-chart'
            },
                {
                    state: 'microTransactions',
                    icon: 'fa fa-angle-double-right'
                },
                {
                    state: 'inventory',
                    icon: 'fa fa-briefcase'
                }]
        }]);
})();

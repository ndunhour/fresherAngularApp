'use strict';

/* App Module */

var fresherApp = angular.module('fresherApp', [
  'ngRoute',
  'fresherAnimations',
  'fresherControllers',
  'fresherFilters'
  // 'fresherServices'
]);

fresherApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/ads', {
        templateUrl: 'partials/marketPlace.html',
        controller: 'MarketPlaceCtrl'
      }).
      when('/ads/:adId', {
        templateUrl: 'partials/ad-detail.html',
        controller: 'AdDetailCtrl'
      }).
      when('/createPost', {
        templateUrl: 'partials/createPost.html',
        controller: 'CreateCtrl'
      }).
      when('/fisherman', {
        templateUrl: 'partials/fisherman.html',
        controller: 'FishermanCtrl'
      }).
      when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'FishermanCtrl'
      }).
      otherwise({
        redirectTo: '/ads'
      });
  }]);

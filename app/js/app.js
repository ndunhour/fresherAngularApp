'use strict';

/* App Module */

var fresherApp = angular.module('fresherApp', [
  'ngRoute',
  'fresherAnimations',
  'fresherControllers',
  'fresherFilters',
  'fresherServices'
]);

fresherApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/ads', {
        templateUrl: 'partials/ad-list.html',
        controller: 'AdListCtrl'
      }).
      when('/ads/:adId', {
        templateUrl: 'partials/ad-detail.html',
        controller: 'AdDetailCtrl'
      }).
      when('/createPost', {
        templateUrl: 'partials/createPost.html',
        controller: 'CreateCtrl'
      }).
      otherwise({
        redirectTo: '/ads'
      });
  }]);

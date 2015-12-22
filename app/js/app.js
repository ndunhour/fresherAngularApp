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
        controller: 'DataCtrl'
      }).
      when('/ads/:adId', {
        templateUrl: 'partials/ad-detail.html',
        controller: 'AdDetailCtrl'
      }).
      otherwise({
        redirectTo: '/ads'
      });
  }]);

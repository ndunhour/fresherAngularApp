'use strict';

/* Services */

var fresherServices = angular.module('fresherServices', ['ngResource']);

fresherServices.factory('Ad', ['$resource',
  function($resource){
    return $resource('ads/:adId.json', {}, {
      query: {method:'GET', params:{adId:'ads'}, isArray:true}
    });
  }]);

fresherServices.service('dataService', function($http){
  this.getData = function(callbackFunc){
    return $http({
      method: 'GET',
      url: 'https://www.freshr-prod.elasticbeanstalk.com/angularApp',
      params: 'sort_by: date',
    });
  };
});

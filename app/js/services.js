'use strict';

/* Services */

var fresherServices = angular.module('fresherServices', ['ngResource']);

fresherServices.factory('Ad', ['$resource',
  function($resource){
    return $resource('ads/:adId.json', {}, {
      query: {method:'GET', params:{adId:'ads'}, isArray:true}
    });
  }]);




'use strict';

/* Controllers */

var fresherControllers = angular.module('fresherControllers', []);

fresherControllers.controller('AdListCtrl', ['$scope', 'Ad',
  function($scope, Ad) {
    $scope.ads = Ad.query();
    $scope.orderProp = 'age';
  }]);

fresherControllers.controller('AdDetailCtrl', ['$scope', '$routeParams', 'Ad',
  function($scope, $routeParams, Ad) {
    $scope.ads = Ad.get({adId: $routeParams.ads});
  }]);

fresherControllers.controller('CreateCtrl', ['$scope',
  function($scope){
    $scope.fish = {
      speciesSelect: null,
      species: [
        {id: '1', name: 'Ahi'},
        {id: '2', name: 'Blue Fin Tuna'},
        {id: '3', name: 'Mahi Mahi'}
      ]
    };
  }
  ]);
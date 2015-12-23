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
    var quantity = [];
    $scope.fish = {
      speciesSelect: null,
      sizeSelect: null,
      species: [
        {id: '1', name: 'Ahi'},
        {id: '2', name: 'Blue Fin Tuna'},
        {id: '3', name: 'Mahi Mahi'}
      ],
      size: [
        {id: '1', size: '0-10'},
        {id: '2', size: '10-20'},
        {id: '3', size: '20-30'}
      ],
      price: [],
      quant: quantity
    };
    for(var i=0; i<50; i++) {
      quantity.push({id: 'i', quantity: i});
    }
    $scope.fish.quantity = quantity;

  }
  ]);
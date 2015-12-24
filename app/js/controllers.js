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
    var price = [];
    $scope.fish = {
      speciesSelect: null,
      sizeSelect: null,
      locationSelect: null,
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
      per: ['Per Pound', 'Per Fish'],
      whole: ['Whole Fish', 'Filet Available'],
      location: [
        {id: '1', size: 'Town'},
        {id: '2', size: 'East'},
        {id: '3', size: 'Windward'},
        {id: '4', size: 'North Shore'},
        {id: '5', size: 'West Oahu'},
        {id: '5', size: 'Central Oahu'},
        {id: '6', size: 'All of Oahu'}
      ]

    };
    for(var i=0; i<50; i++) {
      quantity.push({id: i, quantity: i});
      price.push({id: i, price: '$ ' + i + '.00'});
    }
    $scope.fish.quantity = quantity;
    $scope.fish.price = price;

  }
  ]);

fresherControllers.controller('FishermanCtrl',['$scope',
  function($scope){
    $scope.user = {
      userName: "Name",
      userPhone: "Phone",
      location: "Location",
      licence: "Licence",
      bio: "Bio"
    };
  }]);
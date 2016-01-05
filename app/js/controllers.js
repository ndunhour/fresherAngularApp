'use strict';

/* Controllers */

var fresherControllers = angular.module('fresherControllers',[]);

// fresherControllers.controller('MarketPlaceCtrl', ['$scope', 'Ad',
//   function($scope, Ad) {
//     $scope.ads = Ad.query();
//     $scope.orderProp = 'age';
//   }]);

fresherControllers.controller('MarketPlaceCtrl',
  function($scope, $http){
    $scope.currentStep=1;
    $scope.defaultQuantity=1;
    $scope.ads={};
    $scope.getAd = function(){
      $http.get('/ads/posts.json')
      .success(function(response){
        $scope.ads = response.ads;
      })
      .error(function(response){
      });
    };
    $scope.getAd();
  });
// fresherControllers.controller("OrderCtrl",function($scope,$http){
//   $scope.currentStep=1;
//   $scope.defaultQuantity=1;
//   $scope.item={};
//   $scope.getItem = function(){
//   $http.get('http://localhost:8000/app/ads/posts.json')
//     .success(function(data, status, headers, config) {
//       $scope.item = data;
//     })
//     .error(function(data, status, headers, config) {
//     });
//   };

//   $scope.getItem();

//   });

fresherControllers.controller('FishermanCtrl',
  function($scope, $http){
    $http.get('http://localhost:8000/app/ads/posts.json')
    .success(function(response){
      $scope.fisherman = response.fisherman;
    });
  });


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
      ],
      additionalDetails: 'Additional Details'

    };
    for(var i=0; i<50; i++) {
      quantity.push({id: i, quantity: i});
      price.push({id: i, price: '$ ' + i + '.00'});
    }
    $scope.fish.quantity = quantity;
    $scope.fish.price = price;

  }
  ]);

// fresherControllers.controller('FishermanCtrl',['$scope',
//   function($scope){
//     $scope.fisherman = {
//       name: "Santa Claus",
//       phone: "808-555-5555",
//       location: "North Pole",
//       licence: "CDL Sled",
//       bio: "Bringing toys to the good kids"
//     };
//   }]);
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
    $scope.ad = Ad.get({adId: $routeParams.adId}, function(ad) {
      $scope.mainImageUrl = ad.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);

fresherControllers.controller('DataCtrl', function($scope, $http){
  $http.get("https://www.freshr-prod.elasticbeanstalk.com/angularApp")
  .success(function(reponse){
    $scope.data = reponse;
    console.log(reponse);
  });
});

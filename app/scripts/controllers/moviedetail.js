'use strict';

/**
 * @ngdoc function
 * @name rottenTomatoesTestApp.controller:MoviedetailCtrl
 * @description
 * # MoviedetailCtrl
 * Controller of the rottenTomatoesTestApp
 */
angular.module('rottenTomatoesTestApp')
  .controller('MoviedetailCtrl', function ($scope, movieObj) {
    $scope.movie = movieObj;
    
  });

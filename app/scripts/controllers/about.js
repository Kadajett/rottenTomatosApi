'use strict';

/**
 * @ngdoc function
 * @name rottenTomatoesTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the rottenTomatoesTestApp
 */
angular.module('rottenTomatoesTestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

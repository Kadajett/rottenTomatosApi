'use strict';

describe('Controller: MoviedetailCtrl', function () {

  // load the controller's module
  beforeEach(module('rottenTomatoesTestApp'));

  var MoviedetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MoviedetailCtrl = $controller('MoviedetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

//this is where the clients javascript will run from

angular.module('noteApp', []);

angular.module('noteApp').controller('mainController', ['$scope', '$filter', function($scope, $filter) {

  $scope.searchTerm = ''; //this points to vm 
  //$scope.term = '';
  $scope.lowercasehandle = function () {
    return $filter('lowercase')($scope.searchTerm);
  };
  //how do I take the search term and send back its match?
  $scope.terms = [
    {
      name: 'Layout',
      description: 'Layouts usually contain <!DOCTYPE html><html><head>....</head><body>) and conclusion (</body></html>). Then the original view file is included using <%- body %>. Layouts are never used without a view.'
    },
    {
      name: 'Rest',
      description: 'an architectural style for building APIs. Stands for Representational State Transfer. We decide that HTTP verbs and URLS mean something'
    },
    {
      name: 'Directive',
      description: 'an instruction to AngularJS to manipulate a part of the dom'
    }
  ]

}]);

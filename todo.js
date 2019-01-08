var todo = angular.module('todoModule', ['ngMaterial', 'ngMessages']);

todo.controller('todoController',function($scope){
  $scope.listItems=["Rice","wheet"];
  
  $scope.addItem = function() {
    $scope.listItems.push($scope.itemToAdd);
  }
  
  $scope.removeItem = function(item) {
    $scope.listItems.splice(item,1);
  }
})
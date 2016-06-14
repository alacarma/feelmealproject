
var todoApp = angular.module('todoApp',[]);
var model;
var model2;
var mealMode;

todoApp.run(function($http) {
    $http.get("http://localhost:3000/ws_todo/getTagsData").success(function(data){
        console.log(data);
        model = data;
    });
});

todoApp.run(function($http) {
    $http.get("http://localhost:3000/ws_todo/getTagsDetails").success(function(data){
        console.log(data);
        model2 = data;
    });
});

todoApp.controller('ToDoCtrl', function($scope, $http) {
    $http.get("http://localhost:3000/ws_todo/getTagsData")
    .then(function(response) {
        $scope.myWelcome = response.data;
        $scope.firstTag = response.data[1];
    });
});

todoApp.run(function($http) {
    $http.get("http://localhost:3000/ws_todo/getMealsData").success(function(data){
        console.log(data);
        mealMode = data;
    });
});
todoApp.controller('mealCtrl', function($scope, $http) {
    $http.get("http://localhost:3000/ws_todo/getMealsData")
    .then(function(response) {
        $scope.myMeals = response.data;
        $scope.firstMeal = response.data[0];
        $scope.scndMeal = response.data[1];
        $scope.thrdMeal = response.data[2];
        $scope.frthMeal = response.data[3]; 
    });
});

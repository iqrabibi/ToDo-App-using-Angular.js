var app=angular.module("ToDo",[]);
app.controller("ToDoController",['$scope',function($scope){
$scope.todos=[


];
$scope.reset = function() {
    $scope.todos = [];
}

$scope.addToDo=function(){

$scope.todos.push({"title":$scope.newTodo,'done':false})
$scope.newTodo=""
}
$scope.ClearCompleted=function(){
	$scope.todos=$scope.todos.filter(function(item){

return !item.done
			})

}

}])

app.controller("adminTodosCtrl",["$scope","$rootScope","servicioTodo", "$location",function($scope, $rootScope, servicioTodo, $location){
	init();

	function init(){

	}
	$scope.cuTodo = function (){
		console.log("probando ando");
		servicioTodo.crearTodo().save($scope.todoNuevo).$promise.then(function(datos){
      console.log(datos);
			$location.path("/");
    });
	}
	$scope.cancelar = function (){
			$location.path("/");
  }
}]);

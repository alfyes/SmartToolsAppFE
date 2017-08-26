app.controller("homeCtrl",["$scope","$rootScope","servicioTodo","$location", function($scope, $rootScope, servicioTodo,$location){
	init();

	function init(){
		console.log("Inicio esto");

		servicioTodo.traerTodos().query().$promise.then((datos)=>{
					$scope.todos = datos;
					console.log($scope.todos);
				});

	}
	$scope.agregarTodo = function (){
     $location.path("/adminTodos");
   }
}]);

app.service("servicioTodo",["fabConstans","$http","$q","$resource",function(fabConstans,$http,$q,$resource){
	var vm= this;
  //var dirServ = "http://52.88.20.109:8080/fabricetas/";
	var dirServ = fabConstans.URL_BASE_SERVICIOS;

	vm.traerTodos = function (){
		return $resource(dirServ + "todos/");
	}
	vm.crearTodo = function (){
		return $resource(dirServ + "todos/");
	}

}]);

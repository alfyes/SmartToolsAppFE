var app = angular.module('smartToolsApp', ['ngRoute','ngResource']);
app.value('fabConstans', {
    //URL_BASE_SERVICIOS:"http://52.88.20.109:8080/fabricetas/"
    URL_BASE_SERVICIOS:"http://192.168.1.6:3000/"
});

/*
{ 'get':    {method:'GET'},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} };
*/
app.config(function($routeProvider){

    $routeProvider.when("/",{
        controller:"homeCtrl",
        templateUrl:"views/home.html"
    })
    .when("/adminTodos",{
        controller:"adminTodosCtrl",
        templateUrl:"views/adminTodos.html"
    })
    .otherwise({
      redirectTo: '/login'
    });
});

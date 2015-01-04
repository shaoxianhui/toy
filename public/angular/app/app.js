'use strict';

var app = angular.module('app', ['ngRoute', 'appController']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {templateUrl: '/angular/views/welcome.html', controller: 'WelcomeCtrl'})
        .otherwise({redirectTo: '/'});
}]);

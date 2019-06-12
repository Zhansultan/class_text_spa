angular.module('class_text_spa', [
    'ui.router'
]).config(routeConfig);

routeConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

function routeConfig($stateProvider, $locationProvider, $urlRouterProvider){
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: '../views/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'vm'
        });
}
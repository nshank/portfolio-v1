'use strict';

angular.module('basecampApp', ['ngCookies','ngResource','ngSanitize','ngRoute'])
  .config(function ($routeProvider) {

    // $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/work/main.html',
      })
      .when('/work', {
        templateUrl: 'views/work/work.html',
      })
      .when('/cv', {
        templateUrl: 'views/work/cv.html',
      })
      .when('/hermes', {
        templateUrl: 'views/work/hermes.html',
      })
      .when('/splash', {
        templateUrl: 'views/work/splash.html',
      })
      .when('/cme', {
        templateUrl: 'views/work/cme.html',
      })
      .otherwise({
        redirectTo: 'views/work/main.html'
      });
  });
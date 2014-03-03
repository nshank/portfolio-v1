'use strict';

angular.module('basecampApp', ['ngCookies','ngResource','ngSanitize','ngRoute', 'angulartics', 'angulartics.google.analytics'])
  .config(function ($routeProvider) {

    // $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/basecamp/main.html',
      })
      .when('/work', {
        templateUrl: 'views/basecamp/work.html',
      })
      .when('/cv', {
        templateUrl: 'views/basecamp/cv.html',
      })
      .when('/hermes', {
        templateUrl: 'views/basecamp/hermes.html',
      })
      .when('/splash', {
        templateUrl: 'views/basecamp/splash.html',
      })
      .when('/cme', {
        templateUrl: 'views/basecamp/cme.html',
      })
      .otherwise({
        redirectTo: 'views/basecamp/main.html'
      });
  });
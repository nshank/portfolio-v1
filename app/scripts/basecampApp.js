'use strict';

angular.module('basecampApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])

  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/basecamp/main.html',
        // controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/basecamp/work.html',
        // controller: 'MainCtrl'
      })
      .when('/cv', {
        templateUrl: 'views/basecamp/cv.html',
        // controller: 'MainCtrl'
      })
      .when('/hermes', {
        templateUrl: 'views/basecamp/hermes.html',
        // controller: 'MainCtrl'
      })
      .when('/splash', {
        templateUrl: 'views/basecamp/splash.html',
        // controller: 'MainCtrl'
      })
      .when('/cme', {
        templateUrl: 'views/basecamp/cme.html',
        // controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: 'views/basecamp/main.html'
      });
  });

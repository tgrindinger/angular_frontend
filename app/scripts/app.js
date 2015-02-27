'use strict';

/**
 * @ngdoc overview
 * @name mytodoApp
 * @description
 * # mytodoApp
 *
 * Main module of the application.
 */
angular
  .module('mytodoApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular',
    'ui.sortable',

    'buses',
    'orgs',
    'packages',
    'sites'
  ])
  .config(function ($routeProvider, RestangularProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      });

    RestangularProvider.setBaseUrl('http://localhost:9292/api');

    RestangularProvider.setRequestInterceptor(function(elem, operation, what) {
      var retElem = elem;
      if (operation === 'post' || operation === 'put') {
        var wrapper = {};
	wrapper[what] = elem;
	retElem = wrapper;
      }
      return retElem;
    });

    RestangularProvider.setResponseInterceptor(function(elem, operation, what) {
      return elem[what];
    });
  });

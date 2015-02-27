'use strict';

var myApp = angular.module('buses', [])
  .config(function ($routeProvider) {
    angular.module('mytodoApp').Util.initRoutes($routeProvider, 'Bus', 'buses', 'bus');
  });

angular.module('mytodoApp').Util.initControllers(myApp, 'Bus', 'buses', 'bus');

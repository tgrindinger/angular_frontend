'use strict';

var myApp = angular.module('packages', [])
  .config(function ($routeProvider) {
    angular.module('mytodoApp').Util.initRoutes($routeProvider, 'Package', 'packages', '_package');
  });

angular.module('mytodoApp').Util.initControllers(myApp, 'Package', 'packages', '_package');

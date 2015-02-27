'use strict';

var myApp = angular.module('sites', [])
  .config(function ($routeProvider) {
    angular.module('mytodoApp').Util.initRoutes($routeProvider, 'Site', 'sites', 'site');
  });

angular.module('mytodoApp').Util.initControllers(myApp, 'Site', 'sites', 'site');

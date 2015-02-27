'use strict';

var myApp = angular.module('orgs', [])
  .config(function ($routeProvider) {
    angular.module('mytodoApp').Util.initRoutes($routeProvider, 'Org', 'orgs', 'org');
  });

angular.module('mytodoApp').Util.initControllers(myApp, 'Org', 'orgs', 'org');

'use strict';

angular.module('mytodoApp').Util = {

    initRoutes: function($routeProvider, singular, plural, item) {
        var resolveHash = {};
	resolveHash[item] = function(Restangular, $route) {
	    return Restangular.one(plural, $route.current.params.id).get();
	  };
	$routeProvider
	  .when('/' + plural, {
	    templateUrl: 'views/' + plural + '.html',
	    controller: singular + 'IndexCtrl'
	  })
	  .when('/' + plural + '/create', {
	    templateUrl: 'views/' + plural + '.create.html',
	    controller: singular + 'CreateCtrl'
	  })
	  .when('/' + plural + '/edit/:id', {
	    templateUrl: 'views/' + plural + '.edit.html',
	    controller: singular + 'EditCtrl',
	    resolve: resolveHash
	  });
    },

    initControllers: function(module, singular, plural, item) {
      module.controller(singular + 'IndexCtrl', ['Restangular', '$scope', function(Restangular, $scope) {
	  var resource = Restangular.all(plural);
	  resource.getList().then(function(collection) {
	    $scope[plural] = collection;
	  });
	}])
	.controller(singular + 'CreateCtrl', ['Restangular', '$scope', '$location', function(Restangular, $scope, $location) {
	  $scope.save = function() {
	    Restangular.all(plural).post($scope[item]).then(function() {
	      $location.path('/' + plural);
	    });
	  };
	}])
	.controller(singular + 'EditCtrl', ['Restangular', '$scope', item, '$location', function(Restangular, $scope, itemInst, $location) {
	  var original = itemInst;
	  $scope[item] = Restangular.copy(itemInst);

	  $scope.isClean = function() {
	    return angular.equals(original, $scope[item]);
	  };

	  $scope.save = function() {
	    Restangular.allUrl('.').customPUT($scope[item], plural).then(function() {
	      $location.path('/' + plural);
	    });
	  };
	}]);
    }
};

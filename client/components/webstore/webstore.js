'use strict';

angular.module('chatApp')
  .directive('webstore', function($http) {
    return {
      templateUrl: 'components/webstore/webstore.html',
      restrict: 'E',
      link: function(scope, element) {
        element.addClass('webstore');

        

        $http.get('API/products.json')
              .then(function (response) {
                scope.products = response.data;
                console.log(scope.products)
        });




      }
    };
  });

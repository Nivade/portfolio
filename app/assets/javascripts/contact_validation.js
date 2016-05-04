var contact_validation = angular.module('contact_validation', []);

contact_validation.controller('contact_validation_controller', function($scope) {
  $scope.submitForm = function() {
    if ($scope.contactForm.$valid) {
      alert('our form is amazing.');
    }
  }
});

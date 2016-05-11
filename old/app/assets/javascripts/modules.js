var search_module = angular.module('search', [])
search_module.controller('search-controller',
  function($scope) {
    $scope.items = [{
      title: "Karell",
      image: "placeholder.jpg"
    }, {
      title: "Hasdfasdfasdfee",
      image: "placeholder.jpg"
    }, {
      title: "Piet",
      image: "placeholder.jpg"
    }, {
      title: "Willem",
      image: "placeholder.jpg"
    }, {
      title: "Freek",
      image: "placeholder.jpg"
    }, {
      title: "Freddy",
      image: "placeholder.jpg"
    }, {
      title: "Fred",
      image: "placeholder.jpg"
    }, {
      title: "Henri",
      image: "placeholder.jpg"
    }];

    $scope.search = '';

    var regex;
    $scope.$watch('search', function (value) {
      regex = new RegExp('\\b' + escapeRegExp(value), 'i');
    });

    $scope.filterBySearch = function (name) {
      if (!$scope.search) return true;
      return regex.test(name.title);
    };
  }
);

var form_validation_module = angular.module('form-validation', [])
form_validation_module.controller('form-validation-controller',
  function($scope) {
    $scope.submit_form = function() {
      if ($scope.contact_form.$valid) {
        alert('our form is amazing.');
      }
    }
  }
);

angular.element(document).ready(function() {
  angular.bootstrap(document.getElementById("contact-form"), ["form-validation"]);
});




function escapeRegExp(string){
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

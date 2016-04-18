var app = angular.module('app', []);

app.controller('MainController', function($scope) {
  $scope.items = [{
      title: "Cake",
      image: "placeholder.jpg"
    }, {
      title: "Cabin",
      image: "placeholder.jpg"
    }, {
      title: "Party",
      image: "placeholder.jpg"
    },
  ];

  $scope.search = '';

  var regex;
  $scope.$watch('search', function (value) {
    regex = new RegExp('\\b' + escapeRegExp(value), 'i');
  });

  $scope.filterBySearch = function (name) {
    if (!$scope.search) return true;
    return regex.test(name.title);
  };

});

function escapeRegExp(string){
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

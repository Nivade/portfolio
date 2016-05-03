var app = angular.module('app', []);

app.controller('MainController', function($scope) {
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

angular.module('myApp.directives.footer', [])
  .directive('myAwesomeFooter' , function(){
    return {
      restrict:'E',
      transclude:true,
      templateUrl:"/templates/myAwesomeFooter.html",
      controller: function($scope){
        console.log("hi");
      }
    };
  });

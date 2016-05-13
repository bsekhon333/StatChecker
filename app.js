angular.module('myApp', ["ngAnimate" , "ui.bootstrap",'myApp.directives.footer'])
  .controller('myCtrl', function($scope){
    $scope.message = "Stats";
    $scope.players = [
      {first:'Demarcus', last:'Cousins', points:26.9, turnovers:3.8, blocks:1.2, steals:1.4, assists:3.4, rebounds:11.5, field:"46 PCT"},
      {first:'Rajon', last:'Rondo', points:11.9, turnovers:3.9, blocks:0.1, steals:2.0, assists:11.7, rebounds:6.0, field:"45 PCT"},
      {first:'Darren', last:'Collision', points:14, turnovers:1.8, blocks:0.1, steals:1.0, assists:4.3, rebounds:2.3, field:"48 PCT"},
      {first:'Ben', last:'Mclemore', points:7.8, turnovers:1.5, blocks:0.1, steals:0.8, assists:1.2, rebounds:2.2, field:"42 PCT"},
      {first:'Rudy', last:'Gay', points:17.2, turnovers:2.0, blocks:0.7, steals:1.4, assists:1.7, rebounds:6.5, field:"46 PCT"},
      {first:'Willie', last:'Cauley-Stein', points:7.0, turnovers:0.7, blocks:1.0, steals:0.7, assists:0.6, rebounds:5.3, field:"56 PCT"},
      {first:'Omri', last:'Caspi', points:11.8, turnovers:1.4, blocks:0.2, steals:0.8, assists:1.4, rebounds:5.9, field:"48 PCT"},
      {first:'Kosta', last:'Koufus', points:6.8, turnovers:0.6, blocks:0.9, steals:0.5, assists:0.4, rebounds:5.4, field:"11 PCT"},
      {first:'Caron', last:'Butler', points:3.7, turnovers:0.2, blocks:0.1, steals:0.5, assists:0.6, rebounds:1.3, field:"48 PCT"},
      {first:'Quincy', last:'Acy', points:5.2, turnovers:0.4, blocks:0.5, steals:0.5, assists:0.5, rebounds:3.2, field:"55 PCT"},
      {first:'Seth', last:'Curry', points:6.8, turnovers:0.8, blocks:0.1, steals:0.5, assists:1.5, rebounds:1.4, field:"45 PCT"},









    ];
    $scope.order = "last";
    $scope.showStuff = true;
    $scope.away = false;

  });

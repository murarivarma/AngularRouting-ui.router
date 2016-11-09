(function(){
    function homeCtrlFunction($scope, $state){
        //console.log($state);
        $scope.name = "Mr";
    }
    
    angular.module("home").controller("homeCtrl", ["$scope", "$state", homeCtrlFunction]);
})();
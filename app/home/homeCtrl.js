(function(){
    function homeCtrlFunction($scope, $state){
        console.log($state);
        $scope.name = "Brother Anil Kumar";
    }
    
    angular.module("home").controller("homeCtrl", ["$scope", "$state", homeCtrlFunction]);
})();
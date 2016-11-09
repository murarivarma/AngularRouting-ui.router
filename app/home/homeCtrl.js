(function(){
    function homeCtrlFunction($scope, $state){
        //console.log($state);
        $scope.name = "Mr";
        $scope.userData = $state.params.homeData;
    }
    
    angular.module("home").controller("homeCtrl", ["$scope", "$state", homeCtrlFunction]);
})();
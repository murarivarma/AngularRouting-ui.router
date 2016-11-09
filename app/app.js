(function(){
    
    function uiroutingConfigFunction($stateProvider, $urlRouterProvider){
        
        //Defining States
        var homeObj = {
            templateUrl : "app/home/home.html",
            url: "/home",
            controller: "homeCtrl"
        };
        
        //Registering States
        $stateProvider.state("home", homeObj);
    }
    
    angular.module("ui.routing App", ["header", "home", "login", "register", "ui.router"]);
    
    angular.module("ui.routing App").config(["$stateProvider", "$urlRouterProvider", uiroutingConfigFunction]);
})();
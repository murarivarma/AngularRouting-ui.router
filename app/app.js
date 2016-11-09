(function(){
    
    function uiroutingConfigFunction($stateProvider, $urlRouterProvider){
        
        //Defining States
        var homeObj = {
            templateUrl : "app/home/home.html",
            url: "/home",
            controller: "homeCtrl"
        };
        
        var loginObj = {
            templateUrl: "app/login/login.html",
            url: "/login"
        };
        
        //Registering States
        $stateProvider.state("home", homeObj);
        $stateProvider.state("login", loginObj);
    }
    
    angular.module("ui.routing App", ["header", "home", "login", "register", "ui.router"]);
    
    angular.module("ui.routing App").config(["$stateProvider", "$urlRouterProvider", uiroutingConfigFunction]);
})();
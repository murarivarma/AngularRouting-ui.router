(function(){
    
    function uiroutingConfigFunction($stateProvider, $urlRouterProvider){
        
        //Defining States
        var homeObj = {
            templateUrl : "app/home/home.html",
            url: "/home",
            controller: "homeCtrl",
            params: {homeData: ""}
        };
        
        var loginObj = {
            templateUrl: "app/login/login.html",
            url: "/login"
        };
        
        var registerObj = {
            templateUrl: "app/register/register.html",
            url: "/register",
            controller: "registerCtrl"
        };
        
        //Registering States
        $stateProvider.state("home", homeObj);
        $stateProvider.state("login", loginObj);
        $stateProvider.state("register", registerObj);
    }
    
    angular.module("ui.routing App", ["header", "home", "login", "register", "ui.router"]);
    
    angular.module("ui.routing App").config(["$stateProvider", "$urlRouterProvider", uiroutingConfigFunction]);
})();
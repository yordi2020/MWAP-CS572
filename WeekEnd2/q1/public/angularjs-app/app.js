angular.module("swimmerClub", ["ngRoute"]).config(config);
function config($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "angularjs-app/swim-list/swim-list.html",
      controller: "SwimmersController",
      controllerAs: "swimCtrl",
    })
    .when("/swimmerTeam/:id", {
      templateUrl: "angularjs-app/swim-display/swim-display.html",
      controller: "SwimmerDisplayController",
      controllerAs: "swimCtrl",
    })
    .when("/swimmerTeam/:id/edit", {
      templateUrl: "angularjs-app/swim-display/swim-display-edit.html",
      controller: "SwimDisplayEditController",
      controllerAs: "swimCtrl",
    })
    .otherwise({
      redirectTo: "/",
    });
}

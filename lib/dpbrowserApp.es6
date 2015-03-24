import angular from 'angular';
import router from 'angular-ui-router';
import state1Ctrl from './controllers/state1Ctrl';
import state2Ctrl from './controllers/state2Ctrl';

const dpbrowserApp = angular
  .module('dpbrowserApp', [router])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise("/state1");
    $stateProvider
      .state('state1', {
        url: "/state1",
        templateUrl: "lib/views/state1.html"
      })
      .state('state1.list', {
        url: "/list",
        templateUrl: "lib/views/state1.list.html",
        controller: state1Ctrl
      })
      .state('state2', {
        url: "/state2",
        templateUrl: "lib/views/state2.html"
      })
      .state('state2.list', {
        url: "/list",
        templateUrl: "lib/views/state2.list.html",
        controller: state2Ctrl
      });
  });

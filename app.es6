import angular from 'angular';
import ngAria from 'angular-aria';
import ngAnimate from 'angular-animate';
import ngMaterial from 'angular-material';
import router from 'angular-ui-router';

import dpbCtrl from './lib/controllers/dpbCtrl';

const dpbrowserApp = angular
  .module('dpbrowserApp', [ngAria, ngAnimate, ngMaterial, router])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "./lib/views/home.html",
        controller: dpbCtrl
      });
  });

/* IMPORTS */
import angular from 'angular';
import ngAria from 'angular-aria';
import ngAnimate from 'angular-animate';
import ngMaterial from 'angular-material';
import router from 'angular-ui-router';

/* CONTROLLERS */
import appCtrl from './lib/controllers/appCtrl';
import homeCtrl from './lib/views/home/homeCtrl';
import contactCtrl from './lib/views/contact/contactCtrl';

/* DIRECTIVES */
import header from './lib/components/header/headerDirective';
import footer from './lib/components/footer/footerDirective';

let dpbApp = angular
  .module('dpbApp', [ngAria, ngAnimate, ngMaterial, router])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: './lib/views/home/home.html',
        controller: homeCtrl
      })
      .state('contact', {
        url: '/contact',
        templateUrl: './lib/views/contact/contact.html',
        controller: contactCtrl
      });
  })
  .directive('myHeader', header)
  .directive('myFooter', footer);

dpbApp.controller('appController', appCtrl);

﻿'use strict';
var ootApp = angular.module('ootApp', [
      'ngRoute'
]).run(function ($rootScope) {
    $rootScope.canShow = true;
});

// Fix for platform-specific URL prefixing.
ootApp.config([
  '$compileProvider',
  function ($compileProvider) {
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|ghttps?|ms-appx|x-wmapp0):/);
      // Use $compileProvider.urlSanitizationWhitelist(...) for Angular 1.2
      $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|ms-appx|x-wmapp0):|data:image\//);
  }
]);


ootApp.config(['$routeProvider',
function ($routeProvider) {
    $routeProvider.
      when('/Home', {
          templateUrl: 'partials/Home.html',
          controller: 'HomeCtrl'
      }).
      when('/Register', {
          templateUrl: 'partials/Registration.html',
          controller: 'RegistrationCtrl'
      }).
     when('/Survey', {
         templateUrl: 'partials/Feedback.html',
         controller: 'FeedbackCtrl'
     }).
     when('/Contact', {
         templateUrl: 'partials/Contact.html',
         controller: 'ContactCtrl'
     }).
      otherwise({
          redirectTo: '/data'
      });
}]);


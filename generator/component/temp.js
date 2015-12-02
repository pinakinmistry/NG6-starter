import angular from 'angular';
import uiRouter from 'angular-ui-router';
import <%= name %>Component from './<%= name %>.component';

let <%= name %>Module = angular.module('<%= name %>', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('<%= name %>', {
      url: '/',
      template: '< <%= name %> ></ <%= name %> >'
    });
})

.directive('<%= name %>', <%= name %>Component);

export default <%= name %>Module;

<div id = "sidebar">
  <md-subheader class="md-no-sticky">Select a Section to Visit</md-subheader>
  <md-list-item ng-click="id" ng-repeat= "item in $ctrl.items" id="#{{item}}" ng-value= "item">
    <h3>{{item}}</h3>
    <md-divider></md-divider>
  </md-list-item>
</div>

<md-button ng-repeat= "button in $ctrl.buttons" ng-value = "button" style= "margin: 3px 3px 3px 3px" class="md-primary md-raised" ng-click="showConfirm($event)" id = '{{button.name}}'>
  {{button.name}}
</md-button>

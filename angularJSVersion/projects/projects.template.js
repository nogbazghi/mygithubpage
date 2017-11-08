<md-list-item class="md-1-line" ng-repeat = "project in $ctrl.projects" ng-value ="project" ng-click="showDialog($event)" id ="{{project.name}}">
  <div id ="{{project.name}}">
    <md-card-title-text>
          <span class="md-headline" >{{project.name}}</span>
        </md-card-title-text>
    </md-card-title>

    <md-divider></md-divider>
  </div>
</md-list-item>

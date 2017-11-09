<div ng-cloak>
  <md-content>
    <md-tabs md-dynamic-height md-border-bottom>
      <md-tab ng-repeat = "project in $ctrl.projects" ng-value ="project" label= "{{project.name}}">
        <md-content class="md-padding">
          <h1 class="md-display-2">{{project.name}}</h1>
          <h3>{{project.role}}</h3>
          <img src="{{project.image}}" alt="{{project.name}}" style="width:350px;height:200px;">
          <p>{{project.description}}</p>
          </md-content>
      </md-tab>
    </md-tabs>
  </md-content>
</div>

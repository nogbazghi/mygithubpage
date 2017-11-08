<div ng-repeat = "row in $ctrl.rows" ng-value ="row">
  <md-card-title>
    <md-card-title-text>
      <span class="md-headline">{{row.header}}</span>
    </md-card-title-text>
    </md-card-title>

  <div ng-if="row.number == 1">
    <div style = "margin-bottom: 10px;">
      <p>Hi, my name is Nahom Ogbazghi and I'm currently looking for full time in software development.</p>
    </div>

    <div style = "margin-bottom: 10px;">
      <p>I am proficient in Java and Python but I have used at one point:</p>

      <md-list-item  ng-click="null" ng-repeat = "language in $ctrl.languages" ng-value= "language">
        <h5>{{language}}</h5>
        <md-divider></md-divider>
      </md-list-item>
    </div>

    <div style = "margin-bottom: 10px;">
      <p>IDEs I have experience with:</p>
      <md-list-item  ng-click="null" ng-repeat = "ide in $ctrl.ides" ng-value= "ide">
        <h5>{{ide}}</h5>
        <md-divider></md-divider>
      </md-list-item>
    </div>
  </div>

  <div ng-if="row.number == 2">
    <md-list-item  ng-click="null" ng-repeat = "school in $ctrl.colleges" ng-value= "school">
      <span>
        <h5>{{school.name}}</h5>
        <h4>{{school.degree}}</h4>
        <h4>{{school.duration}}</h4>
      </span>
      <md-divider></md-divider>
    </md-list-item>
  </div>

  <div ng-if="row.number == 3">
    <md-list-item class="md-3-line" ng-repeat = "experience in $ctrl.experiences" ng-click="null">
         <div class="md-list-item-text" layout="column" >
           <h3 style = "font-weight: bold;">{{experience.company}}</h3>
           <h4 style = "font-style: italic;margin-left: 2em;"> {{experience.position}} - Date: {{experience.duration}} | {{experience.location}}</h4>
           <p> {{experience.skills}}</p>
         </div>
         <md-divider></md-divider>
       </md-list-item>
  </div>
  <div ng-if="row.number == 4">
    <p>Acted as a liaison between Google and Emory University.
    Responsibilities consisted of learning about innovative Google products and programs, planning and host fun events on campus, acting as a campus contact for Google teams, and helping Google better understand each university’s culture.
    Increased Google at Emory University Facebook page by over 80% over the course of two semesters.</p>
  </div>

  <div ng-if="row.number == 6" style = "margin-bottom: 10px;">
  // Display courses
    <md-list-item ng-click="null" ng-repeat = "course in $ctrl.courses" ng-value= "course">
      <p>{{course}}</p>
      <md-divider></md-divider>
    </md-list-item>
  </div>

</div>

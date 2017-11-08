angular.
  module('projects', ['ngMaterial']).
  component('projects', {
    templateUrl: 'projects/projects.template.js',
    controller: function ProjectController($scope, $mdDialog) {
      this.projects =[
        {
          name: 'Class Scheduler',
          role: 'Project Manager, Lead Backend Developer',
          image: 'images/Course Scheduler.png',
          description: 'The class scheduler is a website appication that allows the user to schedule courses using a GUI interface. I served as Project Manager and Backend Developer along side two other team members and the web application was created to serve as course scheduling platform for Emory"s Math and CS Director'
        }, {
          name: 'Roomieit',
          role: 'Project Manager',
          image: 'images/Roomie ™.png',
          description: 'Roomie is a web application that matches the user with potential roommates based on information manually inputed by the user. It can be further enhanced by mining the users facebook account for additional information that can further improve matching'
        }, {
          name: 'Scraper',
          role: 'Independent',
          image: 'images/Scraper.PNG',
          description: 'I developed a scraper that scrapped English-Tygrinya translations, part of speech, and tense from this <a href ="http://learntigrinya.blogspot.com/">website</a> and organized it into arrays that could be query-ed'
        }
      ];
      $scope.showDialog = showDialog;
      var proj = this.projects;
      var buttonClicked ="";
      function showDialog($event) {
        $("md-list-item").click(function(){
          buttonClicked = $(this).attr("id");
          for (i = 0; i < proj.length; i++){

            if(proj[i]['name'] == buttonClicked){
              $scope.items = proj[i];
            }
          }
        })
        console.log(buttonClicked);

        var parentEl = angular.element(document.body);
        $mdDialog.show({
          parent: parentEl,
          targetEvent: $event,
          templateUrl: 'projects/dialogs.tmpl.html',
          locals: { items: $scope.items  },
          controller: DialogController
        });
        function DialogController($scope, $mdDialog, items) {
          $scope.items = items;
          $scope.closeDialog = function() {
            $mdDialog.hide();
          }
        }
        buttonClicked = "";
      }
    }
  });

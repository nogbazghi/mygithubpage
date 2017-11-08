angular.
  module('buttons', ['ngMaterial']).
  component('buttons', {
    templateUrl: 'buttons/buttons.template.js',
    controller: function GreetUserController($scope, $mdDialog) {
      this.buttons = [
          {
            link: 'https://linkedin.com/in/nahomogbazghi',
            name: 'LinkedIn'
          },{
            link: 'https://drive.google.com/file/d/0Bxn_OsoDj08taXlYblROMFBFcnc/view?usp=sharing',
            name: 'Resume'
          },{
            link: 'https://github.com/nogbazghi',
            name: 'GitHub'
          },{
            link: 'mailto:nogbazghi@gmail.com',
            name: 'Email Me'
          }
      ];
      $scope.showConfirm = function(ev) {
          // Appending dialog to document.body to cover sidenav in docs app
          var buttonClicked = ev.currentTarget.id;
          var confirm = $mdDialog.confirm()
                .title('Redirect')
                .textContent('Clicking this link will redirect you to my '+ buttonClicked)
                .ariaLabel('Lucky day')
                .targetEvent(ev)
                .ok('Please do it!')
                .cancel('Nevermind, I\'ll stay here.');

          $mdDialog.show(confirm).then(function() {
            var buttons =
                { LinkedIn: 'https://linkedin.com/in/nahomogbazghi',

                  Resume: 'https://drive.google.com/file/d/0Bxn_OsoDj08taXlYblROMFBFcnc/view?usp=sharing',

                  GitHub: 'https://github.com/nogbazghi',

                  EmailMe: 'mailto:nogbazghi@gmail.com',

                };
          window.location.assign(buttons[buttonClicked]);
          }, function() {
          });
        };
    }
  });

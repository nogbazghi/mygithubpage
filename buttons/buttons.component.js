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
            link: 'https://drive.google.com/file/d/0Bxn_OsoDj08tR1UzUllFSHJFcFU/view?usp=sharing',
            name: 'Resume'
          },{
            link: 'https://github.com/nogbazghi',
            name: 'GitHub'
          },{
            link: 'mailto:nogbazghi@alumni.emory.edu',
            name: 'Email Me'
          }
      ];
      $scope.showConfirm = function(ev) {
          // Appending dialog to document.body to cover sidenav in docs app
          var buttonClicked = ev.currentTarget.id;
          var confirm = $mdDialog.confirm()
                .title('Redirect')
                .textContent('Clicking this link will redirect you to my '+ buttonClicked +'. Are you okay with this?')
                .ariaLabel('Lucky day')
                .targetEvent(ev)
                .cancel('Nevermind, I\'ll stay here.')
                .ok('Sure!');

          $mdDialog.show(confirm).then(function() {
            var buttons =
                { LinkedIn: 'https://linkedin.com/in/nahomogbazghi',

                  Resume: 'https://drive.google.com/file/d/0Bxn_OsoDj08tR1UzUllFSHJFcFU/view?usp=sharing',

                  GitHub: 'https://github.com/nogbazghi',

                  EmailMe: 'mailto:nogbazghi@alumni.emory.edu',

                };
          window.location.assign(buttons[buttonClicked]);
          }, function() {
          });
        };
    }
  });

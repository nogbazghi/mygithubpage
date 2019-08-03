angular.
  module('personal', []).
  component('personal', {
    templateUrl: 'personal/personal.template.js',
    controller: function PersonalController() {
      this.parts = ['About', 'Instagram', 'Books', 'Website Progress']
      this.characteristics= ['I\'m an American Eritrean.','I\'ve been to Singapore, Malaysia, and Thailand.','I like to code.','I love to play basketball.','I love to read sports, technology, and social issues articles.','I listen to music (priamrily hip hop).','I like to watch the NFL, NBA, and Premier League.']
    }
  });

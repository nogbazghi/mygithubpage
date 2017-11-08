angular.
  module('personal', []).
  component('personal', {
    templateUrl: 'personal/personal.template.js',
    controller: function PersonalController() {
      this.parts = ['About', 'Instagram', 'Books']
      this.characteristics= ['open minded','proud Eritrean','coder','Play basketball','Read sports, technology, and social issues articles','Listen to music (priamrily hip hop)','watch the NFL, NBA, and Premier League']
    }
  });

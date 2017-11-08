angular.
  module('sidebar', []).
  component('sidebar', {
    templateUrl: 'sidebar/sidebar.template.js',
    controller: function SidebarController() {
      this.items = ['Main','Projects','Personal']
      this.rows=[
        {
          header: 'About Me',
          number: '1'
        },{
          header: 'Education',
          number: '2'
        },{
          header: 'Work Experience',
          number: '3'
        },{
          header: 'Activities',
          number: '4'
        },{
          header: 'Accolades/Achievements',
          number: '5'
        },{
          header: 'Notable Courses Taken',
          number: '6'
        }
      ]
    }
  });

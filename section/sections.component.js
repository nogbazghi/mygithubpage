angular.
  module('sections', []).
  component('sections', {
    templateUrl: 'section/sections.template.js',
    controller: function SectionsController() {
      this.sections = ['Main','Projects','Personal']
    }
  });

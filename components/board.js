angular.
  module('trelloclone').
  component('board', {
    template:
        '<div class="board" style="background:{{$ctrl.color}}">' +
          '<h2>{{$ctrl.title}}</h2>'+
          '<card-list title="To Do"></card-list>' +
          '<card-list title="In Progress"></card-list>' +
          '<card-list title="Done"></card-list>' +
        '</div>',
    controller: function boardController() {
    },
    bindings : {
      title : '@',
      color : '@'

    }
  });
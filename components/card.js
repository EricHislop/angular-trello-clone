angular.
  module('trelloclone').
  component('cardDetail', {
    template:
        '<div class="card">' +
            '<span>{{$ctrl.card.name}}</span>' +
            '<p>{{$ctrl.card.description}}</p>' +
        '</div>',
    bindings: {
        card: '<'
    }
  });
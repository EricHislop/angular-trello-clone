angular.
  module('trelloclone').
  component('cardList', {
    template:
        '<div class="card-list">' +
          '<card-detail ng-repeat="card in $ctrl.cards" card="card"></card-detail>' +
        '</div>',
    controller: function cardListController() {
      this.cards = [
        {
          name: 'CRUD list',
          description: 'testing somthing'
        }, {
          name: 'CRUD cards in to lists',
          description: 'testing somthing'
        }, {
          name: 'Moving Cards between lists',
          description: 'testing somthing'
        }
      ];
    }
  });
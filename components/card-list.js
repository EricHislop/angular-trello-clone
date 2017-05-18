angular.
  module('trelloclone').
  component('cardList', {
    template:
        '<div class="card-list">' +
          '<h3>{{$ctrl.title}}</h3>' +
          '<card-detail ng-repeat="card in $ctrl.cards" card="card"></card-detail>' +
          '<form ng-if="$ctrl.displayForm">' +
            '<input type="text" ng-model="$ctrl.newCard.name" />' +
            '<input type="text" ng-model="$ctrl.newCard.description"/>' +
          '<button type="button" ng-click="$ctrl.addCard($ctrl.newCard)">Save card</button>' +
          '</form>' +

          '<button type="button" ng-click="$ctrl.displayForm = true">Add card</button>' +

        '</div>',
    controller: function cardListController() {

      this.cards = [];

      this.newCard = {
        name : null,
        description : null
        
      };
      this.newCardDescription = null;
      this.displayForm = false;

      this.addCard = function(newCard) {

        this.cards.push(newCard);
        this.displayForm = false;
        this.newCard = {};
      };


    },
    bindings : {
      title : '@'
    }
  });
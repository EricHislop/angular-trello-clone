angular.
  module('trelloclone').
  component('cardList', {
    template:
        '<div class="card-list">' +
          '<h3>{{$ctrl.title}}</h3>' +
          '<card-detail ng-repeat="card in $ctrl.cards" card="card"></card-detail>' +


          '<button type="button" ng-click="$ctrl.addCard()">Add card</button>' +

        '</div>',
    controller: function cardListController() {

      this.cards = [];

      this.addCard = function(newCard) {

        if(!newCard) {
          newCard = {
            name : window.prompt('Task title'),
            description : "Auto added at " + new Date(),
          };
        }

        this.cards.push(newCard);
      };

    },
    bindings : {
      title : '@'
    }
  });
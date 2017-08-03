Template.buttons.helpers({
  'selectedPlayer': function() {
    return PlayersList.findOne({ _id: Session.get('selectedPlayer')})
  },
});

Template.buttons.events({
  'click .increment': function(event) {
    Meteor.call('updateScore', Session.get('selectedPlayer'), 5);
  },

  'click .decrement': function(event) {
    Meteor.call('updateScore', Session.get('selectedPlayer'), -5);
  },

  'click .remove': function(event) {
    Meteor.call('remove', Session.get('selectedPlayer'));
  },
});

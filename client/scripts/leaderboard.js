Template.leaderboard.helpers({
  'playerlist': function() {
    return PlayersList.find({ createdBy: Meteor.userId()}, { sort: {score: -1, name: 1} });
  },
});

Template.playeritem.helpers({
  'selectedClass': function(){
    var playerId = this._id;
    var selectedPlayer = Session.get('selectedPlayer');
    if(playerId == selectedPlayer){
      return "selected";
    }
  },
});

Template.leaderboard.events({
  'click .player': function(event) {
    Session.set('selectedPlayer', this._id);
    Session.set('playerName', this.name);
  },
});

Template.leaderboardform.events({
  'submit form': function(event){
    event.preventDefault();
    Meteor.call('createPlayer', event.target.playerName.value);
    event.target.playerName.value = "";
  },
});

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

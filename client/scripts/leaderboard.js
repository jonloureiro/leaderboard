Template.leaderboard.helpers({
    'player': function() {
        return PlayersList.find({ createdBy: Meteor.userId()}, { sort: {score: -1, name: 1} });
    },
});

Template.leaderboard.events({
    'click .player': function(event) {
        Session.set('selectedPlayer', this._id);
        Session.set('playerName', this.name)
        console.log('Jogador '+this.name+' foi selecionado!')
    },
});

Template.leaderboard.helpers({
    'player': function() {
        return PlayersList.find({ createdBy: Meteor.userId()}, { sort: {score: -1, name: 1} });
    },

    'selectedClass': function(){
        var playerId = this._id;
        var selectedPlayer = Session.get('selectedPlayer');
        if(playerId == selectedPlayer){
            return "selected"
        }
    },
});

Template.leaderboard.events({
    'click .player': function(event) {
        Session.set('selectedPlayer', this._id);
        Session.set('playerName', this.name)
        console.log('Jogador '+this.name+' foi selecionado!')
    },
});

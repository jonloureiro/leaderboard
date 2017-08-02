Meteor.publish('thePlayers', function(){
    return PlayersList.find({ createdBy: this.userId });
});

console.log(PlayersList.find().fetch())

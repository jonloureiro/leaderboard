Meteor.publish('thePlayers', function(){
    return PlayersList.find({ createdBy: this.userId });
});

Meteor.publish('theTodos', function(){
    return Todos.find({ createdBy: this.userId });
});

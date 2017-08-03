Meteor.methods({
    'createPlayer': function(playerNameVar){
        check(playerNameVar, String);
        var currentUserId = Meteor.userId();
        if(currentUserId){
            PlayersList.insert({
                name: playerNameVar,
                score: 0,
                createdBy: currentUserId
            });
        }
    }
});

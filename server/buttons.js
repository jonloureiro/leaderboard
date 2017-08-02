Meteor.methods({
    'updateScore': function(id, value) {
        check(id, String);
        check(value, Number)
        var currentUserId = Meteor.userId();
        if (currentUserId) {
            PlayersList.update({ _id: id},
                               { $inc: {score: value} });
        }
    },
    'remove': function(id) {
        check(id, String);
        var currentUserId = Meteor.userId();
        if (currentUserId) {
            PlayersList.remove({ _id: id});

        }
    }
});

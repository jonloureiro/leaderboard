Meteor.methods({
    'createPlayer': function(nameVar){
        check(nameVar, String);
        var currentUserId = Meteor.userId();
        if(currentUserId){
            PlayersList.insert({
                name: nameVar,
                score: 0,
                createdBy: currentUserId
            });
        }
    },

    'createTodo': function(nameVar){
      check(nameVar, String);
      var currentUserId = Meteor.userId();
      if(currentUserId){
        Todos.insert({
            name: nameVar,
            completed: false,
            createdAt: new Date(),
            createdBy: currentUserId
        });
      }
    },
});

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

    'changeTodo': function(documentId, todoItem){
      check([documentId, todoItem], [String]);
      var currentUserId = Meteor.userId();
      if(currentUserId){
        Todos.update({ _id: documentId }, {$set: { name: todoItem }});
        console.log(documentId + "_ Task changed to: " + todoItem);
      }
    },
});

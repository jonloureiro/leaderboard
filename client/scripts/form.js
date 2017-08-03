Template.leaderboardform.events({
  'submit form': function(event){
    event.preventDefault();
    Meteor.call('createPlayer', event.target.playerName.value);
    event.target.playerName.value = "";
  },
});

Template.todosform.events({
  'submit form': function(event){
    event.preventDefault();
    Meteor.call('createTodo', event.target.todoName.value);
    event.target.todoName.value = "";
  },
});

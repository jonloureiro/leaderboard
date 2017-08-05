Template.todos.helpers({
  'todo': function(){
    return Todos.find({}, {sort: {createdAt: -1}});
  }
});

Template.todosform.events({
  'submit form': function(event){
    event.preventDefault();
    Meteor.call('createTodo', event.target.todoName.value);
    event.target.todoName.value = "";
  },
});

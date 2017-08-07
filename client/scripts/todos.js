Template.todos.helpers({
  'todo': function(){
    return Todos.find({}, {sort: {createdAt: -1}});
  },
});

Template.todosform.events({
  'submit form': function(event){
    event.preventDefault();
    Meteor.call('createTodo', event.target.todoName.value);
    event.target.todoName.value = "";
  },
});

Template.todoitem.events({
  'keyup .todoItem': function(event){
    if (event.which == 13 || event.which == 27){
      var todoItem = event.target.value;
      var documentId = this._id;
      /*Meteor.call('changeTodo', documentId, todoItem);*/
      Todos.update({ _id: documentId }, {$set: { name: todoItem }});
      $(event.target).blur(); /*Não acho Non-JQuery*/
    }
  },
});

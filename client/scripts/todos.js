Template.todos.helpers({
  'todo': function(){
    return Todos.find({}, {sort: {createdAt: -1}});
  },
});

Template.todoitem.helpers({
  'checked': function(){
    var isCompleted = this.completed;
    if(isCompleted){
      return "checked";
    } else {
      return "";
    }
  },

  'disabled': function(){
    var isCompleted = this.completed;
    if(isCompleted){
      return "disabled";
    } else {
      return "";
    }
  },
});

Template.todoscount.helpers({
  'todoscount': function(){
    return Todos.find().count();
  },

  'totaltodos': function(){
    return Todos.find({ completed: true}).count();
  },
});

Template.todos.events({
  'submit form': function(event){
    event.preventDefault();
    Meteor.call('createTodo', event.target.todoName.value);
    event.target.todoName.value = "";
  },

  'keyup .todoItem': function(event){
    if (event.which == 13 || event.which == 27){
      var todoItem = event.target.value;
      var documentId = this._id;
      /*Meteor.call('changeTodo', documentId, todoItem);*/
      Todos.update({ _id: documentId }, {$set: { name: todoItem }});
      $(event.target).blur(); /*Não acho Non-JQuery*/
    }
  },

  'change .checkbox': function(event){
    var documentId = this._id;
    var isCompleted = this.completed;
    if (isCompleted) {
      Todos.update({ _id: documentId }, {$set: { completed: false }});
    } else {
      Todos.update({ _id: documentId }, {$set: { completed: true }});
    }
  }
});

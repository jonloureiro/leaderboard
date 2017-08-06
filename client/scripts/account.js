Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = event.target.email.value;
        var password = event.target.password.value;
        Meteor.loginWithPassword(email, password);
    }
});

Template.register.events({
  'submit form': function(event){
    event.preventDefault();
    var email = event.target.email.value;
    var password = event.target.password.value;
    var password2 = event.target.password2.value;
    if (password == password2){
      Accounts.createUser({
        email: email,
        password: password
      });
      Router.go('hom');
    } else {
      Bert.alert('As senhas precisam ser iguais', 'danger', 'growl-top-left');
      event.target.password.value = '';
      event.target.password2.value = '';
    }
  }
});

/*Meteor.loginWithPassword(email, password, function(error){
    if(error){
        console.log(error.reason);
    } else {
        Router.go("hom");
    }
});*/

Template.layout.events({
  'click .logout': function(event){
    event.preventDefault();
    Meteor.logout();
    Router.go('hom');
  }
});

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
    var nome = event.target.name.value;
    var email = event.target.email.value;
    var password = event.target.password.value;
    var password2 = event.target.password2.value;
    var code = event.target.code.value;
    var verification = Meteor.call('verificationregister', code)
    console.log(code+' '+verification);
    /*if (verification == 1){*/
      if (password == password2){
        Accounts.createUser({
          email: email,
          password: password,
          name: name,
        });
        Router.go('hom');
      } else {
        Bert.alert('As senhas precisam ser iguais', 'danger', 'growl-top-left');
        event.target.password.value = '';
        event.target.password2.value = '';
      }
    /*}
    else {
      Bert.alert('Código secreto incorreto!', 'danger', 'growl-top-left');
        event.target.code.value = '';
        event.target.password.value = '';
        event.target.password2.value = '';
    }*/
  }
});

/*Meteor.loginWithPassword(email, password, function(error){
    if(error){
        console.log(error.reason);
    } else {
        Router.go("hom");
    }
});*/

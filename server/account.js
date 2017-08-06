Meteor.methods({
  'verificationregister': function(code1){
    check(code1, String);
    if (Keys.find({code: code1}).count()){
      console.log('Código correto!')
      return true;
    } else {
      console.log('Código errado!')
      return false;
    }
  },
});

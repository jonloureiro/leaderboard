Meteor.startup(() => {
  process.env.MAIL_URL="smtp://recuperarsenhajonathan:a1b2c345@smtp.gmail.com:587/";
  /*smtp://seumail:suasenha@smtp.gmail.com:587*/

  if (Keys.find().count() != 3) {
    Keys.insert({
      code: 'aaa',
      used: false,
    });
    Keys.insert({
      code: 'bbb',
      used: false,
    });
    Keys.insert({
      code: 'ccc',
      used: false,
    });
  }
});

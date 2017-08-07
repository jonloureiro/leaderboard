Meteor.startup(() => {
  process.env.MAIL_URL="smtps://recuperarsenhajonathan:a1b2c345@smtp.gmail.com:465/";

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

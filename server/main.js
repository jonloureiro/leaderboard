Meteor.startup(() => {
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

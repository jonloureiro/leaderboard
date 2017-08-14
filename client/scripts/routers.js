Router.configure({layoutTemplate: 'layout'});

Router.route('/', {
  template: 'home',
  name: 'hom',
  onBeforeAction() {
    if (Meteor.userId()) {
      this.next();
    } else {
      this.render("login");
    }
  },
});

Router.route('/todos', {
  template: 'todos',
  name: 'tod',
  onBeforeAction() {
    if (Meteor.userId()) {
      this.next();
    } else {
      this.render("login");
    }
  },
});

Router.route('/leaderboard', {
  template: 'leaderboard',
  name: 'lea',
  onBeforeAction() {
    if (Meteor.userId()) {
      this.next();
    } else {
      this.render("login");
    }
  },
});

Router.route('/register', {
  template: 'register',
  name: 'reg',
  onBeforeAction() {
    if (!Meteor.userId()) {
      this.next();
    } else {
      this.render("home");
    }
  },
});

Router.route('/login', {
  template: 'login',
  name: 'log',
  onBeforeAction() {
    if (!Meteor.userId()) {
      this.next();
    } else {
      this.render("home");
    }
  },
});

Router.route('/recpsw', {
  template: 'password',
  name: 'recpsw',
  onBeforeAction() {
    if (!Meteor.userId()) {
      this.next();
    } else {
      this.render("home");
    }
  },
});

Router.route('/code', {
  template: 'codepsw',
  name: 'codepsw',
  onBeforeAction() {
    if (!Meteor.userId()) {
      this.next();
    } else {
      this.render("home");
    }
  },
});

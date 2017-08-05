Router.configure({layoutTemplate: 'layout'});

Router.route('/', {
  template: 'home',
  name: 'hom',
});

Router.route('/todos', {
  template: 'todos',
  name: 'tod',
});

Router.route('/leaderboard', {
  template: 'leaderboard',
  name: 'lea',
});

Router.route('/register', {
  template: 'register',
  name: 'reg',
});

Router.route('/login', {
  template: 'login',
  name: 'log',
});

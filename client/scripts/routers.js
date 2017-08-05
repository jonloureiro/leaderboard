Router.configure({layoutTemplate: 'layout'});

Router.route('/', {
  template: 'home',
  name: '-h',
});

Router.route('/todos', {
  template: 'todos',
  name: '-t',
});

Router.route('/leaderboard', {
  template: 'leaderboard',
  name: '-l',
});

Template.playerform.events({
    'submit form': function(event){
        event.preventDefault();
        Meteor.call('createPlayer', event.target.playerName.value);
        event.target.playerName.value = "";
    }
});

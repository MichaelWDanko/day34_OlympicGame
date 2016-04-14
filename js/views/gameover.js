module.exports = Backbone.View.extend({
    events: {
        'click #new-game': 'newGame',
    },
    template: _.template(document.getElementById(
        'gameover-template').textContent),
    render: function () {
        var html = this.template({
            name: this.model.get('name'),
            score: this.model.get('score'),
        });
        this.el.innerHTML = html;
    },
    newGame: function () {
        Backbone.history.navigate('create', {trigger:true});
    }
});

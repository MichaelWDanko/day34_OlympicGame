module.exports = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    events: {
        /*Submit button*/
        'click #create-button': 'createPlayer',
        'click #vehicle-suburban': 'suburban',
        'click #vehicle-tesla': 'tesla'
    },
    template: _.template(document.getElementById('create-template').textContent),

    render: function () {
        this.el.innerHTML = this.template();
    },
    createPlayer: function () {
        var name = document.getElementById('name-input').value;
        this.model.set('name', name);
        console.log('Player name saved!');
    },
    suburban: function () {
        this.model.set('vehicle', 'Suburban');
        this.model.set('fuelUse', '2');
        this.model.set('startEnergy', 120);
        this.model.set('currentEnergy', 120);
    },
    tesla: function () {
        this.model.set('vehicle', 'Tesla');
        this.model.set('fuelUse', '1');
        this.model.set('startEnergy', 80);
        this.model.set('currentEnergy', 80);
    },
});

module.exports = Backbone.View.extend({
    initialize: function () {
        this.model.on('change:xPosition', this.render, this);
        this.model.on('change:yPosition', this.render, this);
        this.model.on('change:currentEnergy', this.render, this);
//        this.model.on('change:collectedPods', this.)
    },
    events: {
        'click #up-button': 'moveUp',
        'click #down-button': 'moveDown',
        'click #left-button': 'moveLeft',
        'click #right-button': 'moveRight',
        /*Button clicks for the directional buttons*/
        'keypress': 'keyAction',
    },
    template: _.template(document.getElementById('game-template').textContent)
        /*Underscore template. Get Text Content*/
        ,

    render: function () {

        var html = this.template({
            name: this.model.get('name'),
            xPosition: this.model.get('xPosition'),
            yPosition: this.model.get('yPosition'),
            startEnergy: this.model.get('startEnergy'),
            currentEnergy: this.model.get('currentEnergy'),
            energyXPos: this.model.get('energyXPos'),
            energyYPos: this.model.get('energyYPos'),
            collectedPods: this.model.get('collectedPods'),
        });
        this.el.innerHTML = html;
        if (this.model.get('xPosition') === this.model.get('energyXPos') && this.model.get('yPosition') === this.model.get('energyYPos')) {
            console.log('Found it!');
            this.collectEnergy();
        }
        if (this.model.get('currentEnergy') === 0) {
            alert('Game over! You ran out of fuel.');
        }
    },
    keyAction: function (e) {
//        var code = e.keyCode || e.which;
//        if (code == 38) {
//            console.log('Up key');
//        }
//        if (code == 40) {
//            console.log('Down key');
//        }
//        if (code == 37) {
//            console.log('Left key');
//        }
//        if (code == 39) {
//            console.log('Right key');
//        }
    },
    moveUp: function () {
        this.model.moveUp();
    },
    moveDown: function () {
        this.model.moveDown();
    },
    moveLeft: function () {
        this.model.moveLeft();
    },
    moveRight: function () {
        this.model.moveRight();
    },
    
    collectEnergy: function () {
        this.model.set('collectedPods', this.model.get('collectedPods') + 1);
        this.model.energyRandom();
    },
});

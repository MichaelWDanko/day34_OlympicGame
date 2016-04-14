module.exports = Backbone.Model.extend({
    initialize: function () {},
    defaults: {
        xPosition: 0,
        yPosition: 0,
        name: 'Default',
        dimensionMax: 10,
        dimensionMin: 0,
        startEnergy: 20,
        currentEnergy: 20,
        energyXPos: Math.round(Math.random()*10),
        energyYPos: Math.round(Math.random()*10),
        mpg: 1,
        collectedPods: 0,
    },
    loseEnergy: function () {
        this.set('currentEnergy', this.get('currentEnergy') - this.get('mpg'));
    },
    moveUp: function () {
        console.log('Clicked on Move up!');
        if (this.get('currentEnergy') >= 1) {
            if (this.get('yPosition') < this.get('dimensionMax')) {
                /*This is a valid move*/
                this.set('yPosition', this.get('yPosition') + 1);
                this.loseEnergy();
            } else {
                console.log('You cant go outside the boundaries!');
            }
        }
    },
    moveDown: function () {
        console.log('Clicked on Move down!');
        if (this.get('currentEnergy') >= 1) {
            if (this.get('yPosition') > this.get('dimensionMin')) {
                /*This is a valid move*/
                this.set('yPosition', this.get('yPosition') - 1);
                this.loseEnergy();
            } else {
                console.log('You cant go outside the boundaries!');
            }
        }
    },
    moveLeft: function () {
        console.log('Clicked on Move left!');
        if (this.get('currentEnergy') >= 1) {
            if (this.get('xPosition') > this.get('dimensionMin')) {
                /*This is a valid move*/
                this.set('xPosition', this.get('xPosition') - 1);
                this.loseEnergy();
            } else {
                console.log('You cant go outside the boundaries!');
            }
        }
    },
    moveRight: function () {
        console.log('Clicked on Move right!');
        if (this.get('currentEnergy') >= 1) {
            if (this.get('xPosition') < this.get('dimensionMax')) {
                /*This is a valid move*/
                this.set('xPosition', this.get('xPosition') + 1);
                this.loseEnergy();
            } else {
                console.log('You cant go outside the boundaries!');
            }
        }
    },
    energyRandom: function () {
       this.set('energyXPos', Math.round(Math.random()*10));
       this.set('energyYPos', Math.round(Math.random()*10));
       this.set('currentEnergy', this.get('currentEnergy') + Math.round(Math.random()*10));
       if (this.get('currentEnergy') > this.get('startEnergy')){
           this.set('currentEnergy', this.get('startEnergy'));
           }
    }
});

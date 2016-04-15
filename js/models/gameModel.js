module.exports = Backbone.Model.extend({
    initialize: function () {},
    defaults: {
        name: "AAA",
        xPosition: 0,
        yPosition: 0,
        name: 'Default',
        dimensionMax: 9,
        dimensionMin: 0,
        startEnergy: 20,
        currentEnergy: 20,
        energyXPos: Math.round(Math.random()*9),
        energyYPos: Math.round(Math.random()*9),
        fuelUse: 1,
        score: 0,
        highScore: 0,
        highScoreUser: 'AAA',
        /*
        function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
}
        */
    },
    loseEnergy: function () {
        this.set('currentEnergy', this.get('currentEnergy') - this.get('fuelUse'));
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
        this.energyCheck();
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
        this.energyCheck();
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
        this.energyCheck();
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
        this.energyCheck();
    },
    energyRandom: function () {
       this.set('energyXPos', Math.round(Math.random()*9));
       this.set('energyYPos', Math.round(Math.random()*9));
       this.set('currentEnergy', this.get('currentEnergy') + Math.round(Math.random()*(7-3)+3));
       if (this.get('currentEnergy') > this.get('startEnergy')){
           this.set('currentEnergy', this.get('startEnergy'));
           }
    },
    playerBox: function () {
        var oldSpot = document.getElementById('player-block');
        if (oldSpot !== null) {
        oldSpot.removeAttribute('id', 'player-block');
        }
        var player = document.getElementById('block-'+this.get('xPosition')+'-'+this.get('yPosition'));
        if (player !== null) {
        player.setAttribute('id', 'player-block');
        }
    },
    passengerBox: function () {
        var oldSpot = document.getElementById('passenger-block');
        if (oldSpot !== null) {
        oldSpot.removeAttribute('id', 'passenger-block');
        }
        var passenger = document.getElementById('block-'+this.get('energyXPos')+'-'+this.get('energyYPos'));
        if (passenger !== null) {
        passenger.setAttribute('id', 'passenger-block');
        }
    },
    saveScore: function () {
      if (this.get('score') > this.get('highScore')) {
          this.set('highScore', this.get('score'));
          this.set('highScoreUser', this.get('name'));
      }  
    },
    energyCheck: function () {
        if (this.get('currentEnergy') <= 0) {
            this.saveScore();
            alert('Game over! You ran out of fuel.');
            Backbone.history.navigate('game-over', {trigger:true});
        }  
    },
});

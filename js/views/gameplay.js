module.exports = Backbone.View.extend({
    initialize: function () {
        this.model.on('change:xPosition', this.render, this);
        this.model.on('change:yPosition', this.render, this);
        this.model.on('change:currentEnergy', this.render, this);
        var self = this;
        Mousetrap.bind('up', function() {
            console.log('up key pressed');
            self.moveUp();
        });
        Mousetrap.bind('down', function() {
            console.log('down key pressed');
            self.moveDown();
        });
        Mousetrap.bind('left', function() {
            console.log('left key pressed');
            self.moveLeft();
        });
        Mousetrap.bind('right', function() {
            console.log('right key pressed');
            self.moveRight();
        });
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
            score: this.model.get('score'),
            
        });
        this.el.innerHTML = html;
       
        var grid = document.getElementById('game-map');
        for (var y = 9; y >= 0; y--) {
            for (var x = 0; x < 10; x++) {
              var div = document.createElement('div');
                div.setAttribute('id', 'block-'+x+'-'+y);
                div.classList.add('block');
                grid.appendChild(div);
//                console.log('Created a div');
            }
        }
           if (this.model.get('xPosition') === this.model.get('energyXPos') && this.model.get('yPosition') === this.model.get('energyYPos')) {
            console.log('Found it!');
            this.collectEnergy();
        }
//        
//        if (this.model.get('currentEnergy') <= 0) {
//            this.model.saveScore();
//            alert('Game over! You ran out of fuel.');
//            Backbone.history.navigate('game-over', {trigger:true});
//        }
        this.model.passengerBox();
        this.model.playerBox();
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
        this.model.set('score', this.model.get('score') + 1);
        this.model.energyRandom();
    },
});

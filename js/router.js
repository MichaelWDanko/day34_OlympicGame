/* jslint browser: true */
var NewPlayer = require('./views/playerEntry');
var Gameplay = require('./views/gameplay');
var GameModel = require('./models/gameModel');
var GameOver = require('./views/gameover');

module.exports = Backbone.Router.extend({
   initialize: function () {
       this.gameModel = new GameModel();
       this.activeView = null;
   },
    routes: {
        'create': 'createPlayer',
        'game': 'gameplay',
        'game-over': 'gameOver',
        '': 'createPlayer',
    },
    createPlayer: function () {
        console.log('Switched to "Create A Player" View');
        this.gameModel = new GameModel();
        
        if (this.activeView !== null) {
            this.activeView.el.innerHTML = '';
            this.activeView.undelegateEvents();
        }
        this.activeView = new NewPlayer({
           model: this.gameModel,
            el: document.getElementById('create-view'),
        });
        this.activeView.render();
    },
    gameplay: function () {
        console.log('Switched to "Gameplay" View');
        
        if (this.activeView !== null) {
            this.activeView.el.innerHTML = '';
            this.activeView.undelegateEvents();
        }
        this.activeView = new Gameplay({
           model: this.gameModel,
            el: document.getElementById('game-view'),
        });
        this.activeView.render();
    },
    gameOver: function () {
        console.log('Switched to "gameOver" View');
        if (this.activeView !== null) {
            this.activeView.el.innerHTML = '';
            this.activeView.undelegateEvents();
        }
        this.activeView = new GameOver({
           model: this.gameModel,
            el: document.getElementById('gameover-view'),
        });
        this.activeView.render();
    },
});
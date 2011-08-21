goog.provide('g.Menu');

goog.require('lime.Scene');
goog.require('lime.Sprite');
goog.require('lime.Layer');
goog.require('lime.Label');
goog.require('lime.RoundedRect');
goog.require('lime.transitions.Dissolve');
goog.require('g.Game');
goog.require('goog.events.KeyCodes');
goog.require('goog.events.KeyHandler');

g.Menu = function() {
	lime.Scene.call(this); // super
	var background = new lime.Sprite().setSize(800,600).setFill('assets/menubackground.png').setAnchorPoint(0,0),
        gameTitle = new lime.Label().setFontSize(40).setText('EscapeGame').setPosition(g.WIDTH/2, 75),
        startButton = new lime.Layer().setPosition(g.WIDTH/2, 500),
        startText = new lime.Label('Press any key to begin')
            .setFontColor('#ffffff').setFontFamily('Impact').setFontSize(34);
    var startRect = new lime.RoundedRect().setRadius(10).setFill('#017fff').setSize(startText.getSize().scale(1.1));

    startButton.appendChild(startRect);
    startButton.appendChild(startText);
    this.appendChild(background);
    this.appendChild(gameTitle);
    this.appendChild(startButton);

    goog.events.listenOnce(document,[goog.events.EventType.KEYDOWN],function(e){
        this.getDirector().replaceScene(new g.Game());
        console.log('done');
    }, true, this);
};
goog.inherits(g.Menu, lime.Scene);

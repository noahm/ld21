goog.provide('g.Game');


goog.require('goog.events.KeyCodes');
goog.require('goog.events.KeyHandler');
goog.require('g.Menu');
goog.require('lime.Scene');

g.Game = function() {
	lime.Scene.call(this);
    this.appendChild(
        new lime.Label().setFontSize(50).setText('welcome to the game').setPosition(g.WIDTH/2,g.HEIGHT/2));
    this.appendChild(
        new lime.Label().setFontSize(24).setText('quit').setPosition(g.WIDTH,0).setAnchorPoint(1,0));

    goog.events.listen(document,[goog.events.EventType.KEYDOWN],function(e){
    	if (e.keyCode == goog.events.KeyCodes.ESC) {
	        this.getDirector().replaceScene(new g.Menu());
	        console.log('done');
        } else console.log('not escape, ' + typeof(e.keyCode));
    }, true, this);
};
goog.inherits(g.Game, lime.Scene);


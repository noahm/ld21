goog.provide('g.Game');

goog.require('goog.events.KeyCodes');
goog.require('goog.events.KeyHandler');
goog.require('g');
goog.require('g.Menu');
goog.require('g.Runner');
goog.require('g.Background');
goog.require('lime.Scene');

g.Game = function() {
	lime.Scene.call(this);
	var bg = new g.Background();
	var runner = new g.Runner();
	this.appendChild(bg);
	this.appendChild(runner);
	window.runner = runner;

    goog.events.listen(document,[goog.events.EventType.KEYDOWN],function(e){
    	if (e.keyCode == goog.events.KeyCodes.ESC) {
	        g.d.replaceScene(new g.Menu());
        }
    }, false, this);
};
goog.inherits(g.Game, lime.Scene);


goog.provide('g.Runner');

goog.require('goog.events.KeyCodes');
goog.require('g');
goog.require('lime.animation.Resize');
goog.require('lime.Sprite');

g.Runner = function(d) {
	lime.Sprite.call(this);
	this.setSize(50, 100);
	this.setFill('#ff0000');
	this.setAnchorPoint(.5,1);
	this.setPosition(400, 505);
	this.crouching = false;

	lime.scheduleManager.schedule(this._update, this);
};
goog.inherits(g.Runner, lime.Sprite);

g.Runner.prototype._update = function() {
	if (g.KeyboardState[goog.events.KeyCodes.DOWN]) {
		this.crouch();
	} else {
		this.stand();
	}
};

g.Runner.prototype.crouch = function() {
	this.setSize(80,50);
	this.crouching = true;
};

g.Runner.prototype.stand = function() {
	this.setSize(50,100);
	this.crouching = false;
};

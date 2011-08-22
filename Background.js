goog.provide('g.Background');

goog.require('g');
goog.require('lime.Sprite');

g.SCROLL_SPEED = .6;

g.Background = function() {
	lime.Sprite.call(this);
	this.setAnchorPoint(0,0);
	this.setSize(2400, 600);
	this.setPosition(0,0);
	this.setFill('assets/gamebackground.png');
	lime.scheduleManager.schedule(this.scroll, this);
};
goog.inherits(g.Background, lime.Sprite);

g.Background.prototype.scroll = function(timeElapsed) {
	var pos = this.getPosition();
	pos.x -= g.SCROLL_SPEED * timeElapsed;
	if (pos.x < -2*g.WIDTH) {
		pos.x = 0;
	}
	this.setPosition(pos);
};

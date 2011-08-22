goog.provide('g.Runner');

goog.require('goog.events.KeyCodes');
goog.require('g');
goog.require('lime.animation.Resize');
goog.require('lime.Layer');
goog.require('lime.Sprite');

g.RunnerHome = {x: 400, y:505};
g.JumpPower = 1000;
g.JumpSustain = 2500;
g.Gravity = 5000;

g.Runner = function(d) {
	lime.Layer.call(this);
	this.v = 0;
	this.gfx = new lime.Sprite().setSize(50, 100).setFill('#ff0000').setAnchorPoint(.5,1);
	this.appendChild(this.gfx);
	this.shieldGfx = new lime.Sprite().setSize(15, 60).setFill('#00ff00').setAnchorPoint(1,1).setPosition(-30,-50);
	this.setAnchorPoint(.5,1);
	this.setPosition(g.RunnerHome.x, g.RunnerHome.y);
	this.crouching = false;
	this.shielding = false;
	this.jumpCharged = true;
	this.jumping = false;
	this.jumpPeaked = false;

	lime.scheduleManager.schedule(this._update, this);
};
goog.inherits(g.Runner, lime.Layer);

g.Runner.prototype._update = function(timeElapsed) {
	this.t = timeElapsed/1000;
	this.checkInput();
	this.applyPhysics();
};

g.Runner.prototype.checkInput = function() {
	if (g.KeyboardState[goog.events.KeyCodes.LEFT]) {
		this.raiseShield();
	} else {
		this.dropShield();
	}

	if (g.KeyboardState[goog.events.KeyCodes.UP]) {
		this.jump();
	} else {
		this.rechargeJump();
	}

	if (g.KeyboardState[goog.events.KeyCodes.DOWN]) {
		this.crouch();
		this.dropShield();
	} else {
		this.stand();
	}
};

g.Runner.prototype.applyPhysics = function() {
	var p = this.getPosition();
	
	if (this.jumping) this.v -= this.t * g.Gravity;
	if (this.v < 0 && this.v > -0.4) { // just crossed into falling
		this.jumpPeaked = true;
	}

	p.y += this.t * -this.v; // apply velocity

	if (p.y > g.RunnerHome.y) { // check for grounded state
		p.y = g.RunnerHome.y;
		this.jumping = false;
		this.jumpPeaked = false;
		this.v = 0;
	}

	// commit changes
	this.setPosition(p);
};

g.Runner.prototype.crouch = function() {
	this.gfx.setSize(80,50);
	this.crouching = true;
};

g.Runner.prototype.stand = function() {
	this.gfx.setSize(50,100);
	this.crouching = false;
};

g.Runner.prototype.raiseShield = function() {
	if (!this.shielding) {
		this.shielding = true;
		this.appendChild(this.shieldGfx);
	}
};

g.Runner.prototype.dropShield = function() {
	if (this.shielding) {
		this.shielding = false;
		this.removeChild(this.shieldGfx);
	}
};

g.Runner.prototype.rechargeJump = function() {
	if(!this.jumping) this.jumpCharged = true;
};

g.Runner.prototype.jump = function() {
	if (this.jumpCharged) {
		if (!this.jumping) {
			this.jumping = true;
			this.jumpCharged = false;
			this.v = g.JumpPower;
		} else if (!this.jumpPeaked) {
			this.v += this.t * g.JumpSustain;
		}
	}
};

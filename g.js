//set main namespace
goog.provide('g');

//get requirements
goog.require('goog.events.KeyCodes');
goog.require('goog.events.KeyHandler');
goog.require('lime.Director');
goog.require('g.Menu');

g.WIDTH = 800;
g.HEIGHT = 600;
g.d = null;
g.KeyboardState = {};

// entrypoint
g.start = function(){
    lime.scheduleManager.setDisplayRate(1000 / 60);

	g.d = new lime.Director(document.getElementById('game'),g.WIDTH,g.HEIGHT);
	var menuScene = new g.Menu();

    // set current scene active
    g.d.replaceScene(menuScene);
    goog.events.listen(document,[goog.events.EventType.KEYDOWN],function(e){
        g.KeyboardState[e.keyCode] = true;
    });
    goog.events.listen(document,[goog.events.EventType.KEYUP],function(e){
        g.KeyboardState[e.keyCode] = false;
    });
};

//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('g.start', g.start);

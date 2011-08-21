//set main namespace
goog.provide('g');

//get requirements
goog.require('lime.Director');
goog.require('g.Menu');

g.WIDTH = 800;
g.HEIGHT = 600;

// entrypoint
g.start = function(){
    lime.scheduleManager.setDisplayRate(1000 / 60);

	var director = new lime.Director(document.getElementById('game'),g.WIDTH,g.HEIGHT),
	    menuScene = new g.Menu();

    // set current scene active
    director.replaceScene(menuScene);
};

//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('g.start', g.start);

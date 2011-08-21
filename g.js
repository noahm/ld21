//set main namespace
goog.provide('g');


//get requirements
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.GlossyButton');
goog.require('lime.Sprite');
// goog.require('lime.Circle');
// goog.require('lime.Label');
// goog.require('lime.animation.Spawn');
// goog.require('lime.animation.FadeTo');
// goog.require('lime.animation.ScaleTo');
// goog.require('lime.animation.MoveTo');

g.WIDTH = 800;
g.HEIGHT = 600;

// entrypoint
g.start = function(){

	var director = new lime.Director(document.getElementById('game'),g.WIDTH,g.HEIGHT),
	    menuScene = new lime.Scene(),
        gameScene = new lime.Scene(),
        background = new lime.Sprite().setSize(800,600).setFill('assets/menubackground.png').setAnchorPoint(0,0),
        gameTitle = new lime.Label().setFontSize(40).setText('EscapeGame').setPosition(g.WIDTH/2, 75),
        startButton = new lime.GlossyButton('Start Game').setPosition(g.WIDTH/2, 500).setColor('#ff5d69');


    menuScene.appendChild(background);
    menuScene.appendChild(gameTitle);
    menuScene.appendChild(startButton);
    /*/add circle and label to target object
    target.appendChild(circle);
    target.appendChild(lbl);

    //add target and title to the scene
    scene.appendChild(target);
    scene.appendChild(title);

	director.makeMobileWebAppCapable();

    //add some interaction
    goog.events.listen(target,['mousedown','touchstart'],function(e){

        //animate
        target.runAction(new lime.animation.Spawn(
            new lime.animation.FadeTo(.5).setDuration(.2),
            new lime.animation.ScaleTo(1.5).setDuration(.8)
        ));

        title.runAction(new lime.animation.FadeTo(1));

        //let target follow the mouse/finger
        e.startDrag();

        //listen for end event
        e.swallow(['mouseup','touchend'],function(){
            target.runAction(new lime.animation.Spawn(
                new lime.animation.FadeTo(1),
                new lime.animation.ScaleTo(1),
                new lime.animation.MoveTo(g.WIDTH/2,g.HEIGHT/2)
            ));

            title.runAction(new lime.animation.FadeTo(0));
        });


    });*/

	// set current scene active
	director.replaceScene(menuScene);

}


//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('g.start', g.start);

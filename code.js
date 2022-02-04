var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bounadry1 = createSprite(200, 70,400,10);
var bounadry2 = createSprite(200, 300, 400, 10);
var start = createSprite(40, 185,80,220);
start.shapeColor=rgb(70, 118, 240)
var end = createSprite(360, 185,80,220);
end.shapeColor=rgb(232, 250, 32)
var sam = createSprite(50, 190,20,20);
sam.shapeColor=rgb(87, 212, 112)
var car1 = createSprite(120, 100,20,20);
car1.velocityY=9
car1.shapeColor=rgb(209, 0, 0)
var car2 = createSprite(170, 250,20,20);
car2.velocityY=-9
car2.shapeColor=rgb(209, 0, 0)
var car3 = createSprite(215, 100,20,20);
car3.velocityY=9
car3.shapeColor=rgb(209, 0, 0)
var car4 = createSprite(270, 250,20,20);
car4.velocityY=-9
car4.shapeColor=rgb(209, 0, 0)

var lives = 0;
var edges



function draw() {
  background("cyan");
  drawSprites();
 edges=createEdgeSprites();
 car1.bounceOff(bounadry1);
 car1.bounceOff(bounadry2);
 car2.bounceOff(bounadry1);
 car2.bounceOff(bounadry2);
 car3.bounceOff(bounadry1);
 car3.bounceOff(bounadry2);
 car4.bounceOff(bounadry1);
 car4.bounceOff(bounadry2);
 sam.collide(edges);
 
 if (keyDown(LEFT_ARROW)) {
   sam.x-=5
   
 }
 if (keyDown(RIGHT_ARROW)) {
   sam.x+=5
   
 }
 
 if (sam.isTouching(car1) || sam.isTouching(car2) || sam.isTouching(car3) || sam.isTouching(car4) ) {
   sam.x=50
   sam.y=190
   lives+=1
   playSpeech("sorry you touch the cars try again", "male", "English (UK)");
   
 }
 fill("black");
 textSize(25);
 text("lives:"+lives, 223,27);
 
 
 
 
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

//console.log("is konva working")

// var stageWidth = window.innerWidth;
// var stageHeight = window.innerHeight - 500;

// let's think our stage virtual size will be 1000x1000px
      // but the real size will be different to fit user's page
      // so the stage will be 100% visible on any device
      // var stageWidth = 780;
      // var stageHeight = 635;

      var stageWidth = window.innerWidth;
      var stageHeight = window.innerHeight;

      // function fitStageIntoParentContainer() {
      //   var container = document.querySelector('#stage-parent');

      //   // now we need to fit stage into parent
      //   var containerWidth = container.offsetWidth;
      //   // to do this we need to scale the stage
      //   var scale = containerWidth / stageWidth;

      //   stage.width(stageWidth * scale);
      //   stage.height(stageHeight * scale);
      //   stage.scale({ x: scale, y: scale });
      //   stage.draw();
      // }

      // fitStageIntoParentContainer();
      // // adapt the stage on any window resize
      // window.addEventListener('resize', fitStageIntoParentContainer);

      // function myFunction(md) {
      //   if (md.matches) { // If media query matches
      //     stageWidth = 577;
      //     stageHeight = 469;
      //   } else {
      //     stageWidth = 300;
      //     stageHeight = 244;
      //   }
      // }
     
      // var md = window.matchMedia("(max-width: 768px)")
      // myFunction(md) // Call listener function at run time
      // md.addListener(myFunction) // Attach listener function on state changes


// first we need Konva core things: stage and layer
// var stage = new Konva.Stage({
//   container: 'container',
//   width: width,
//   height: height
// });

var stage = new Konva.Stage({
  container: 'container',
  width: stageWidth,
  height: stageHeight
});

var layer = new Konva.Layer();
stage.add(layer);

// then we are going to draw into special canvas element
var canvas = document.createElement('canvas');
canvas.width = stage.width();
canvas.height = stage.height();

//trying to change the height and width UPDATE: doesnt allow to draw
// var canvas = document.createElement('canvas');
// canvas.width = stage.width("400px");
// canvas.height = stage.height("400px");

// created canvas we can add to layer as "Konva.Image" element
var image = new Konva.Image({
  image: canvas,
  x: 0,
  y: 0
});
layer.add(image);
stage.draw();

// Good. Now we need to get access to context element
var context = canvas.getContext('2d');
context.strokeStyle = '#F1880B';
context.lineJoin = 'round';
context.lineWidth = 5;

var isPaint = false;
var lastPointerPosition;
var mode = 'brush';

// now we need to bind some events
// we need to start drawing on mousedown
// and stop drawing on mouseup
image.on('mousedown touchstart', function() {
  isPaint = true;
  lastPointerPosition = stage.getPointerPosition();
});

// will it be better to listen move/end events on the window?

stage.on('mouseup touchend', function() {
  isPaint = false;
});

// and core function - drawing
stage.on('mousemove touchmove', function() {
  if (!isPaint) {
    return;
  }

  if (mode === 'brush') {
    context.globalCompositeOperation = 'source-over';
  }
  if (mode === 'eraser') {
    context.globalCompositeOperation = 'destination-out';
  }
  context.beginPath();

  var localPos = {
    x: lastPointerPosition.x - image.x(),
    y: lastPointerPosition.y - image.y()
  };
  context.moveTo(localPos.x, localPos.y);
  var pos = stage.getPointerPosition();
  localPos = {
    x: pos.x - image.x(),
    y: pos.y - image.y()
  };
  context.lineTo(localPos.x, localPos.y);
  context.closePath();
  context.stroke();

  lastPointerPosition = pos;
  layer.batchDraw();
});

var select = document.getElementById('tool');
select.addEventListener('change', function() {
  mode = select.value;
});
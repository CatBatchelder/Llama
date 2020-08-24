var stageWidth=window.innerWidth,stageHeight=window.innerHeight-500,stage=new Konva.Stage({container:"container",width:stageWidth,height:stageHeight}),layer=new Konva.Layer;stage.add(layer);var canvas=document.createElement("canvas");canvas.width=stage.width(),canvas.height=stage.height();var image=new Konva.Image({image:canvas,x:0,y:0});layer.add(image),stage.draw();var context=canvas.getContext("2d");context.strokeStyle="#F1880B",context.lineJoin="round",context.lineWidth=5;var lastPointerPosition,isPaint=!1,mode="brush";image.on("mousedown touchstart",(function(){isPaint=!0,lastPointerPosition=stage.getPointerPosition()})),stage.on("mouseup touchend",(function(){isPaint=!1})),stage.on("mousemove touchmove",(function(){if(isPaint){"brush"===mode&&(context.globalCompositeOperation="source-over"),"eraser"===mode&&(context.globalCompositeOperation="destination-out"),context.beginPath();var t={x:lastPointerPosition.x-image.x(),y:lastPointerPosition.y-image.y()};context.moveTo(t.x,t.y);var e=stage.getPointerPosition();t={x:e.x-image.x(),y:e.y-image.y()},context.lineTo(t.x,t.y),context.closePath(),context.stroke(),lastPointerPosition=e,layer.batchDraw()}}));var select=document.getElementById("tool");select.addEventListener("change",(function(){mode=select.value}));
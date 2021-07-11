canvas= document.getElementById ("MyCanvasSwissCheese");
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="grey";
ctx.lineWidth= 3;
ctx.rect(150 ,149 ,430 ,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth= 7;
ctx.arc(263 ,205 ,40 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="Yellow";
ctx.lineWidth= 7;
ctx.arc(310 ,250 ,40 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth= 7;
ctx.arc(355 ,202 ,40 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="Green";
ctx.lineWidth= 7;
ctx.arc(400 ,250 ,40 ,0 , 2*Math.PI);

ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth= 7;
ctx.arc(447 ,202 ,40 ,0 , 2*Math.PI);
ctx.stroke();






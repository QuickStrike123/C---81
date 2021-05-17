var Canvas = document.getElementById("MyCanvas");

var ctx = Canvas.getContext("2d");

var colour = "red";

ctx.beginPath();

ctx.strokeStyle = colour;

ctx.lineWidth = 2;

ctx.arc(400 , 300 , 40 , 0 , 2*Math.PI);

ctx.stroke();

Canvas.addEventListener("mousedown", my_mousedown);

function save(){

    colour = document.getElementById("TextInput").value;

}

function circle(mouse_x , mouse_y){

    ctx.beginPath();

    ctx.strokeStyle = colour;

    ctx.lineWidth = 2;

    ctx.arc(mouse_x, mouse_y, 40 , 0 , 2*Math.PI);

    ctx.stroke();

}

function my_mousedown(e){

    mouse_x = e.clientX - Canvas.offsetLeft;

    mouse_y = e.clientY - Canvas.offsetTop;

    console.log("X = " + mouse_x + " Y = " + mouse_y);

    circle(mouse_x , mouse_y)

    console.log(e);
}
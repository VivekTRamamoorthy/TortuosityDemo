let canvas = document.getElementById('canvas');

let c = canvas.getContext('2d');

window.addEventListener('resize',canvasResize)

function canvasResize(){
    canvas.height = canvas.clientHeight ;
    canvas.width  = canvas.clientWidth;
}
canvasResize()

// GET MOUSE POSITIONS

var mouseX=0;
var mouseY=0;
var drag = false;

// MOVE
canvas.addEventListener('mousemove', (event) => {
    let rect = canvas.getBoundingClientRect();
    mouseX=event.clientX-rect.left;
    mouseY=event.clientY-rect.top;

});
canvas.addEventListener('touchmove', (event) => {
    event.preventDefault();
    let rect = canvas.getBoundingClientRect();
    console.log({mouseX,mouseY});

    mouseX=event.touches[0].clientX-rect.left;
    mouseY=event.touches[0].clientY-rect.top;
});

// CLICK START

var mouseClickX = 0;
var mouseClickY = 0;

canvas.addEventListener('mousedown', (event) => {drag = false; 
    drag = true;
    let rect = canvas.getBoundingClientRect();
    mouseX=event.clientX-rect.left;
    mouseY=event.clientY-rect.top;
    mouseClickX=mouseX;
    mouseClickY=mouseY;
    onClickStart()

});
canvas.addEventListener('touchstart', (event) => {
    event.preventDefault();
    let rect = canvas.getBoundingClientRect();
    mouseX=event.touches[0].clientX-rect.left;
    mouseY=event.touches[0].clientY-rect.top;
    drag = true;
    mouseClickX = mouseX;
    mouseClickY = mouseY;
    onClickStart()

});
// CLICK RELEASE
canvas.addEventListener('mouseup', (event) => {
    drag=false;
    let rect = canvas.getBoundingClientRect();
    mouseX=event.clientX-rect.left;
    mouseY=event.clientY-rect.top;
    mouseDropX=mouseX;
    mouseDropY=mouseY;
    onClickEnd()

});
canvas.addEventListener('touchend', (event) => {
    event.preventDefault();
    mouseDropX=mouseX;
    mouseDropY=mouseY;
    drag=false;
    onClickEnd()

});

// HANDLER FUNCTIONS

var onClickStart = function(){
    counter = 0;
}
var onClickEnd = function(){
}





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

canvas.addEventListener('mousemove', (event) => {

    let rect = canvas.getBoundingClientRect();

    mouseX=event.clientX-rect.left;
    mouseY=event.clientY-rect.top;

});
canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    let rect = canvas.getBoundingClientRect();
    mouseX=e.touches[0].clientX-rect.left;
    mouseY=e.touches[0].clientY-rect.top;
});

// GET MOUSE CLICK

var mouseClickX = 0;
var mouseClickY = 0;

canvas.addEventListener('mousedown', (e) => {drag = false; 
    drag = true;
    mouseClickX=e.x;
    mouseClickY=e.y;
});
canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    drag = true;
    let rect = canvas.getBoundingClientRect();
    mouseClickX=e.touches[0].clientX-rect.left;
    mouseClickY=e.touches[0].clientY-rect.top;
});
// RELEASE
canvas.addEventListener('mouseup', (e) => {
    drag=false;
    mouseDropX=e.x;
    mouseDropY=e.y;
});
canvas.addEventListener('touchend', (e) => {
    e.preventDefault();
    mouseDropX=mouseX;
    mouseDropY=mouseY;
    drag=false;
});





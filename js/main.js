
let x= new Int16Array(1000);
let y= new Int16Array(1000);


let counter = 0;


function animate(){
    c.clearRect(0,0,canvas.width,canvas.height)
    c.fillStyle = "#999";
    c.fillRect(0,0,canvas.width*.2,canvas.height)
    c.fillRect(0.8*canvas.width,0,canvas.width*.2,canvas.height)
    let r = 10;
    // console.log({mouseX,mouseY});
    c.fillStyle = "#000"
    // PRINT MOUSE POSITION
    // c.fillRect(mouseX-r,mouseY-r,2*r,2*r)
    c.strokeStyle = "#000";
    if(drag){
        console.log("dragging")
        x[counter] = mouseX;
        y[counter] = mouseY;
        c.beginPath()
        c.moveTo(x[counter],y[counter])
        x[counter]=mouseX;
        y[counter]=mouseY;
        for (let index = 0; index <= counter; index++) {
            c.lineTo(x[index],y[index]);
        }
        c.stroke()
        counter++
    }else{
        // for (let index = 0; index <= counter; index++) {
        //     x[index]=0;
        //     y[index]=0;
        // }
        counter =0;
    }
    window.requestAnimationFrame(animate)
}
animate();
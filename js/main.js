
let x= new Int16Array(1000);
let y= new Int16Array(1000);


let counter = 0;

const tortuosityDisplay = document.getElementById('tortuosity-display');
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

        tortuosityDisplay.innerText = 'Tortuosity = '+ tortuosity(x,y,counter);
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


function tortuosity(x,y,counter){
    // x contains the x coordinates of the path, is 1000 ints long, with non-zeros upto counter
    // y contains the y coordinates of the path, is 1000 ints long, with non-zeros upto counter
    // counter contains the index up to which x and y contain values

    // tortuosity formula is given by integral v^2 by (int v)^2
    // v is given by the direction of x2-x1, y2-y1
    // 
    let numerator = 0;
    for (let index = 0; index < counter; index++) {
        let v = [x[index+1]-x[index], y[index+1]-y[index]];

        numerator+= v[0]**2 + v[1]**2;

    }
    let denominator = (x[counter-1]-x[0])**2+(y[counter-1]-y[0])**2
    console.log(denominator);
    console.log(numerator);
    return numerator/denominator;


}


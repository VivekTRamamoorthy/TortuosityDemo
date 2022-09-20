const MAX_SIZE = 1000;
let x= new Int16Array(MAX_SIZE);
let y= new Int16Array(MAX_SIZE);


let counter = 0;

const tortuosityDisplay = document.getElementById('tortuosity-display');
function animate(){
    if(drag){
        c.clearRect(0,0,canvas.width,canvas.height)
        c.fillStyle = "#999";
        // c.fillRect(0,0,canvas.width*.2,canvas.height)
        // c.fillRect(0.8*canvas.width,0,canvas.width*.2,canvas.height)
        let r = 10;
        // console.log({mouseX,mouseY});
        c.fillStyle = "#000"
        c.lineWidth = 3;

        // PRINT MOUSE POSITION
        // c.fillRect(mouseX-r,mouseY-r,2*r,2*r)
        c.strokeStyle = "#000";
        x[counter] = mouseX;
        y[counter] = mouseY;
        c.beginPath()
        let index1
        for (let index = 0; index < counter-2; index++) {
            c.lineTo(x[index],y[index]);
            c.stroke()
            index1= index
        }
        console.log(index1);
        counter++

        tortuosityDisplay.innerText = 'Tortuosity = '+ tortuosity(x,y,counter);
    }else{
        // for (let index = 0; index <= counter; index++) {
        //     x[index]=0;
        //     y[index]=0;
        // }
        // counter = 0;
    }
    window.requestAnimationFrame(animate)
}
animate();


function tortuosity(x,y,counter){
    // x contains the x coordinates of the path, is 1000 ints long, with non-zeros upto counter
    // y contains the y coordinates of the path, is 1000 ints long, with non-zeros upto counter
    // counter contains the index up to which x and y contain values

    // tortuosity formula is given by [1/V integral v^2 dV ]  / [1/V int vdV ]^2
    // v is given by the direction of x2-x1, y2-y1

    // numerator
    if (counter > MAX_SIZE){
        counter = MAX_SIZE;
    }
    let numerator = 0;
    let L = 0;
    for (let index = 0; index < counter-1; index++) {
        let v = [x[index+1]-x[index], y[index+1]-y[index]];
        let v_squared = v[0]**2 + v[1]**2
        let dl = Math.sqrt(v_squared)
        numerator+= v_squared*dl;
        L+= dl;
        
    }
    numerator = numerator/L;
    
    //denominator
    let denominator = 0;
    let int_v_dl =[0, 0];
    for (let index = 0; index < counter-1; index++) {
        let v = [x[index+1]-x[index], y[index+1]-y[index]];
        let v_squared = v[0]**2 + v[1]**2;
        let dl = Math.sqrt(v_squared)
        int_v_dl[0]+=v[0]*dl;
        int_v_dl[1]+=v[1]*dl;
        
    }
    denominator+= (int_v_dl[0]**2+int_v_dl[1]**2)/(L**2);
    console.log("den = "+denominator);
    console.log("numerator = "+numerator);
    if(denominator ==0){
        return 1;
    }
    return numerator/denominator;


}


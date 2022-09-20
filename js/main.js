const MAX_SIZE = 1000;
let x= new Int32Array(MAX_SIZE);
let y= new Int32Array(MAX_SIZE);
let counter = 0;
animate();


function animate(){
    if(drag){
        c.clearRect(0,0,canvas.width,canvas.height)
        c.fillStyle = "#999";
        c.lineWidth = 3;
        c.strokeStyle = "#fff";
        x[counter] = mouseX;
        y[counter] = mouseY;
        c.beginPath()
        for (let index = 0; index < counter-1; index++) {
            c.lineTo(x[index],y[index]);
        }
        c.stroke()
        counter++
        if(counter>2){
            document.getElementById('tortuosity-display').innerText = 'Tortuosity = '+ tortuosity(x,y,counter).toPrecision(4);
        }
    }
    window.requestAnimationFrame(animate)
}

function tortuosity(x,y,counter){
    // x contains the x coordinates of the path, is 1000 ints long, with non-zeros upto counter
    // y contains the y coordinates of the path, is 1000 ints long, with non-zeros upto counter
    // counter contains the index up to which x and y contain values
    // tortuosity of a path can be given by [1/V integral v^2 dV ]  / [1/V int vdV ]^2
    // v is given by the direction of x2-x1, y2-y1

    // numerator
    if (counter > MAX_SIZE){
        counter = MAX_SIZE;
    }
    let numerator = 0;
    let L = 1e-8;
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
    if(denominator ==0){
        return 1;
    }
    return numerator/denominator;
}
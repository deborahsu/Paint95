var color = "black";
var brushSizeX = '20px';
var brushSizeY = '20px';
var canvas = document.getElementById("canvas");
var borderRadius = "0%";

function draw(e) {
    var dot = document.createElement("div");
    dot.style.position = 'absolute';
    dot.style.backgroundColor = color;
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    dot.style.width = brushSizeX;
    dot.style.height = brushSizeY;
    dot.style.borderRadius = borderRadius;

    canvas.appendChild(dot);
}
function keepDrawing(e) {
    if (e.buttons == "1") {
        draw(e)
    }
}
canvas.addEventListener("mousemove", function (e) {
    keepDrawing(e);
});
canvas.addEventListener("mousedown", function (e) {
    keepDrawing(e);
});


/* Colors selection and eraser*/
var colors = document.getElementsByClassName("color");
for (var i = 0; i < colors.length; i++) {
    colors[i].addEventListener("click", function (e) {

        color = e.target.id || e.target.parentElement.id;
        if (color == 'white') {
            brushSizeX = '30px';
            brushSizeY = '30px';
        } else {
            brushSizeX = '20px';
            brushSizeY = '20px';
        }
    });
}

/* Clear Screen feature*/
var clearCanvas = document.getElementById("clear");
clearCanvas.addEventListener("click", function (e) {
    document.getElementById("canvas").innerHTML = "";
});



/* Brush size feature*/

var brushTypes = document.getElementsByClassName("brushtype");
for (var i = 0; i < brushTypes.length; i++) {
    brushTypes[i].addEventListener("click", function (e) {
        brushType = e.target.id || e.target.parentElement.id;
        if (brushType == "roller") {
            brushSizeX = '30px';
            brushSizeY = '20px';
        } else {
            brushSizeX = '20px';
            brushSizeY = '20px';
        }
    });
}

//Shapes feature/
var shapes = document.getElementsByClassName("shape");
for (var i = 0; i < shapes.length; i++) {
    shapes[i].addEventListener("click", function (e) {
        shape = e.target.id || e.target.parentElement.id;
        if (shape == "circle") {
            borderRadius = '50%';

        } else {
            borderRadius = '0%';

        }

    });
}


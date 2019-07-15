var colors = generateColors(6);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numSquares = 6;

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");

    numSquares = 3;

    colors = generateColors(numSquares);

    pickedcolor = pickColor();

    colorDisplay.textContent = pickedcolor;

    for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }

    resetButton.textContent = "New Color";
    messageDisplay.textContent = "";
})

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");

    numSquares = 6;

    colors = generateColors(numSquares);

    pickedcolor = pickColor();

    colorDisplay.textContent = pickedcolor;

    for (var i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }

    resetButton.textContent = "New Color";
    messageDisplay.textContent = "";
})

resetButton.addEventListener("click", function() {

    colors = generateColors(numSquares);

    pickedcolor = pickColor();

    colorDisplay.textContent = pickedcolor;

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }

    h1.style.backgroundColor = "steelblue";

    resetButton.textContent = "New Color";
    messageDisplay.textContent = "";
})

colorDisplay.textContent = pickedcolor;

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedcolor) {
            messageDisplay.textContent = "Correct!";
            changeColor(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?";
        }
        else {
            this.style.backgroundColor = "#77AA66";
            messageDisplay.textContent = "Try Again!";
        }
    })
}

function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColors(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }

    return arr;
}

function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}
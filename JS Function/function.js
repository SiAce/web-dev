function isEven(num) {
    return (num % 2 === 0);
}

function factorial(num) {
    var product = 1;
    for (var i = 1; i < num + 1; i++) {
        product *= i;
    }
    return product;
}

function kebabToSnake(kebabString) {
    var snakeString = "";
    for (var i = 0; i < kebabString.length; i++) {
        if(kebabString[i] === "-") {
            snakeString += "_";
        }
        else {
            snakeString += kebabString[i];
        }
    }
    return snakeString;
}
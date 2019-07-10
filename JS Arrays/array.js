function printReverse(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

function isUniform(array) {
    var firstItem = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== firstItem) {
            return false;
        }
    }
    return true;
}

function sumArray(array) {
    var sum = 0;
    array.forEach(function (item) {
        sum += item;
    })
    return sum;
}

function max(array) {
    var max = 0;
    array.forEach(function (item) {
        if (item > max) {
            max = item;
        }
    })
    return max;
}

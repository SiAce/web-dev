function average(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum/arr.length;
}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));
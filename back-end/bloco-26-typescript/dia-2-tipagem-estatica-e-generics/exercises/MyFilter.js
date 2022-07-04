function myFilter(array, callback) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log(myFilter([1, 2, 3], function (item) {
    return item < 3;
}));

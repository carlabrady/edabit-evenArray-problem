console.log('test source')

var numArray = [2,3,4,5,6,7,8,9] //test aaray

function noOdds(arr) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            newArray.push(arr[i]);
        };
    };
    console.log(newArray);
    return newArray;
} // end noOdds function

evenNum(numArray);
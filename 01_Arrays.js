function reverseArray(a) {
    var n = a.length 
    var reversedArr = []; 
    for (var i = n - 1; i >= 0; i--) {
        reversedArr.push(a[i]);
      }
      return reversedArr;
}

var a = [1, 4, 3, 2]
arr = reverseArray(a)
console.log(arr);

function reverseArrayB(b) {
    var mapping = { 1: "One", 2: "Two", 3: "Three", 4: "Four" };
    return b.map(item => mapping[item]).reverse()
}

var b = [1, 4, 3, 2]
var reverseB = reverseArrayB(b)
console.log(reverseB);
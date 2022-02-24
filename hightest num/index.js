// 1) Find The Second Highest Element From the array
function nextBiggest(arr) 
{    
    var max = Math.max.apply(null, arr); // get the max of the array
    arr.splice(arr.indexOf(max), 1); // remove max from the array
    return Math.max.apply(null, arr); // get the 2nd max
    
};
const arr = [12,50,1,10,56,1];
console.log(nextBiggest(arr));



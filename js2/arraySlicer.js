
/*
* Slice a given array into multiple arrays by the given length,
* and return them as an array of arrays.
* @param {Array} array
* @param {Number} length
*/
function sliceArray(array,length) {
    if(array.length <= 0) {
        throw new Error("Invalid Array, expected array length of atleast 1");
    }
    if(length <= 0) {
        throw new Error(`Invalid Length, expected a positive integer, received ${length}` );
    }
    const result = [];
    let i = 0;
    while(i < array.length) {
        result.push(array.slice(i, i + length));
        i = i  + length;
    }
    return result;
    }
    
    // console.log("Sliced Array - ", sliceArray([1, 2, 3, 4, 5, 6, 7], 3));
    // console.log("Sliced Array - ", sliceArray([1, 2, 3, 4, 5, 6, 7], 2));
    // console.log("Sliced Array - ", sliceArray([1, 2, 3, 4, 5, 6, 7], 4));
    // //console.log("Sliced Array - ", sliceArray([1, 2, 3], 4));
    // //console.log("Sliced Array - ", sliceArray([], 3));
    // console.log("Sliced Array - ", sliceArray([1, 3], 0));
    // console.log("Sliced Array - ", sliceArray([1, 3], -2));
    
    module.exports = sliceArray;
    
    
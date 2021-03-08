// /*
//  * Slice a given array into multiple arrays by the given length,
//  * and return them as an array of arrays.
//  * @param {Array} array
//  * @param {Number} length
//  */
// function sliceArray(...args) {}

// module.exports = sliceArray;
function sliceArray(array, length) {
     const slice_arr=[];
     let pointer = 0, sliceArr = [], len = array.length;
    if(!array.length)
    {
        throw new Error("Invalid Length");
    }
   
    
  while (pointer < len) {
    slice_arr.push(array.slice(pointer,pointer += length));
  }
  return slice_arr;
}
//console.log(sliceArray([1,2,3,4,5,6,7],2));
module.exports = sliceArray;





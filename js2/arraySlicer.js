/*
 * Slice a given array into multiple arrays by the given length,
 * and return them as an array of arrays.
 * @param {Array} array
 * @param {Number} length
 */


//const slicedArray=[];
//    Array(Math.ceil(array.length/length)).fill().map(function(_,i){
//         slicedArray.push(array.slice(length*i,length*i+length));
       
//    }
//    return slicedArray;
//    )
function sliceArray(array, length) {
    const slicedArray=[];
    let pointer = 0, sliceArr = [], len = array.length;
  while (pointer < len) {
    slicedArray.push(array.slice(pointer,pointer += length));
  }
  return slicedArray;
}

 console.log(sliceArray([1, 2, 3, 4, 5, 6, 7],3))
 console.log(sliceArray([1, 2, 3], 4))

module.exports = sliceArray;

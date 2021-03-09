// IMP:
// - do not use Objects.assign
// - do not use loops
//
// Question: what happens when you spread `undefined`? What about null?

function combineObjects(a,b,n) {
    const mergeObject={...a,...b,...n}
   // console.log(merge);
    return mergeObject;
} 

module.exports = combineObjects;
//  combineObjects({},{
//     name: 'dante',
//     age: 35},{
//         name: 'nero',
//         weapon: 'angel wings'})
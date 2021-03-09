// IMP:
// - do not use Objects.assign
// - do not use loops
//
// Question: what happens when you spread `undefined`? What about null?

function combineObjects(...args) {
    var newObj = {};
    args.map(entry => {
        newObj = {...newObj, ...entry}
    });
    return newObj;
}
// console.log("Result", combineObjects({name: 'Teju'}, {surname: 'Jadhav'}));
module.exports = combineObjects;

// IMP:
// - do not use Objects.assign
// - do not use loops
//
// Question: what happens when you spread `undefined`? What about null?

function combineObjects(a, b, n) {
    const objectCombine = { ...a, ...b, ...n }
    return objectCombine;

}

module.exports = combineObjects;

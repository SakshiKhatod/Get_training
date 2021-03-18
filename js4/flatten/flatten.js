// IMP!:
// - do not use loops
// - do no use array.push

function flatten(...args) {
    const flattenArray = [].concat.apply([], ...args);
    return flattenArray;
}

module.exports = flatten;
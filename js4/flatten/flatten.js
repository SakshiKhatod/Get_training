// IMP!:
// - do not use loops
// - do no use array.push

function flatten(...args) {
    const array = args.join();
    return JSON.parse("[" + array + "]");
}
module.exports = flatten;

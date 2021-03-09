// IMP!:
// - do not use loops
// - do no use array.push

function flatten(...args) {
    const array = args.reduce((acc, curr) => {
        return acc = acc + curr;
    }, []);
    // return array;
    // const array = args.join();
    return JSON.parse("[" + array + "]");
}
console.log(flatten([1], [2, 3], [4, 5, 6]));
module.exports = flatten;

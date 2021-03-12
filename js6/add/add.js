add = (...args) => {
    if(args.length === 0) return 0;
    return args.reduce((acc, curr) => {
        return acc = acc + curr;
    });
}
module.exports = add;
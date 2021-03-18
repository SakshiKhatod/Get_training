function add(...args) {
    const sum = args.reduce((accumulator, currentvalue) =>
        accumulator + currentvalue);
    return sum;
}

module.exports = add;
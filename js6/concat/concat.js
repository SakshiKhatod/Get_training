concat = (...args) => {
    return args.reduce((acc, curr) => {
        return acc = acc + curr;
    }, '');
}

module.exports = concat;
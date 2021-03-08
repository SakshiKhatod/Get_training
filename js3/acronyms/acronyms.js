function acronymize(string) {



    const splitOnSpace = string.split(" ");
    const removeAnd = splitOnSpace.filter(entry => entry != "and");
    const acronyme = removeAnd.reduce((acc, curr) => {
        return acc = acc + curr[0];
    }, '');
    return acronyme.toUpperCase();
}

module.exports = acronymize;

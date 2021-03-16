function acronymize(string) {
    const word = string.split(" ");
    const removeAnd = word.filter(entry => entry != "and");
    const result = removeAnd.reduce((acc, curr) => {
        return acc = acc + curr[0];
    }, '');
    return result.toUpperCase();
}

module.exports = acronymize;

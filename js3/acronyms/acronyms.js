function acronymize(sentense) {
    const words = sentense.split(" ");
    const filteredWords = words.filter(entry => entry != "and");
    const acronym = filteredWords.reduce((acc, curr) => {
        return acc = acc + curr[0];
    }, '');
    return acronym.toUpperCase();
}
module.exports = acronymize;

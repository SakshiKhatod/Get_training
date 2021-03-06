// For help pls look into
//   - Object.assign() to copy multiple objects into another object

/*
 * IMPORTANT INSTRUCTIONS:
 *   - Do not use loops
 *   - Do not use let, var
 * Given a sentence as input, return an object with the count of consonants in the sentence
 * @param {string} sentence
 *
 * eg: input: "bacd aio palleted"
 *     output: { b: 1, c: 1, d: 3, p: 1, l: 2, t:1}
 */
function countConsonants(sentence) {
    const isConsonantRegex = /[bcdfghjklmnpqrstvwxyz]/g;
    const consonant = sentence.match(isConsonantRegex);
    const consonantCountMap = consonant.reduce((acc, char) => {
        if(acc[char]) acc[char] += 1;
        else acc[char] = 1;
        return acc;
    }, {});
    return consonantCountMap;
}
module.exports = countConsonants;

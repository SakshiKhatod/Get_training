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
    const find = /[bcdfghjklmnpqrstvwxyz]/g;
    const matched = sentence.match(find);
    let count = 1;
    const reducer = (accumulator, currentVal) => {
        console.log("Accumulator", accumulator);
        console.log("CurrentVal", currentVal);
        if(accumulator === currentVal) {
            count += 1;
            console.log("Count in if", count);
            // accumulator = {accumulator, count};
            return accumulator;
        }
        count = 1;
        console.log("Count in else", count);
        return accumulator;
    }
    console.log("Matched", matched.reduce(reducer));
    const result = Object.assign({}, matched);
    return result;
}
console.log(countConsonants('ayehayeiiiihmn'));
module.exports = countConsonants;

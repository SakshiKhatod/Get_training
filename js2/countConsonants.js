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
    const consonantArray=sentence.split('')
    .filter(e=>e.match(/[bcdfghjklmnpqrstuvwxyz]/g))
    .reduce((a, e) => {
        if(a[e] = a[e])
        {a[e]=a[e] + 1} 
        else{ a[e]=1} 
        //console.log(a[e]);
        return a },{});
console.log("Occurence of consonants in the sentence :",consonantArray);

}
countConsonants("bacd aio palleted");
countConsonants('dear dead damsel in distress');

module.exports = countConsonants;

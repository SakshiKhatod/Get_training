function acronymize(sentence) {
    const acronym=sentence
    .split(' ')
    .filter(string=>string!=='and'&& string!=='And')
    .reduce((accumulator,str)=>{
            return accumulator+str.charAt(0).toUpperCase()
        },'');
return acronym;
}

module.exports = acronymize;

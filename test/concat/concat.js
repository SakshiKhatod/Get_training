function concat(...args){
const concatenatedString = args.reduce((acc,currStr)=>
{
    return acc + currStr;
})
return concatenatedString;
}
module.exports=concat

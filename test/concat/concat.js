function concat(...String){
const concatenatedString = String.reduce((acc,currStr)=>
{
    return acc + currStr;
})
return concatenatedString;
}
module.exports=concat

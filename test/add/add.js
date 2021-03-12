function add(...numbers){
const sum = numbers.reduce((acc,curr)=>
{
    return acc + curr;
    })
    return sum;
}
function mul(...numbers){
const multiplication = numbers.reduce((acc,curr)=>
{
    return acc * curr;
    })
    return multiplication;
}


module.exports={add,mul}
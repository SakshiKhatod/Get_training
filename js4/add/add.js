function add(...args) {
    const sum = args.reduce((acc,curr)=>{
return acc + curr;
    })
    return sum;
}
module.exports = add;

// IMP!:
// - do not use loops
// - do no use array.push

function flatten(...args) {
  const flattenArray=args.reduce((acc,curr)=> {return acc.concat(curr)})
  return flattenArray;
}
module.exports = flatten;

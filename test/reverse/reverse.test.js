const { TestScheduler } = require('jest');
const reverse=require('./reverse');
describe('reverse the elements of array',()=>{
    test('return the given array reversed',()=>
    {
        expect(reverse([1,2,3])).toEqual([3,2,1]);
        expect(reverse([])).toBe("array can't be reversed : invalid length")
    })
})
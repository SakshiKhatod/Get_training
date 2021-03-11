
const concat=require('./concat');

describe('test concat',()=>{
    test('concatenate given two strings',()=>{
        expect(concat('Manasi','Bendre')).toBe('ManasiBendre');
    });
    test('concatenate given strings',()=>{
        expect(concat('National','Aeronautics','And', 'Space','Administration')).toBe('NationalAeronauticsAndSpaceAdministration');
    });
});

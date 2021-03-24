const {add,mul} = require('./add','./mul');
describe('test add numbers', () => {
    test('should add all numbers', () => {
      expect(add(10, 100)).toBe(110);
      expect(add(15, 5)).toBe(20);
      expect(add(5, 6, 10, 20, 11, 10)).toBe(62);
     
    });
  });

  describe('multiply numbers',()=>{
    test('should multiply given numbers',()=>{
      expect(mul(5,5)).toBe(25);
      expect(mul(4,3,6)).toBe(72);
    })
  })
  
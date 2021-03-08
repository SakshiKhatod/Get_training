const Stack = require('./stack');

describe('testing stack', () => {
  test('should push items into stack and take a peek', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peek()).toBe(3);
    expect(stack.peek()).toBe(3);
  });

  test('should push items into stack and pop in LIFO order', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);

    expect(stack.peek()).toBe(1);
    expect(stack.pop()).toBe(1);

    // when there is nothing to pop
    expect(stack.pop()).toBe(null);
  });

  test('should be able to define stack size', () => {
    const stack = new Stack(2);

    stack.push(1);
    stack.push(2);

    expect(() => stack.push(3)).toThrow('Stack overflow, limit reached');
  });
});

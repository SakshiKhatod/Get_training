function Stack(...args) {
    this.items = [...args]; 
    return this.items;
}

Stack.prototype.push = function(value) {
    this.items.push(value);
    return;
}

Stack.prototype.peek = function() {
    if(this.items.length) {
        const index = this.items.length - 1;
        return this.items[index];
    }
    return null;
}

// Stack.prototype.dummy = function() {
//     return 0;
// }

Stack.prototype.pop = function() {
    if(this.items.length === 0) {
        return(null);
    }
    return this.items.pop();
}
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop());
stack.push(3);
console.log(stack);
// console.log(stack.dummy());
console.log(stack.peek());

// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.peek());
// console.log("peek", stack.peek());
// console.log(stack);
module.exports = Stack;

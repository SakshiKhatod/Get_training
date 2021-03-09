function Stack(...args) {
    this.items = [];
    this.bound = args;
}

Stack.prototype.push = function(value) {
    if(this.bound.length === 0 || this.bound > this.items.length) {
        this.items.push(value);
        return;
    }
    throw 'Stack overflow, limit reached';
}

Stack.prototype.peek = function() {
    if(this.items.length) {
        const index = this.items.length - 1;
        return this.items[index];
    }
    return null;
}

Stack.prototype.pop = function() {
    if(this.items.length === 0) {
        return(null);
    }
    return this.items.pop();
}

module.exports = Stack;

function Stack(...args) {
    this.data=[...args];

}
Stack.prototype.push=function(element){
        if(this.data.length<element){
        return this.data.push(element);
        }
        else{
            return "limit reached";
        }
}
Stack.prototype.pop=function()
{
        if(this.data.length)
        {
            return this.data.pop();
        }
        else
        {
            return null;
        }
}
Stack.prototype.peek=function(){
        if(this.data.length){
            let top=this.data.length
            return this.data[top-1];
        }
        else
        return null;
    }
module.exports = Stack;
 
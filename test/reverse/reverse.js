function reverse(array){
    if(array.length==0)
    {
        return "array can't be reversed : invalid length"
    }
    return array.reverse();
    }
    
    module.exports=reverse;reverse([1,2,3])
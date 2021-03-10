const fib = (args) => { 
        if(args<=1)
        {
            return args;
        }
        return fib(args-1)+fib(args-2);
    };
module.exports = fib;
 
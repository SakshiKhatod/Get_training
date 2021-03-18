const fib = (a) => {

    // return args < 1 ? 0
    //     : args <= 2 ? 1
    //         : fibonacci(args - 1) + fibonacci(args - 2);
    if (a <= 1) {
        return a;
    }
    return fib(a - 1) + fib(a - 2);
};


module.exports = fib;

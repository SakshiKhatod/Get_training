### Instructions

Node gives us access to async functions like readFile, writeFile etc, which implement asynchronous code via callbacks. And hence, they do not play well with '.then' chaining.

Implement a function, that will take such a callback based async function, and converts it into
a promise based function, so that we use '.then' to further process the result. Pls refer to documentation of 'readFile' from node JS, so that you get an idea of how the function is normally called with a
cb function.

const promisify = fn => (...args) => {
    const promise = new Promise((resolve, reject) => {
        fn(...args, (err, data) => {
            if(err) reject(err);
            resolve(data);
        });
    });
    return promise;
};

module.exports = promisify;
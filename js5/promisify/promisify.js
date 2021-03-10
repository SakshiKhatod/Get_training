const util = require('util');
const promisify = (...args) => {
    return util.promisify(...args);
};

module.exports = promisify;


// const promise = new Promise((resolve, reject) => {
    //     fs.readFile('./js5/promisify/data.txt', (err, data) => {
    //         if(err) {
    //             resolve('Failed to read file');
    //         }
    //         resolve(data);
    //     });
    // });
    // return promise;
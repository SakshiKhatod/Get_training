const fs = require('fs');
//const promisify = require('./promisify')
const util = require('util')
// const readFilePromise = util.promisify(fs.readFile)
//const readFilePromise = promisify(fs.readFile);
const validFilePath = './js5/promisify/data.txt';
const promisify = (args) => {
   // return util.promisify(args);
   return new Promise((resolve, reject) => {
     fs.readFile(args,(err, data) => {
        if (err) return reject(err)
        resolve(data)
      }
   // })
})
}


module.exports = promisify;
 
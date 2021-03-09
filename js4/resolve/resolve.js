function resolve(...args) {
    const promise=new Promise((resolve)=>{
        return resolve(...args);
    })
    
    return promise;
}

module.exports = resolve;

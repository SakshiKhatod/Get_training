function fetchfun() {
    fetchAsync()
    .then(data => {
        if(document.getElementById('p') === null) {
            const newPara = document.createElement("p");
            const newContent = document.createTextNode(data.rates.USD + " USD" + " = " + data.rates.INR + " INR" + '\n');
            newPara.appendChild(newContent);
            const currEle = document.getElementById('get-rate')
            currEle.insertAdjacentElement('afterend', newPara);
        }
        else {
            const newContent = data.rates.USD + " USD" + " = " + data.rates.INR + " INR" + '\n';
            document.getElementById('p').innerHTML += newContent;
        }
    });
}

async function fetchAsync() {
    const response = await fetch("https://api.exchangeratesapi.io/latest?base=USD");
    return await response.json();
}
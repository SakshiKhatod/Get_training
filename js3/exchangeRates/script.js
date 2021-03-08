function fetchfun() {
    fetch("https://api.exchangeratesapi.io/latest?base=USD")
    .then(response => response.json())
    .then(data => {
        const newPara = document.createElement("p");
        const newContent = document.createTextNode(data.rates.USD + " USD" + " = " + data.rates.INR + " INR");
        newPara.appendChild(newContent);
        const currEle = document.getElementById('get-rate')
        currEle.insertAdjacentElement('afterend', newPara);
    });
}


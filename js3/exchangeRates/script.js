function fetchAPI() {
    fetch("https://api.exchangeratesapi.io/latest?base=USD")
        .then(response => response.json())
        .then(data => {
            const parag = document.createElement("p");
            const display = document.createTextNode(data.rates.USD + " USD" + " = " 
            + data.rates.INR + " INR");
            parag.appendChild(display);
            const getElement = document.getElementById('get-rate')
            getElement.insertAdjacentElement('afterend', parag);
        });
}
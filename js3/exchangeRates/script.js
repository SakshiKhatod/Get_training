function fetchfun() {
    fetch("https://api.exchangeratesapi.io/latest")
    .then(response => response.json())
    .then(data => {
        document.getElementById('para').innerHTML += data.rates.USD + " USD" + " = " + data.rates.INR + " INR";
    });
}

// const newBr = document.createElement("br");
// document.getElementById("para").innerHTML += newBr;
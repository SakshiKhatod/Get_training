 function apiCall()
{
    fetch('https://api.exchangeratesapi.io/latest')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
     console.log(" USD: ",data.rates.USD+"   INR:  "+data.rates.INR);
    
    document.getElementById("demo").innerHTML += +"  "+ data.rates.USD +"   "+data.rates.INR+"";
   
    })
    
}
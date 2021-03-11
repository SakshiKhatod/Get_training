
//   function apiCall(){
//    fetch('https://api.exchangeratesapi.io/latest')
//     .then(( response ) => {
//       return response.json();
//     })
//     .then(( data ) => {
//       const Para = document.createElement("p");
//       Para.innerHTML =+ " "+data.rates.USD + " USD " + " = "+" " + data.rates.INR+ " INR " ;
//       document.body.appendChild(Para); 
//       const currElement = document.getElementById('get-rate')
//       currElement.insertAdjacentElement('afterend',Para);   
//     })
// }
async function apiCall(){
  const fetchData = await fetch('https://api.exchangeratesapi.io/latest');
  const response = await fetchData.json();
  return response;
}
function fetchApi(){
   apiCall().then((data)=>{
   demo.innerHTML =+ " "+data.rates.USD + " USD " + " = "+"    " + data.rates.INR+ " INR " ;
   document.body.appendChild(demo); 
   const currElement = document.getElementById('get-rate')
   currElement.insertAdjacentElement('afterend',demo);  
  })
}


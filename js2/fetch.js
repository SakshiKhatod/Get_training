const ip = fetch('http://ip.jsontest.com/')
  .then(response => response.json())
  .then(data => console.log(data));
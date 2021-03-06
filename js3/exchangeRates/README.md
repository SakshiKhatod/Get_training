### Instructions

Given is a basic html file and a script, `script.js` that has been added
to the html.

Implement the script such that it performs the following tasks.

- on clicking the button you should fetch the current exchange rate
  from the endpoint given below.
- parse the JSON response and get the exchange rate for USD - INR
- append it to the body of the html file programatically.

API to call: https://api.exchangeratesapi.io/latest
refer the following docs for the response json structure:
https://exchangeratesapi.io/

hints:

- how to get the reference to a html node (in this case, the button) [can use its id?]
- learn how to create html elements in Js, and how to set or modify their inner text - innerHTML
- use fetch
- how to attach event listener on click to a button?

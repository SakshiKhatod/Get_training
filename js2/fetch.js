// const ip = fetch('http://ip.jsontest.com/')
//   .then(response => response.json())
//   .then(data => console.log(data));

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sumOfNumbers = numbers.reduce((acc, curr) => {
//   acc = acc + curr;
//   return acc;
// });
// console.log("Sum -", sumOfNumbers);

// const myName = ['t', 'e', 'j', 'u'];
// const sum = myName.reduce((acc, curr) => {
//   acc = acc + curr;
//   return acc;
// });
// console.log("Name -", sum);


// function add(...args) {
//     return args.reduce((acc, curr) => {
//         return acc = acc + curr;
//     });
// }

// console.log("Addition", add(1, 2, 4, 7, 9, 26));
// console.log("Addition", add('go', 'od', 1));



// const game = {
//     name: 'Hockey',
//     type: 'outdoor',
//     stick: 'Graphite'
// }

// const { name, ...rest} = game;
// console.log(name);
// console.log(rest);




function doSomething({name, value, sum}) {
    console.log(name);
    return sum = sum / value;
}

console.log("Hey!", doSomething({value: 10, name: 'Teju', sum: 100}));
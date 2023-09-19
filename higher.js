// const radius = [3, 1, 2, 4]; 

// const area = function (radius) {
//     return Math.PI * radius * radius;
// }
// const circumference = function (radius) {
//     return 2 * Math.PI * radius;
// }
// const diameter = function (radius) {
//     return 2  * radius;
// }

// const calculation = function (radius, logic){
//     const output = [];
//     for(let i = 0; i < radius.length; i++){
//         output.push(logic(radius[i]))
//     }
//     return output;
// }

// console.log(calculation(radius, area)); 
// console.log(calculation(radius, circumference)); 
// console.log(calculation(radius, diameter)); 

// const radius = [3, 1, 2, 4]; 

// const area = function (radius) {
//     return Math.PI * radius * radius;
// }
// const circumference = function (radius) {
//     return 2 * Math.PI * radius;
// }
// const diameter = function (radius) {
//     return 2  * radius;
// }

// Array.prototype.calculation = function (logic){
//     const output = [];
//     for(let i = 0; i < this.length; i++){
//         output.push(logic(this[i]))
//     }
//     return output;
// }

// console.log(radius.calculation(area));

// const arr = [8, 5, 6, 3, 7]

// const outputMax = arr.reduce((max, curr)=> {
//     if(max < curr){
//         max = curr;
//     }
//     return max;
// }, 0)

// const outputMin = arr.reduce((min, curr)=> {
//     return min < curr ? min : curr
// }, 8)

// console.log(outputMin);

// const user = [
//     { firstName: "akshay", lastName: "saini", age: 26 },
//     { firstName: "donald", lastName: "trump", age: 75 },
//     { firstName: "elon", lastName: "musk", age: 50 },
//     { firstName: "deepika", lastName: "padukone", age: 26 },
// ]

// const output = user.reduce((acc, curr)=>{
//     if(curr.age <= 30 ){
//         acc.push(curr.firstName + " "+ curr.lastName)
//     }
//     return acc;
// }, [])

// const output = user.reduce((acc, curr) => {
//     if (acc[curr.age]) {
//         acc[curr.age] = ++acc[curr.age];
//     } else {
//         acc[curr.age] = 1;
//     }
//     return acc;
// }, {})

// console.log('output', output)


// const largest =  arr.reduce((acc, curr) =>curr < acc ? curr : acc)

// console.log('largest', largest)

// const secondLargest = arr.reduce((max, current) => {
//     if (current > max.max) {
//       return { max: current, secondMax: max.max };
//     } else if (current > max.secondMax && current !== max.max) {
//       return { max: max.max, secondMax: current };
//     }
//     return max;
//   }, { max: -Infinity, secondMax: -Infinity });

//   console.log(secondLargest);

// const secondLargest = arr.reduce((acc, curr) => {
//     if (curr > acc.largest) {
//         return { largest: curr, secondLargest: acc.largest }
//     } else if (curr > acc.largest && curr !== acc.largest) {
//         return { largest: curr, secondLargest: acc.secondLargest }
//     }
//     return acc

// }, { largest: -Infinity, secondLargest: -Infinity })

// console.log(secondLargest)

//descending order
// console.log(arr.sort().reverse());

// const output = arr.reduce((acc, curr) => {
//     if (curr > acc.largest) { return { largest: curr, secondLargest: acc.largest } } else if (curr > acc.largest && curr !== acc.largest) {
//         return { largest: curr, secondLargest: acc.secondLargest }
//     }
//     return acc;
// }, { largest: -Infinity, secondLargest: -Infinity })

// console.log(output)

// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num <= 3) return true;
//     if (num % 2 === 0 || num % 3 === 0) return false;
//     for (let i = 5; i * i < num; i += 6) {
//         if (num % i === 0 && num % (i + 2) === 0) {
//             return false
//         }
//     }
//     return true
// }

// const primeNumbers = arr.filter(isPrime);

// console.log(primeNumbers);

// const arr = [2, 3, 23, 20, 10, 35];

// const output = arr.filter((x)=> x % 2 ? x : "")

// console.log(output)

// function factorialRecursive(n) {
//     if (n === 0 || n === 1) {
//         return 1
//     } else {
//         return n * factorialRecursive(n - 1);
//     }
// }

// console.log(factorialRecursive(3))


const arr = [2, , 23, 20, 10, 35];

const output = arr.reduce((acc, curr) => {
    if (acc[curr]) {
        acc[curr] = ++acc[curr];
    } else {
        acc[curr] = 1;
    }
    return acc;
}, {})

console.log(output)
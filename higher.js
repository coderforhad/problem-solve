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

const user = [
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 30 },
]

// const output = user.reduce((acc, curr)=>{
//     if(curr.age <= 30 ){
//         acc.push(curr.firstName + " "+ curr.lastName)
//     }
//     return acc;
// }, [])

const output = user.filter(person => {
    if (person.age <= 30) {
        return person.firstName
    }
})

console.log('output', output)
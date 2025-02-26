// console.log('time will tell')

// console.log(400404000404004040)

// let v = null;
// console.log(`welcome ${v}`)
// console.log('v')
// console.log(v)
// v = 'debby';
// console.log(v)
// let colors= ["blue", "green", "red"]
// for(let i of colors){
//     console.log(i)
// }
// console.log(colors)
// let B= "boys"
// console.log(B)
// console.log(`${B} ARE WICKED`)
// let Items= ["rice", "beans", "water", 2000, 4000, 3000, true]
// console.log(Items[2])
// console.log(Items[3]+Items[5])


let bread = prompt('how many bread did you purchase')
let butter = prompt('how many butter did you purchase')
let fish = prompt('how many fish did you purchase')

let standardPriceBread = 1400
let standardPriceButter = 1700
let standardPriceFish = 1200

let cart = []

let priceFishbouught = standardPriceFish * fish;
let priceBreadbouught = standardPriceBread * bread;
let priceButterbouught = standardPriceButter * butter;

cart.push(priceFishbouught)
cart.push(priceBreadbouught)
cart.push(priceButterbouught)

let total = 0;
for (let item of cart){
   total = total + item
}

console.log(`the total amount you have spent is${total}`)


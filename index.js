import {coffeeStock as stock, isCoffeeMachineReady} from "./state.js";
// const {coffeeStock, isCoffeeMachineReady} = require('./state');

const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}
 
// displayStock(coffeeStock);
console.log(stock);
console.log(isCoffeeMachineReady);

// const {coffeeStock, isCoffeeMachineReady} = require('./state');

// const makeCoffee = (type, miligrams) => {
//     if (coffeeStock[type] >= miligrams) {
//         console.log("Kopi berhasil dibuat!");
//     } else {
//         console.log("Biji kopi habis!");
//     }
// }
 
// makeCoffee("robusta", 500);



// console.log("Menyalakan mesin kopi");
// console.log("Menggiling biji kopi");
// console.log("Memanaskan air");
// console.log("Mencampurkan air dan kopi");
// console.log("Menuangkan kopi ke dalam gelas");
// console.log("Menuangkan susu ke dalam gelas");
// console.log("Kopi Anda sudah siap!");

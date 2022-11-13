const orderCoffee = cb => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
        cb(coffee);
    }, 3000);
}
 
 
// orderCoffee(coffee => {
//     console.log(coffee);
// });

orderCoffee.then(coffee => {
    console.log(coffee);
});
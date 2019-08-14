let orderCount = 0;

const takeOrder = (topping1, topping2, topping3,topping4) => {
    console.log(`Pizza with ${topping1} and ${topping2} and ${topping3} and ${topping4}`);
    
    orderCount++;
}
takeOrder("pineapple","okra","pepper","ackee")
console.log("Jamaican flavour pizza!")
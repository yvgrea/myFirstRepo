1 example
let coffeeIsGrinding = false;

const pressGrindBeans =() =>{
    if (coffeeIsGrinding) { //is it true or false, time saver.
        console.log("Stopping the grind");
        coffeeIsGrinding = false;

    } else{
        console.log("Grinding is about to begin");
        coffeeIsGrinding = true;
    }
}

pressGrindBeans();
pressGrindBeans();
pressGrindBeans();
pressGrindBeans();// flip flop between true and false

// NB: semi-colon is optional throughou this programme


const drinkOrder = (type, size) => {
    console.log(`Ordering a ${type} and the size will be ${size}`)
}
drinkOrder("Tea","Grand");
drinkOrder("Fruit Juice","Regular");
drinkOrder("Coffee","mini");


const addUp = (num1, num2) =>{
    return num1 + num2;
}

addUp(7,3);//has not been displayed
console.log(addUp(2,5));

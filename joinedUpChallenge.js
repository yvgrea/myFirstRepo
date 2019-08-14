//ATM 
//check pin is correct
//tells you how much you have
//if you can take it out or not
//how much you have left
//ask if you want to donate
//tell you can only take about units divisivle by 20
//a message of wisdom - money is time time is money, use both wisely, one you can never get back

let accountValue = 100000
let moneyOut = 5000
let moneyLeft = accountValue - moneyOut
let wordsOfWisdom = ("\n\nMoney is time, time is money, use both wisely\nFor one you can never get back")

// let pin = 1234

// if (pin.length = 4);{
//     console.log("you have entered a pin of the right length, proceed")} 
// else if (pin.length != 4);
// {
//     console.log("your pin is not of the correct length, try again")
// }
if (moneyOut <= accountValue){
    console.log("You have £"+ accountValue +" in your account")
    console.log("You can take out this much money")
    console.log("You wish to take out £"+ moneyOut)
    console.log(`You have £ ${moneyLeft}`)

}else if (moneyLeft < 0){
    console.log("Your funds are not sufficient to complete this transaction")
}
console.log(wordsOfWisdom)
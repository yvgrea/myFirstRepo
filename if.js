practicing if statement
Yvonne Greaves 13 August 2019
let weather = "cloudy"// create variable

if (weather == "sunny"){
    console.log("wear a t-shirt and shorts")
} else if (weather == "rain"){
    console.log("book a tropic holiday")

} else{
    console.log("Might need to wear versatile clothing")// catch all
}
write a programme to state is a person can be served in pub or not when over 18
let age = 18
if (age <=17){
    console.log("Under aged: \nyou are too young to come in")
} else if (age >= 18){
    console.log("In age:\nYou are of age and can come in")

} else {
    console.log("Unknown: \ncheck your ID, you need to state you age before being let in")
}
console.log("Have a nice day") 

// Dodgy Stans nights club
// Female < 25 Get in for free
// Female > 35 Pay £250
// Male < 25, £10
// Male > 35, £150
// Any else £15

let gender = 'male'
let age = 26

if (gender == 'female' && age <25){
    console.log("you get in for free.. you're the type I want in my club")
}
else if (gender == 'female' && age > 35){
    console.log("We don't want you, so will charge £250, to warn you off")
}
else if (gender == 'male' && age < 25){
    console.log("We like you, so will charge a reasonable £10")
}
else if (gender == 'male' && age > 35){
    console.log("We don't want you, so will charge £150")
} else{
    console.log("please state your age so we know how much to charge, \nif you are outside these ranges given, we will charge a moderate £25")}

let day = "Monday"
if (day == "Saturday" || day == "Sunday") {
    console.log("It the weekend!");

} else{
    console.log ("It's a weekday")
}
if (true || false){
    console
}
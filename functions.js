//Practice Functions
//YG Greatness
// 13 August 2019

//Function - Dry principle ** Dont Repeat Yourself
//pieces of reusable code that can be called at different times
//methods and functions are interchangeable

//1 Function - This function will reverse a string

const reverseString =(s)=> {
    return s.split("").reverse().join("")
}//use camel case - "" splitting my nothing
//    console.log("Unreachable code")
   
//Return: the last thing, gives the result, bake cake gives the cake in return
//functions are like little helpers, that do something in a process and return that to you

// console.log("Hello World")
// console.log(reverseString("Hello World"))

//2 Function - Add three numbers

const addThreeNumbers = (num1,num2,num3) =>{
    console.log("I am adding your three numbers")
    return num1 + num2 + num3
}// functions alway you to break problems down into smaller parts

function hello2 (){
    console.log("Hello")
}

const displayName = (name) =>{
    console.log(`${name}`)
}

//console.log(addThreeNumbers(10,20,30))
//console.log("Hello World")
//console.log(reverseString("Hello people"))



const hello =() =>{
   console.log("Hello people")
}

//hello()
// =>{ means to assign a value to the variable}

const displayGreeting = (name) =>{
    console.log("Greetings to.."+name)
    console.log("I am an " +`${name}`+ " sent from heaven")
}
hello()
displayGreeting("Angel") 





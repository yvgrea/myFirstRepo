//1 password length check

let password = "password123"

if (password.length >= 8){
    console.log("password length acceptable")
} else
console.log("password too short")

//2 Check if division by 3 or 5

let num = 7
if (num % 3 == 0 || num % 5 == 0 ){
    console.log("this number is divible by 3 or 5")
} else {
console.log("This number is not divible by 3 or 5")
}
//3 The Bizz Buzz Challenge
let numfb = 15
if (numfb % 3 == 0 && numfb % 5 == 0){
    console.log("Fizz:Buzz\nThis number is divible by 3 and 5")
}
else if (numfb % 3==0){
    console.log("Just Fizz\nThis number is divisible by 3")
}
else if (numfb % 5==0){
    console.log("Buzz:\nThis number is divisible by 5")
}
else{
    console.log("Otherwise:\nLog number to the console")
}
//4 check if pallindrome
//to fix and finish
//let s3 = s2.join("")
//console.log(s3)

let reverse = "Hello Word".split("").reverse().join("")
console.log(reverse)

let word = "noon".split("")
let rev =word.reverse()
if (rev == word){
    console.log("palindrome")

}else{
    console.log("not palindrome")
}
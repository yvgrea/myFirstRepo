let birthDate = new Date(1966,10,28)
let today = Date.now()
let birthday = new Date(2019,10,28)


let newDiff = birthday.getTime() - today
let newDayDiff = newDiff / (1000 * 60 * 60 * 24)
let newDayDiff2 = Math.floor(newDayDiff)
console.log(`It is ${newDayDiff} till your birthday :)`)

console.log(birthDate.getTime())
console.log(today)
let diff = today - birthDate.getTime()
console.log(newDayDiff2)

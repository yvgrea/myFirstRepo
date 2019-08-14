let birthDate = new Date(1983,10,28)
let today = Date.now()

console.log(birthDate.getTime())
console.log(today)
let diff = today - birthDate.getTime()
console.log(diff)
let dayDiff = diff / (1000 * 60 * 60 * 24)
console.log(dayDiff)

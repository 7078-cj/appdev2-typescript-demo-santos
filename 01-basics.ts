// console.log("Hello World!")

let userName: string = "Ceejay";
let userAge = 20;
// let userAge: number
// ...

// userAge = "31" nag e error to kasi dapat number ang laman ng variable hindi string
userAge = 31

console.log(`Username - ${userName}`)
console.log(`Age - ${userAge}`)

function add(a: number, b = 5) {
    return a + b
}

add(10)
// add('10') mag e error to dahil numer ang expected data type sa parameter ng function
add(10, 6)
// add(10, '6') mag e error parin to dahil sa pag declare ng parameter is number kaya automatic na data type ng parmeter b ay number

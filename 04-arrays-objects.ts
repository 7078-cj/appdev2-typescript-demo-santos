let hobbies = ["Eating", "Watching", "Chess", "Sleeping"]

// hobbies.push(10) dahil puro string ang sa array natin at hindi dineclare na pwede na may number data type hindi tatangapin ung number 10

let userList: (string | number)[];
// let userList: Array<string | number>;

userList = ["Ceejay", "Ceejay7078", 123456]

// console.log(userList)

let user: {
    name: string;
    age: number;
    hobbies: Array<string>,
    role: {
        description: string,
        id: number
    }
} = {
    name: "Ceejay",
    age: 20,
    hobbies: ["Eating", "Watching", "Chess", "Sleeping"],
    role: {
        description: 'admin',
        id: 1
    }
}

// Must not null or undefined
let val: {} = "Ceejay Santos"

// let test: {} = null //Type 'null' is not assignable to type '{}'.ts(2322)

// Flexible Object - Record Type
let data: Record<string, number | string>

data = {
    1: 1,
    name: 'Ceejay'
    // isPartTimeInstructor: true mag e error to dahil wala naman sa assigned na data types yung boolean
}
// Optional Values in parameter
function generateError(msg?: string) {
    throw new Error(msg)
}

generateError("An error occured"); // Automatic Semicolon Insertion pitfall - add ; to explicitly tell that this is a function
generateError(); // optional dahil sa msg?  


(() => {
    // Optional Values in object properties
    type User = {
        name: string;
        age: number;
        role?: 'admin' | 'guess' // ito ay optional
    }

    let user: User = {
        name: 'Ceejay',
        age: 20,
        role: 'admin'
    }

    let user2: User = {
        name: 'Santos',
        age: 20,
    }

    user.name
    user.age
    user.role
    
    user2.name
    user2.age
    user2.role // either 'admin' | 'guess' or undefined
})

// Nullish Coalescing `??` operator 
let input = ''
const didProvideInput = input ?? false;

console.log(input ?? false)

// try it on browser console log to see results
// update it `??` to `||`
// `||` check for falsy not false - falsy = null, undefined, 0, empty string, etc
// ?? check only if null or undefined

// Use || when you want to fall back on any falsy value.
// Use ?? when you only want to fall back on null or undefined.
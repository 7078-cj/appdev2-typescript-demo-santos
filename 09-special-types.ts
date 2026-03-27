// Special Type - null
let a: null;

a = null
// a = "Hi" nag eerror dahil ang expected type ay null

let b: null | string

b = null
b = "Hi"
// b = 10 wala sa options ng data types ang number

// Special Type - undefined
let c: undefined;

c = undefined
// c = null ang null is intentional na wala ang undefined is hindi pa na a assigned ang value
// c = "Hi"
c = undefined;
c

let d: undefined | string

d = undefined
d = "Hi"
// d = null
// d = 10

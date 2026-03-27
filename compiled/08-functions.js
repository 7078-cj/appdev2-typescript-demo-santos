"use strict";
(() => {
    // Function Return Value Types
    function add(a, b) {
        return a + b;
    }
    add(5, 10);
    // add("5", 10) // mag e error to dahil number ang expected sa first parameter
    // Special Type `void` - return nothing
    // Function doesn't return a meaningful value, but it does finish
    function log(message) {
        console.log(message);
    }
    log("Hello, World!");
    // log(10)
    // Another Special Type `never`
    // Function never finishes normally (throws error, infinite loop)
    function logAndThrow(errorMessage) {
        console.log(errorMessage);
        throw new Error(errorMessage);
    }
    logAndThrow("ERRORRRRR");
    //logAndThrow(20) // Argument of type 'number' is not assignable to parameter of type 'string'
    // Function as Types
    // Useful for callback functions
    // () => {} is not same as () => void
    // () => {} - arrow function
    // () => void - function type
    function performJob(cb) {
        // ...
        cb('Job Done!');
    }
    let logMsg = (msg) => {
        console.log(msg);
    };
    performJob(logMsg);
    let user = {
        name: "Ceejay",
        age: 20,
        greet: function () {
            return this.name;
        },
        // greet() {
        //     console.log(`Hello, ${this.name}`)
        //     return this.name
        // }
    };
    user.greet();
});

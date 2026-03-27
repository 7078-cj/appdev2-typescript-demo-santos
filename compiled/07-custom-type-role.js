"use strict";
(() => {
    let userRole = 'admin';
    let user = {
        name: 'Ceejay',
        age: 20,
        role: 'student',
        permission: ['study', 'CRUD']
    };
    // let user2: User = {
    //     name: 'Santos',
    //     age: 20,
    //     role: 'superstudent', // Type '"superstudent"' is not assignable to type 'Role'.
    //     permission:['study', 'CRUD']
    // }
    // ...
    function access(role) {
        // ...
    }
    access('student');
});

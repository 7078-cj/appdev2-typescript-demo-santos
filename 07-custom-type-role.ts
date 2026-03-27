(() => {
    // Type Aliases or Custom Types
    // use `type` keyword to create custom type
    type Role = 'admin' | 'guess' | 'teacher' | 'student'

    // Complex Object Type Definition
    type User = {
        name: string;
        age: number;
        role: Role; // you can use as well the Role type in Object type
        permission: string[];
    }


    let userRole: Role = 'admin'

    let user: User = {
        name: 'Ceejay',
        age: 20,
        role: 'student',
        permission:['study', 'CRUD']
    }

    // let user2: User = {
    //     name: 'Santos',
    //     age: 20,
    //     role: 'superstudent', // Type '"superstudent"' is not assignable to type 'Role'.
    //     permission:['study', 'CRUD']
    // }

    // ...

    function access(role: Role) {
        // ...
    }

    access('student')
})
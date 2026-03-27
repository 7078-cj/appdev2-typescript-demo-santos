(() => {
    // Literal Types (Alternative to Enum)
    let userRole: 'admin' | 'guess' | 'teacher' | 'student' = 'admin'

    // userRole = 'superadmin'
    // Type '"superadmin"' is not assignable to type '"admin" | "guess" | "teacher" | "student"'.ts(2322)
    // let userRole: "admin" | "guess" | "teacher" | "student"
    // nag error to dahil hindi assigned ang superadmin sa options ng types

    userRole = 'student'

    // anotherUserRole = 'superadmin'

    function access(role: 'admin' | 'guess' | 'teacher' | 'student') {
        // ...
    }

    // access('superadmin')
    // Argument of type '"superadmin"' is not assignable to parameter of type '"admin" | "guess" | "teacher" | "student"'.ts(2345)
    access('student')

})

(() => {
    enum Role {
        // SuperAdmin,
        SuperAdmin = 1,
        // SuperAdmin = 'SuperAdmin',
        // Teacher,
        Teacher = 'Teacher',
        // Student,
        Student = 'Student',
    }

     //let userRole: Role = 0; //mag e error to dahil wala sa object ang 0 and hindi callable ang 0 sa Role object
     let userRole: Role = 1; //gagana to dahil declared na if 1 ang value yun ay SuperAdmin
    //let userRole: Role = Role.Student; 
    // (enum member) Role.Student = "Student"
})


"use strict";
(() => {
    let Role;
    (function (Role) {
        // SuperAdmin,
        Role[Role["SuperAdmin"] = 1] = "SuperAdmin";
        // SuperAdmin = 'SuperAdmin',
        // Teacher,
        Role["Teacher"] = "Teacher";
        // Student,
        Role["Student"] = "Student";
    })(Role || (Role = {}));
    //let userRole: Role = 0; //mag e error to dahil wala sa object ang 0 and hindi callable ang 0 sa Role object
    let userRole = 1; //gagana to dahil declared na if 1 ang value yun ay SuperAdmin
    //let userRole: Role = Role.Student; 
    // (enum member) Role.Student = "Student"
});

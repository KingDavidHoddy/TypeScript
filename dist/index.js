"use strict";
// create classes
// class User {
//     public email: string
//     private name:string
//    readonly  city: string = "Lagos"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//         this.city = ''
//     }
// }
//professional
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Lagos";
        this.email = email;
        this.name = name;
        this.city = '';
    }
    deleteToken() {
        console.log("token deleted");
    }
    // use to get properties
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // you cannnot specify the return type of a setter in typescript
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count  should not be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const david = new User("d@d.com", "David");

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
 
    protected _courseCount = 1


   readonly  city: string = "Lagos"
    constructor(
        public email: string, 
        public name: string,
       // private userId: string
        ){
        this.email = email;
        this.name = name;
        this.city = ''
    }

    private deleteToken(){
        console.log("token deleted")
    }
    // use to get properties
    get getAppleEmail (): string{
        return `apple ${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    // you cannnot specify the return type of a setter in typescript
    set courseCount(courseNum){
        if(courseNum <= 1){
            throw new Error("course count  should not be more than 1")
        }

        this._courseCount = courseNum
    }
}


class SubUser extends User {
    isFamily: boolean = true

    changeCourseCount(){
        this._courseCount = 4
    }
}



const david = new User("d@d.com", "David")


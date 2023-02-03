// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }



// function createUser (user: User):User{
//     return user
// }


//  createUser({name:"Ezeh", email:"eze@gmail.com", isActive:true})


//  export {}



type User = {
    readonly _id: string
    name: string
    email:string
    isActive: boolean
}


let myUser: User = {
    _id:"!4567",
    name: "d",
    email:"d@d.com",
    isActive: false,
}


// mix and match of types

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}


let card: cardDetails = {
    cardnumber: "1234567890",
    cardDate: "02/25",
    cvv: 456
}


console.log(card)















myUser.email = 'd@gmail.com'


// myUser._id = "7890" // error: readonly








export {}
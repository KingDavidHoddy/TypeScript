// allows you to be in a situation when you are not sure of the types without having any. You use the '|'

let score: number | string  = 33

score = 44

score = '55'


type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}


let david : User | Admin = {name:"David", id: 4567}

david = {username: "hr", id:56}



getDbId(3)
getDbId("3")


function getDbId(id:number | string){
    if (typeof id == "string"){
        id.toLowerCase()
    }

}


//array
const data: number[] = [1,2,3,4]
const data2: string[] = ['1','2','3']
const data3: (string | number) [] = ['1','2', 3]

let seatAllotment : "aisle" | "middle" | "window"

seatAllotment = 'aisle'
seatAllotment = 'middle'



export {}


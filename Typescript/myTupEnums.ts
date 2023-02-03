// const user: string[] = ['hc']
// tuples is about having order to your array specifying which data type would be at specific positions
let tuser: [string, number, boolean] 
// tuser = [13,true,'hc'] - this would bring an error

tuser = ["hc", 13, true]

let rgb: [number, number, number] = [255,123,321]


type User = [number, string]

const newUser : User = [122, "ev@gmail.com"]


newUser[1] = "hc.com"


export  {}
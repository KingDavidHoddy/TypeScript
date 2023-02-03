interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    //startTrail:() => string
    startTrail(): string,
    getCoupon(couponname: string, value: number): number
}

interface User {
    githubToken: string
}


interface Admin extends User {
    role: "admin" | 'ta' | "learner"
}
const hitesh: Admin = {  dbId: 876, email:"d@d.com",userId: 123, role: "admin", githubToken: "",startTrail: ()=>{
    return "trail started"
}, getCoupon:(name: "David", percent : 10)=>{
    return 10
}}
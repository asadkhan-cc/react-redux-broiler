import { BUY_PEN , RETURN_PEN } from "./penType";

export const buyPEN = (number=1) => { 
//   console.log("buyPEN")
    return{
        type:BUY_PEN,
        payload:number
    }
 } 
 export const returnPEN = (number=1) => { 
//   console.log("returnPEN")
    
    return{
        type:RETURN_PEN,
        payload:number
    }
 } 
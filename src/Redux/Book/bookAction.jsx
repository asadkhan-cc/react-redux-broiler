import { BUY_BOOK , RETURN_BOOK } from "./bookType";

export const buyBook = (number=1) => { 
//   console.log("buyBook")
    return{
        type:BUY_BOOK,
        payload:number
    }
 } 
 export const returnBook = (number=1) => { 
//   console.log("returnBook")
    
    return{
        type:RETURN_BOOK,
        payload:number
    }
 } 
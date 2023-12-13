// primitive 


//  7 types : string, numbe, Boolean, undefined, Symbol, BigInt,
  
/* javascript is Dynamically type */


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp =null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);

const bigNumber = 145555n

// Reference (Non primitive)

// Array, Object, Functions 


const heros = ["ironman", "hulk", "thor"];
 let myObj = {
    name: "bala",
    age: 18,
}


// *******************************************

// stack (Primitive), Heap (Non-Primitive )


let myName = "balaji"


let anotherName = myName
anotherName ="bala"

console.log(myName);
console.log(anotherName);


let userOne = {
    email: "userAgoogle",
    upi: "user"

}

let userTwo = userOne

userTwo.email = "bal.com"
 console.log(userOne.email);
 console.log(userTwo.email);

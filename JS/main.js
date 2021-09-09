//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
console.log(`for the win, ${person3.pizza[0]}`)
console.log(person3.pizza[1])
console.log(person3.tacos)
console.log(person3.burgers)
console.log(person3.ice_cream[0])
console.log(person3.ice_cream[1])
console.log(person3.ice_cream[2])
console.log(person3.shakes[0].oberwise)
console.log(person3.shakes[0].dunkin)
console.log(person3.shakes[0].culvers)
console.log(person3.shakes[0].mcDonalds)
console.log(person3.shakes[0].cupids_candies)


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


class human{
    constructor( name, age){
        this.name = name,
        this.age = age
    }
    printInfo=()=> {
        return `name: ${this.name} age: ${this.age}`
    }
    count_it = (function(){
        return function() { return this.age ++}
}) ()
}

let Les = new human('Leslie Adams', 29);
console.log(Les.printInfo())

let jill = new human('Jill Bean', 42);
console.log(jill.printInfo())
console.log(jill.count_it())
console.log(jill.count_it())
console.log(jill.count_it())


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const string_check = (string) => {
    return new Promise( (resolve,reject) => {
        if (string.length > 10){
            resolve(true)
        } else {
            reject(false)
        }
        
    })
}
string_check('hippocampus')
.then( (result) => {
    console.log(`big word: ${result}`)
})
.catch( (reject) => {
    console.log(`small number: ${reject}`)
})
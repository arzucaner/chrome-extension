function saveLead() {
    console.log("Button clicked!")
}

let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click",function() {
    console.log("Button clicked from addEventListener")
})

let box = document.getElementById("box")

box.addEventListener("click", function(){
    console.log("I want to open the box!")
})

let myLeads = []
const inputEl = document.getElementById("input-el")

const playerName ="Liz"
let credits= 45

credits = credits - 10
playerName = "something else"

//The costomer wants to order some stuff. Here are the details:

let basePrice = 520
let discount = 120
let shippingCost = 12
let shippingTime = "5-12 days"

// Whops! Turns out the shipping will be a bit more complex

shippingCost = 15
shippingTime = "7-14 days"

//Calculating the full price

let fullPrice = basePrice - discount + shippingCost

//Finally, notfying the customer

console.log("Total cost: " = fullPrice + ". It will arrive in " + shippingTime)
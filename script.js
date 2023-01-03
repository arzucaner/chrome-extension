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

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

//push the value "www.awesomelead.com" to myArray when the input button is clicked

inputBtn.addEventListener("click", fuction() {
    myLeads.push(inputEl.value)
    console.log(myLeads)

})

//Log out the items in the myLeads array using for a loop
for (let i = 0; i <myLeads.length; i++) {
    console.log(myLeads[i])
}

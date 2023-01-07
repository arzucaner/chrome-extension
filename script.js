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

let myLeads = ["www.awesomelead.com", "epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

//push the value "www.awesomelead.com" to myArray when the input button is clicked

inputBtn.addEventListener("click", fuction() {
    myLeads.push(inputEl.value)
    inputEl.value =""
    renderLeads()
})

//Log out the items in the myLeads array using for a loop
for (let i = 0; i <myLeads.length; i++) {
    console.log(myLeads[i])
}

//Render the leads in the unordered list using ulEl.textContent
for (let i = 0; i < myLeads.length; i++) {
    ulEl.textContent += myLeads[i] + " "
}

for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}

const container = document.getElementById("container")

container.innerHTML = "<button onclick='buy()'>Buy!</button>"

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"

function buy(){
    container.innerHTML += "<p>Thank you for buying!<p>"
}

// Replace.textContent with. innerHTML and use <li> tags
for (let i = 0; i <myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}

//Let's try a different method!
for (let i = 0; i <myLeads.length; i++) {
    //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    //create element
    //set text content
    //append to ul
    const li = document.createElement("li")
    li.textContent = myLeads[i]
    ulEl.append(li)
}

//1.Create a variable, listItems, to hold all the HTML for the list items
//Assign it to an empty string to begin with
for (let i = 0; i <myLeads.length; i++) {
    //2.Add the item to the listItems variable instead of the ulEl.innerHTML
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}

//3. Render the listItems inside the unordered list using ulEl.innerHTML
ulEl.innerHTML = listItems

//2.Add the item to the listItems variable instead of the ulEl.innerHTML 
renderLeads()

//1. Wrap the code below in a renderLeads() function
function renderLeads() {
    let listItems = ""
    for (let i = 0; i <myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + "</li>"
    }

    //Wrap the lead in a anchor tag (<a>) indise the <li>
    //Can you make the link open ina a new tab?
    listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
     
    ulEl.innerHTML = listItems
}

    // listItems += "<li><a target='_blank' href='" + myLeads[1] + "'>" + myLeads[i] + "</a></li>"
       listItems += ` 
       <li>
          <a target='_blank' href='${myLeads[i]}'>
             ${myLeads[i]}
          </a>
        </li>
      `
    
    ulEl.innerHTML = listItems

// teplate strings/literals
const recipient = "Liz"

//Refactor the email string to use template strings
const email = `Hey ${recipient}! How is it going? Cheers Arzu`

console.log(email)

const recipient = "Liz"

// Create a new variable, sender, and set its value to your name
const sender = "Arzu Caner"
// Use your sender variable instead of "Arzu"
const email = `Hey ${recipient}! How is it going? Cheers ${sender}`

console/log(email)

const recipient = "Liz"
const sender = "Arzu Caner"

// Break the email string into multiple lines
const email =
Hey ${recipient}!

How is it going?

Cheers ${sender}
`
console.log(email)
 
function renderLeads() {
    let listItems = ""
    for (let i = 0; i <myLeads.length; i++) {
    // Refactor the code below to use a template string
    listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]'>
                ${myLeads[i]}
            </a>
        </li>
      `
    }
    ulEl.innerHTML = listItems
}

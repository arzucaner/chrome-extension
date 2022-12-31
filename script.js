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
console.log("Jeg er i dropdown")

const fruits = []

fruits.push({"name": "æble", "Style":"fruit"})
fruits.push({"name" : "pære", "Style": "fruits"})
fruits.push({"name" : "peanut", "Style": "notfruits"})
fruits.push({"name" : "appelsin", "Style": "fruits"})

console.log(fruits)

const Pbfiledropdown = document.getElementById("Pbfiledropdown")
const ddFruits = document.getElementById("ddFruits")


function addfruitToDropdown(item){
    console.log(item)
    const el = document.createElement("option")
    el.textContent = item.name
    ddFruits.appendChild(el)
}

function filedropdown(){
    fruits.forEach(addfruitToDropdown)
}

Pbfiledropdown.addEventListener('click', filedropdown)
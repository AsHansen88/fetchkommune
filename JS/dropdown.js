console.log("Jeg er i dropdown")

const fruits = []

fruits.push({"id": 1, "name": "æble", "Style":"fruit"})
fruits.push({"id": 2, "name" : "pære", "Style": "fruits"})
fruits.push({"id": 3, "name" : "peanut", "Style": "notfruits"})
fruits.push({"id": 4, "name" : "appelsin", "Style": "fruits"})

console.log(fruits)

const Pbfiledropdown = document.getElementById("Pbfiledropdown")
const ddFruits = document.getElementById("ddFruits")


function addfruitToDropdown(item){
    console.log(item)
    const el = document.createElement("option")
    el.textContent = item.name
    ddFruits.appendChild(el)
    //el.value = item.id , put primarykey i value
    el.item = item // why not put object in value
    el.className = item.style

}

function filedropdown(){
    fruits.forEach(addfruitToDropdown)
}

function selectfruit(){
    const selindex = ddFruits.selectedIndex
    const selectedfruit = ddFruits.options[selindex]
    console.log(selindex)
    console.log(selectedfruit)
    console.log(selectedfruit.value)

}

Pbfiledropdown.addEventListener('click', filedropdown)
ddFruits.addEventListener('change', selectfruit)
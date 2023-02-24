
console.log("Vi er i kommuner")

const urlKommuner = "https://api.dataforsyningen.dk/kommuner"

function fetchkommune() {
    return fetch(urlKommuner).then(response => response.json())

}

function actionFetch(){
    const kommuner = fetchkommune()
    console.log(kommuner)


}

const pbFetchKommuner = document.getElementById("pbFetchKommuner")
pbFetchKommuner.addEventListener('Click', actionFetch)
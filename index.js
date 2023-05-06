const colorSchemeArray = ["Monochrome", "Monochrome-light", "Monochrome-dark", "Analogic", "Complement", "Analogic-complement", "Triad"]

const colorSchmemeInput = document.getElementById("color-scheme")
const getColor = document.getElementById("color-picker")
const getColorBtn = document.getElementById("get-color-btn")
const hexNameHtml = document.getElementById("hex-name-container")  

let colorArray = []

getColorBtn.addEventListener("click", fetchColor)

function fetchColor(){
    let colorValue = getColor.value.slice(1)
    let scheme = colorSchmemeInput.value.toLowerCase()
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${scheme}`)
        .then(res => res.json())
        .then(data => {
            colorArray = data.colors
            renderColorHtml()
        }) 
}

function renderColorHtml(){
    const colorBar = document.getElementById("color-bar-container")
    colorBar.innerHTML = ``
    hexNameHtml.innerHTML = ``
    for(let i = 0; i < colorArray.length; i++){
        colorBar.innerHTML += `<div class="color-bar" style="background-color:${colorArray[i].hex.value}"></div>`
        hexNameHtml.innerHTML += `<p class="hex-name">${colorArray[i].hex.value}</p>`
    }
}

fetchColor()

colorSchemeArray.forEach(function(scheme){
    colorSchmemeInput.innerHTML += `
    <option value="${scheme}">${scheme}</option>
    `
})




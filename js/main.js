const mass = document.querySelector('#mass')
const planet = document.querySelector('#planet')
const button = document.querySelector('.btn')
const planetImage = document.querySelector('.planet-image')
const planetWeight = document.querySelector('.planet-weight')
const displayGrid = document.querySelector('.display-grid')
const errorMsg = document.querySelector('.error-message')
displayGrid.style.display = 'none'

button.addEventListener('click', e => {
  e.preventDefault()
  let regex = /^\d+$/
  planetImage.innerHTML = ''
  planetWeight.innerHTML = ''
  if (mass.value.trim().length == 0) {
    createErrorDiv(displayGrid, errorMsg, 'Mass is required')
  } else if (planet.value.length == 0) {
    createErrorDiv(displayGrid, errorMsg, 'Planet is required')
  } else if (!mass.value.match(regex)) {
    createErrorDiv(displayGrid, errorMsg, 'Mass should only be a number')
  } else {
    errorMsg.style.display = 'none'
    displayGrid.style.display = 'grid'
    let gravity = getGravity(planet.value)
    let weight = Number(gravity) * Number(mass.value);
    let image = document.createElement('img')
    image.src = `./images/${planet.value}.png`
    planetImage.appendChild(image)
    let para = document.createElement('h3')
    para.textContent = `The weight on the planet ${planet.value} `
    let text = document.createElement('h3')
    text.textContent = `${weight.toFixed(2)}N`
    planetWeight.appendChild(para)
    planetWeight.appendChild(text)
  }

})
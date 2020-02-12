const massInput = document.querySelector('#mass')
const planetInput = document.querySelector('.planets')
const planetValue = planetInput.value
const calculate = document.querySelector('.calculate')
const planetContainer = document.querySelector('.flex-item-image')
const divError = document.querySelector('.error')
const planetImage = document.querySelector('.planet-image')
const weightDisplay = document.querySelector('.flex-item-description')
const planetName = document.querySelector('.planet-weight')
calculate.addEventListener('click',event => {
    console.log(massInput.value)
    validatePlanet()
})

const errorMessage1 = () => {
    planetImage.style.visibility = 'hidden'
    divError.textContent = ''
    let errorMessage = '*Mass is required'
    divError.textContent = errorMessage
    divError.style.color = 'white'
    
    
}

const errorMessage2 = () => {
    //planetContainer.textContent = ''
    divError.textContent = ''
    let errorMessage = '*Please enter only numbers'
    divError.textContent = errorMessage
    divError.style.color = 'white'
    divError.style.marginRight ='35rem'
    
        
    
}

const errorMessage3 = () => {
    //planetContainer.textContent = ''
    divError.textContent = ''
    let errorMessage = '*You have not selected the planet'
    divError.textContent = errorMessage
    divError.style.color = 'white'
    divError.style.marginRight ='35rem'
    
        
}
const displayWeight = () => {
    let gravity = 0
    let weight = 0
    //weightDisplay.textContent = ''
    divError.textContent = ''
    switch (planetInput.value) {
        case 'Earth':
        gravity = 9.807
        weight = (massInput.value * gravity).toFixed(2) + 'N'    
        planetImage.src = './images/earth.png'
        break;

        case 'Jupiter':
        console.log('I am here')    
        gravity = 24.79
        weight = (massInput.value * gravity).toFixed(2) + 'N'    
        planetImage.src = './images/jupiter.png'
        break;

        case 'Mars':
        gravity = 3.711
        weight = (massInput.value * gravity).toFixed(2) + 'N'    
        planetImage.src = './images/mars.png'
        break;

        case 'Mercury':
        gravity = 3.7
        weight = (massInput.value * gravity).toFixed(2) + 'N'    
        planetImage.src = './images/mercury.png'
        break;

        case 'Moon':
        gravity = 1.62    
        weight = (massInput.value * gravity).toFixed(2) + 'N'    
        planetImage.src = './images/moon.png'
        break;

        case 'Neptune':
        gravity = 11.15
        weight = (massInput.value * gravity).toFixed(2) + 'N'    
        planetImage.src = './images/neptune.png'
        break;

        case 'Pluto':
        gravity = 0.62
        weight = (massInput.value * gravity).toFixed(2) + 'N'    
        planetImage.src = './images/pluto.png'
        break;

        case 'Saturn':
        gravity = 10.44
        weight = (massInput.value * gravity).toFixed(2) + 'N'    
        planetImage.src = './images/saturn.png'
        break;

        case 'Uranus':
        gravity = 8.87
        weight = (massInput.value * gravity).toFixed(2) + 'N'    
        planetImage.src = './images/uranus.png'
        break;

        case 'Venus':
        gravity = 8.87
        weight = (massInput.value * gravity).toFixed(2) + 'N'    
        planetImage.src = './images/venus.png'
        break;
        
        default:
        console.log('Not right')    
        break;
    }
    return weight
}
const validatePlanet = () => {
    console.log(planetInput.value)
    if(massInput.value.length == 0) {
        errorMessage1()
    }
    else if (!massInput.value.match(/^[0-9]*$/)) {
        errorMessage2()
    }

    else if(planetInput.value == 'none') {
        errorMessage3()
    }
    else {
        weightDisplay.style.display = 'block'
        const weight = displayWeight()
        planetName.textContent = planetInput.value + ' is ' + weight
    }

}

weightDisplay.style.display = 'none'
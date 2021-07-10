const getGravity = (planet) => {
  let gravity = 0
  switch (planet) {
    case 'earth':
      gravity = 9.81
      return gravity

    case 'moon':
      gravity = 1.62
      return gravity

    case 'mercury':
      gravity = 3.7
      return gravity

    case 'mars':
      gravity = 3.72
      return gravity

    case 'saturn':
      gravity = 10.44
      return gravity

    case 'jupiter':
      gravity = 24.79
      return gravity

    case 'pluto':
      gravity = 0.62
      return gravity

    case 'venus':
      gravity = 8.87
      return gravity

    case 'uranus':
      gravity = 8.87
      return gravity

    default:
      return 5;
  }
}
const createErrorDiv = (displayGrid, errorMsg, msg) => {
  errorMsg.innerHTML = ''
  displayGrid.style.display = 'block'
  errorMsg.style.display = 'block'
  errorMsg.textContent = msg
}
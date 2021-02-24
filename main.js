

const balloon = document.querySelector('#balloon')
const mac = document.querySelector('#mac')

function moveBalloon () {
  balloon.style.top = Math.random() * innerHeight + 'px'
  balloon.style.left = Math.random() * innerWidth + 'px'
}

function waitAsec() {
  setTimeout(moveBalloon, 2000)
}

function changeBalloon () {
  mac.play()
  balloon.setAttribute('src','images/money.png')
}


balloon.addEventListener('mouseover', moveBalloon)
balloon.addEventListener('click', changeBalloon)

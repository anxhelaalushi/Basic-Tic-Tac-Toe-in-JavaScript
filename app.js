document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const playerDisplay = document.querySelector('#player')

let currentPlayer = 'PlayerX'
  squares.forEach(square => {
    square.addEventListener('click', clickOutcome)
  })

  function clickOutcome (e) {
    const squareArray = Array.from(squares)
    const index = squareArray.indexOf(e.target)
    playerDisplay.innerHTML = currentPlayer

    if (currentPlayer === 'PlayerX') {
      squares[index].classList.add('PlayerX')
      currentPlayer = 'Player0'
    } else {
      squares[index].classList.add('Player0')
      currentPlayer = 'PlayerX'
    }
  }
})

document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'cake',
        img: 'images/cake1.jpg'
      },
      {
        name: 'cheese',
        img: 'images/cheese1.jpg'
      },
      {
        name: 'ice-cream',
        img: 'images/icecream1.jpg'
      },
      {
        name: 'pizza',
        img: 'images/pizza1.jpg'
      },
      {
        name: 'lollipop',
        img: 'images/lollipop1.jpg'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog1.jpg'
      },
      {
        name: 'cake',
        img: 'images/cake1.jpg'
      },
      {
        name: 'cheese',
        img: 'images/cheese1.jpg'
      },
      {
        name: 'ice-cream',
        img: 'images/icecream1.jpg'
      },
      {
        name: 'pizza',
        img: 'images/pizza1.jpg'
      },
      {
        name: 'lollipop',
        img: 'images/lollipop1.jpg'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog1.jpg'
      }
      
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    const cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/back1.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      var cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/blank1.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank1.jpg')
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/back1.jpg')
        cards[optionTwoId].setAttribute('src', 'images/back1.jpg')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      var cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })

// Event Delegation

// It allows users to append a SINGLE event listener to a parent element that adds it to all of its present AND future descendants that match a selector.

/* document.querySelector('#sport1').addEventListener('click', (event) => {
    console.log('sport1 is clicked')

    const target = event.target

    if (target.matches('li')) {
        target.style.backgroundColor = 'lightgrey'
    }
}) */

// Ultimately, you can treat the rest of the li elements like this to change their background color to lightgrey when clicked, but there are other ways to do it.

document.querySelector('#sports').addEventListener('click', (event) => {
    console.log(event.target.getAttribute('id') + ' is clicked')
    
    const target = event.target

    if (target.matches('li')) {
        target.style.backgroundColor = 'lightgrey'
    }
})

const sports = document.querySelector('#sports')

const newSport = document.createElement('li')

newSport.innerText = 'sport6'

newSport.setAttribute('id', 'sport6')

sports.appendChild(newSport)
// Example of On Event
/* onclick="alert()" */

// Example of Click Event
const buttonFour = document.querySelector('.btn-4')

buttonFour.addEventListener('click', () => {
    alert('I Love Clone 4')
})

// Example of Mouseover Event
const exampleFive = document.querySelector('.heading-5')
const buttonFive = document.querySelector('.btn-5')
exampleFive.addEventListener('mouseover', () => {
    exampleFive.style.backgroundColor = 'blue'
})

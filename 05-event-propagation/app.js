// Event Propagation

window.addEventListener('click', () => {
    console.log('Window')
}, false)

document.addEventListener('click', () => {
    console.log('Document')
}, false)

document.querySelector('.div2').addEventListener('click', (event) => {
    // event.stopPropagation()
    // event object's stopPropagtion method stops the flow
    console.log('DIV 2')
}, false)

document.querySelector('.div1').addEventListener('click', () => {
    console.log('DIV 1')
}, {once: true})    // Have this event fire off only once

document.querySelector('.button').addEventListener('click', (event) => {
    event.preventDefault()  // Prevents default behavior of anchor tag and stops it from redirecting our page
    console.log(event.target.innerText = "clicked!")
}, false)

// The 3rd parameter controls which phase the event listeners are in, with true standing for event capturing and false event bubbling.

// Because we added events to every element down to our button, we can visibly see how the three phases of event propagation play out. This allows us to better understand how events are handled and how to use them effectively in our code.

// Also, note that the 3rd parameter is optional and is set to false by default
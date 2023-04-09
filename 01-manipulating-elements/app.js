// Selecting Elements

// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.querySelector()
// document.querySelectorAll()


const ul = document.querySelector('#ul')
const li = document.createElement('li')

// Adding Elements

ul.append(li)

// Modifying the text

li.innerText = 'new list item'

const firstListItem = document.querySelector('.list-item')

console.log(firstListItem.innerHTML)
console.log(firstListItem.innerText)
console.log(firstListItem.textContent)

// Modifying Attributes & Classes

li.setAttribute('id', 'main-heading')
li.removeAttribute('id')

const title = document.querySelector('#main-heading')

console.log(title.getAttribute('id'))
console.log(title.getAttribute('style'))

li.classList.add('list-item')
li.classList.remove('list-item')

console.log(li.classList.contains('list-item'))

// Remove Elements

li.remove()
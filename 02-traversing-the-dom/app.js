// Parent Node Traversal

const ul = document.querySelector('ul')

console.log(ul.parentNode)
console.log(ul.parentElement)
// You can chain .parentNode to checkout the grandparent node

const html = document.documentElement

console.log(html)
console.log(html.parentNode)
console.log(html.parentElement) // Would return null here 'cus the parent node of html is not an element

// Child Nodes Traversal

console.log(ul.childNodes)
// The DOM tree counts the indentations between element nodes as text nodes
console.log(ul.firstChild)
console.log(ul.lastChild)

// ul.firstChild.style.backgroundColor = 'blue'
// This would throw an error 'cus we're apply our styling to a text node instead of a element node

ul.childNodes[1].style.backgroundColor = 'blue'

console.log(ul.children)
console.log(ul.firstElementChild)
console.log(ul.lastElementChild)

// Sibling Nodes Traversal

const div = document.querySelector('div')
console.log(ul.previousSibling) // returns #text
console.log(ul.nextSibling) // returns #text
console.log(div.childNodes)

console.log(ul.previousElementSibling)
console.log(ul.nextElementSibling)
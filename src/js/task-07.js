
const textElement = document.getElementById('text')
console.log(textElement)

const inputElement = document.getElementById('font-size-control')

   
inputElement.addEventListener('input', (event) => {
    textElement.style.fontSize = event.currentTarget.value + 'px';})

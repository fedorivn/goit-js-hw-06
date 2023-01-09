const listEl = document.querySelectorAll('li.item');
console.log('Number of categories-->', listEl.length);


listEl.forEach((element)=> {
    console.log(`Category: ${element.firstElementChild.textContent}`)
    console.log (`Elements: ${element.lastElementChild.childElementCount}`)
})

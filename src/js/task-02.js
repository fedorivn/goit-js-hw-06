const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList= document.getElementById("ingredients");
for (let item of ingredients) {
const listElement = document.createElement('li')


listElement.classList.add('item');
listElement.textContent = item



const list= document.querySelector("ul")
list.append(listElement)
}
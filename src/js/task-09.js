function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const button = document.querySelector(".change-color");
const hexItem = document.querySelector(".color");
const color = document.body
const handleClick = () => {
  hexItem.textContent = getRandomHexColor()
  color.style.backgroundColor = getRandomHexColor()
};
button.addEventListener("click", handleClick)
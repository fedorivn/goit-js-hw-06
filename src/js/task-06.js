const textInput = document.querySelector("#validation-input")
const setFocus = document.querySelector("[data-length='6']")
textInput.onblur = function() {
  if (setFocus.dataset.length != this.value.length ) {
    this.classList.add("invalid");
  } else {
    this.classList.remove("invalid");
    this.classList.add("valid");
  }
};
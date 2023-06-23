const input = document.getElementById("validation-input");

input.addEventListener("blur", () => {
  const expectedLength = input.dataset.length;
  const actualLength = input.value.length;

  if (actualLength === Number(expectedLength)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});

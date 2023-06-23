const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const { email, password } = form.elements;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all fields");
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };

    console.log(formData);

    form.reset();
  }
});

//const categoriesList = document.querySelector("#categories");
//const categories = categoriesList.querySelectorAll(".item");

//console.log("Number of categories: " + categories.length);

//categories.forEach((category) => {
//const categoryName = category.querySelector("h2").textContent;
//const elements = category.querySelectorAll("li");

//console.log("Category: " + categoryName);
//console.log("Elements: " + elements.length);
//});

const categoriesList = document.getElementById("categories");
const categories = categoriesList.getElementsByClassName("item");

console.log("Number of categories:", categories.length);

Array.from(categories).forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElements = category.children[1].children.length;

  console.log("Category:", categoryName);
  console.log("Elements:", categoryElements);
});

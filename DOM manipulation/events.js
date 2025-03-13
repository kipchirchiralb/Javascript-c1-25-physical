window.addEventListener("scroll", () => {
  console.log("Page scrolling at " + window.scrollY + "px");
});

// open menu
const openMenuButton = document.querySelector("#open-menu");
openMenuButton.style.backgroundColor = "orange";

openMenuButton.addEventListener("click", () => {
  console.log("Opening Menu!!!!!!");
  //   document.querySelector("#mobile-menu").style.display = "flex"; // add a style attribute (inline css) to the selected element
  document.querySelector("#mobile-menu").classList.add("opened-nav");
});

// close menu
const closeMenuButton = document.querySelector("#close-menu");

closeMenuButton.addEventListener("click", () => {
  //   document.querySelector("#mobile-menu").style.display = "none";
  document.querySelector("#mobile-menu").classList.remove("opened-nav");
});

// add or remove classes (helps with animation)

// Implement mobile menu button in one of the html css projects

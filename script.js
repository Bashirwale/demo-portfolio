const newYear = document.querySelector(".year");
const currentYear = new Date().getFullYear();
newYear.textContent = currentYear;

const header = document.querySelector(".header-container");
const toggleBtn = document.querySelector(".small-menu");
toggleBtn.addEventListener("click", function () {
  header.classList.toggle("small-screen-header");
});

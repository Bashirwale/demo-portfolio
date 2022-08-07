//opening and closing of mobile by toggling
const newYear = document.querySelector(".year");
const currentYear = new Date().getFullYear();
newYear.textContent = currentYear;

const header = document.querySelector(".header-container");
const toggleBtn = document.querySelector(".small-menu");
toggleBtn.addEventListener("click", function () {
  header.classList.toggle("small-screen-header");
});

//SMOOTH SCROLLING
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    //closing mobile menu
    if (link.classList.contains("link"))
      header.classList.toggle("small-screen-header");
  });
});

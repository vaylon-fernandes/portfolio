const nav = document.getElementById("navWrapper");
const smallScreen = window.innerWidth < 575;
const screenMd = window.innerWidth < 992;

window.addEventListener("scroll", fixNav);

function fixNav() {
  const verticallyScrolled = window.scrollY > nav.offsetHeight + 75;

  if (verticallyScrolled && window.innerWidth > 575) {
    nav.classList.add("scrolled");
    nav.classList.add("navbar-dark");
    nav.classList.remove("navbar-light");
  } else {
    nav.classList.remove("scrolled");
    nav.classList.remove("navbar-dark");
    nav.classList.add("navbar-light");
  }
}

if (smallScreen) {
  window.removeEventListener("scroll", fixNav);
  nav.classList.remove("navbar-light");
  nav.classList.add("navbar-dark");
  nav.classList.add("dark-nav");
}
const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("mainNav");
const bsCollapse = new bootstrap.Collapse(menuToggle);

if (screenMd) {
  navLinks.forEach((l) => {
    l.addEventListener("click", () => {
      bsCollapse.toggle();
    });
  });
}

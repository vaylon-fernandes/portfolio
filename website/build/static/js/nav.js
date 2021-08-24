const nav = document.getElementById("navWrapper");

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

const screenMd = window.innerWidth < 992;
const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("mainNav");

if (screenMd) {
  window.removeEventListener("scroll", fixNav);
  nav.classList.remove("navbar-light");
  nav.classList.add("navbar-dark");
  nav.classList.add("dark-nav");
  navLinks.forEach((l) => {
    l.addEventListener("click", () => {
      const bsCollapse = new bootstrap.Collapse(menuToggle);
      bsCollapse.toggle();
    });
  });
}

const nav = document.getElementById("navWrapper");
const smallScreen = window.innerWidth < 575;

window.addEventListener("scroll", fixNav);

function fixNav() {
  console.log(window.scrollY);
  const verticallyScrolled = window.scrollY > nav.offsetHeight + 75;

  if (verticallyScrolled && window.innerWidth > 575) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
}

if (smallScreen) {
  nav.classList.add("dark-nav");
}

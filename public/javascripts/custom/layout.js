const navLinks = document.getElementsByClassName("nav-link");
for (const link of navLinks) {
  const currentLoc = window.location.pathname;
  if (link.getAttribute("href") === currentLoc) {
    link.children.item(0).classList.remove("visually-hidden");
    link.classList.add("active");
  } else {
    link.classList.add("text-bg-light");
  }
}

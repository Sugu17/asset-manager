const navLinks = document.getElementsByClassName("nav-link");
for (const link of navLinks) {
  const route = link.getAttribute("href");
  const isActive = window.location.pathname.slice(1).includes(route);
  if (isActive) {
    link.classList.add("active");
    link.children.item(0).classList.remove("visually-hidden");
  }
}

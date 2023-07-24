const navLinks = document.getElementsByClassName("nav-link");
for (const link of navLinks) {
  const currentLoc = window.location.pathname;
  const linkText = link.children.item(1);
  // linkText.style.letterSpacing = "1.1px";

  if (link.getAttribute("href") === currentLoc) {
    link.children.item(0).classList.remove("visually-hidden");
    link.classList.add("active");
    linkText.classList.replace("fs-5", "fs-4");
  } else {
    link.classList.add("text-bg-light", "fw-bold");
    linkText.style.color = "#262626";
  }
}

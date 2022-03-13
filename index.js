window.onload = () => {
  const nav = document.querySelector("nav");
  const burgerMenu = document.getElementById("burger-menu");
  const navLinks = document.querySelectorAll(".menu-container a");

  burgerMenu.addEventListener("click", () => {
    nav.classList.toggle("open");
    burgerMenu.classList.toggle("open");
  });

  navLinks.forEach((item) =>
    item.addEventListener("click", () => {
      nav.classList.toggle("open");
      burgerMenu.classList.toggle("open");
    })
  );
};

window.onload = () => {
  const nav = document.querySelector("nav");
  const burgerMenu = document.getElementById("burger-menu");
  const navLinks = document.querySelectorAll(".menu-container a");
  const cardList = Array.from(document.querySelectorAll(".service-card"));

  cardList.forEach((card) =>
    card.addEventListener("mouseover", () => {
      card.children[3].style =
        "background-color:var(--primary-blue);color:white;transition:all 0.6s ease-in-out";
      card.style =
        "box-shadow: 0px 10px 30px rgba(51, 51, 51, 0.1);cursor: pointer;transition:box-shadow 0.25s ease-in";
    })
  );

  cardList.forEach((card) =>
    card.addEventListener("mouseout", () => {
      card.children[3].style =
        "background-color:revert;color:revert;transition:all 0.6s ease-in-out";
      card.style =
        "box-shadow: none;cursor: auto;transition:box-shadow 0.25s ease-in";
    })
  );

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

// function onHover() {
//   const cardWrapper = Array.from(document.querySelectorAll(
//     ".service-card-wrapper article"
//   ))
//   cardWrapper.forEach(
//     (item) =>
//       (item.style =
//         "box-shadow: 0px 10px 30px rgba(51, 51, 51, 0.1);cursor: pointer;")
//   );
// }

// function offHover() {
//   const cardWrapper = document.querySelectorAll(".service-card-wrapper article");
//   cardWrapper.forEach((item) => (item.style = "box-shadow:none;cursor:auto;"));
// }

/*BURGER*/
let burger = document.querySelector(`.burger`);
let menu = document.querySelector(`.header__nav`);
let menuLinks = menu.querySelectorAll(`.nav__item`);

burger.addEventListener(`click`, function () {
  burger.classList.toggle(`burger--active`);
  menu.classList.toggle(`header__nav--active`);
  document.body.classList.toggle(`stop-scroll`);
});

menuLinks.forEach(function (el) {
  el.addEventListener(`click`, function () {
    burger.classList.remove(`burger--active`);
    menu.classList.remove(`header__nav--active`);
    document.body.classList.remove(`stop-scroll`);
  });
});

// Accordion sustain
const details = document.querySelectorAll("details[data-id]");

details.forEach((element) => {
  element.addEventListener("toggle", () => {
    sessionStorage.setItem(
      `timchenko-${element.getAttribute("data-id")}`,
      !!element.attributes.open
    );
  });

  const openState = sessionStorage.getItem(
    `timchenko-${element.getAttribute("data-id")}`
  );

  if (openState === "true") {
    element.setAttribute("open", "");
  }
});

const arrow = document.querySelector("#arrow");
const css_section = document.querySelector(".css_section");
arrow.addEventListener("click", () => {
  css_section.classList.toggle("hide");
});

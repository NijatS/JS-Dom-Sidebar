const arrow = document.querySelector(".arrow");
const hamburger = document.querySelector("section");
const hamburgerDiv = document.querySelectorAll(".mail");
const button = document.querySelector("button");
const mailSpam = document.querySelectorAll(".mail>spam");
const cssSection = document.querySelector(".css_section");
const headers = document.querySelectorAll("h5");
const messageSpans = document.querySelectorAll(" span");
const chatSpans = document.querySelectorAll(".chat span");
arrow.addEventListener("click", () => {
  hamburger.classList.toggle("changeWidth");
  arrow.classList.toggle("transform");
  if (arrow.classList[0] == "arrow")
    arrow.classList.replace("arrow", "changeBtn");
  else {
    arrow.classList.replace("changeBtn", "arrow");
  }
  cssSection.classList.toggle("hidden");
  mailSpam.forEach((element) => {
    element.classList.toggle("hide");
  });
  headers.forEach((header) => {
    header.classList.toggle("hidden");
  });
  messageSpans.forEach((span) => {
    span.classList.toggle("hide");
  });
  hamburgerDiv.forEach((element) => {
    if (element.classList[0] == "mail")
      element.classList.replace("mail", "paddingChange");
    else {
      element.classList.replace("paddingChange", "mail");
    }
  });
});

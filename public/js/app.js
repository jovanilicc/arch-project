// Hero section image change
let box = document.querySelectorAll(".box__item");
let heroImg = document.querySelector(".hero-section");
const activeBox = (e) => {
  let currentElement = e.target;
  let imageSrc = currentElement.getAttribute("data-imageSrc");
  imageSrc = "../images/" + imageSrc + ".png";

  if (currentElement.classList.contains("box__item--active")) {
    return;
  } else {
    box.forEach((element) => {
      element.classList.remove("box__item--active");
    });
    currentElement.classList.add("box__item--active");
    heroImg.style.backgroundImage = "url('" + imageSrc + "')";
  }
};

box.forEach((element) => {
  element.addEventListener("click", activeBox);
});

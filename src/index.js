function generateSuperpower(event) {
  event.preventDefault();

  new Typewriter("#superpower", {
    strings: "Generated outcome goes here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let superpowerFormElement = document.querySelector(
  "#superpower-generator-form"
);
superpowerFormElement.addEventListener("submit", generateSuperpower);

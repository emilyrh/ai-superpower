function displaySuperpower(response) {
  new Typewriter("#superpower", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateSuperpower(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "a12670296b5b7ac064111tf40b315o03";
  let prompt = `User instructions: Generate one funny yet frustrating caveat for the superpower of ${instructionsInput.value}`;
  let context =
    "You are an expert on superheroes with a creative sense of humour. Your mission is to grant the user the superpower of their choosing with one funny yet frustrating caveat, in basic HTML and separate each section with a </br>. Make sure to follow the user instructions. Please start by saying congratulations to the user on their new superpower in a <strong> element, then explain the caveat, and finally write a funny comment about how you hope they're happy with their choice.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let superpowerElement = document.querySelector("#superpower");
  superpowerElement.classList.remove("hidden");
  superpowerElement.innerHTML = `<div class="generating">Please wait while we grant you the power of ${instructionsInput.value}...</div>`;

  axios.get(apiURL).then(displaySuperpower);
}

let superpowerFormElement = document.querySelector(
  "#superpower-generator-form"
);
superpowerFormElement.addEventListener("submit", generateSuperpower);

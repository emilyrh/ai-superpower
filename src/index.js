function displaySuperpower(response) {
  console.log("outcome generated");
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
    "You are an expert on superheroes with a creative sense of humour. Your mission is to grant the user the superpower of their choosing, but generate one funny yet frustrating caveat. Use basic HTML. Make sure to follow the user instructions. Please start by saying congratulating the user on their new superpower in bold font, add a </br> before and after the part where you explain the caveat, and finally write a funny comment about how you hope they're happy with their choice.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating outcome");

  axios.get(apiURL).then(displaySuperpower);
}

let superpowerFormElement = document.querySelector(
  "#superpower-generator-form"
);
superpowerFormElement.addEventListener("submit", generateSuperpower);

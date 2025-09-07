function displayQuote(response) {
  // response.data.answer

  console.log("quote generated");

  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "990t50744fc2a02348640f8o4b9c6621";
  let prompt = `User instructions: Generate a beautiful quote about ${instructionsInput.value} in a motivational vibe`;
  let context =
    "You are a quote expert and love to write a nice quotes to inspire people. You have to generate maximum 2 lines quote. Make sure to follow the user instructions. Sign the quote with 'SheCodes AI' inside a <strong></strong> element at the end of the quote";

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating quote");
  console.log(`Prompt:${prompt}`);
  console.log(`Context:${context}`);

  // Make a call to API

  axios.get(apiURL).then(displayQuote);

  // Display the generated poem
}

let quoteFormElement = document.querySelector("#quote-generator-form");

quoteFormElement.addEventListener("submit", generateQuote);

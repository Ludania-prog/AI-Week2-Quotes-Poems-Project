function generateQuote(event) {
  event.preventDefault();

  let quoteBox = document.querySelector("#quote");

  new Typewriter("#quot", {
    strings: ["The quote will go here"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let quoteFormElement = document.querySelector("#quote-generator-form");

quoteFormElement.addEventListener("submit", generateQuote);

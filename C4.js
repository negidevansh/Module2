// Create a textarea and a button element
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

// Get references to the textarea and button
const textarea = document.querySelector("textarea");
const button = document.querySelector("button");

// Add a click event listener to the button
button.addEventListener("click", function () {
  // Get the content of the textarea and split it by line breaks
  const text = textarea.value;
  const lines = text.split("\n");

  // Convert underscore_case variables to camelCase and log them
  for (const line of lines) {
    const words = line.trim().split("_");
    const camelCase = [words[0]];

    for (let i = 1; i < words.length; i++) {
      camelCase.push(
        words[i][0].toUpperCase() + words[i].slice(1).toLowerCase()
      );
    }

    console.log(camelCase.join(""));
  }
});

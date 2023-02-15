

function wordPuzzle() {
  const word = document.getElementById("input").value;
  const vowels = ["a","e","i","o","u"];
  let puzzle = "";
  
  for (i=0; i<word.length; i++) {
    const letter = word[i];
    if (vowels.includes(letter.toLowerCase())) {
      puzzle += "-";
    } else {
      puzzle += letter;
    };
  };
  return puzzle;
}

function handleFormSubmission (event) {
  event.preventDefault();
  const string = document.getElementById("input").value;
  let wordArray = wordPuzzle(string);
  const output = document.createElement("p");
  output.textContent = wordArray;
  const div = document.getElementById("output");
  div.innerHTML = "";
  div.appendChild(output);
};

window.addEventListener("load", function() {
  document.getElementById("button").addEventListener("click",handleFormSubmission);
}); 

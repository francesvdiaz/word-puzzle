

function wordPuzzle(string) {
  const string = document.getElementById("input").value;
  const vowels = ["a","e","i","o","u"];
  let puzzle = "";
  
  for (i=0; i<=string.length; i++) {
    const letter = string[i];
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
  
  const output = document.createElement("p")
  const body = document.querySelector("body");
  const div = document.createElement("div");
  body.append(div);
  div.append(output);
  output.innerText = wordArray;

};

window.addEventListener("load", function() {
  document.getElementById("button").addEventListener("click",handleFormSubmission);
}); 

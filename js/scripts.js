

function wordPuzzle(string) {
  const words = document.getElementById("input").value;
  const vowels = ["a","e","i","o","u"];
  let puzzle = "";
  
  for (i=0; i<=w.length; i++) {
    const letter = words[i];
    if (vowels.includes(letter.toLowerCase())) {
      puzzle += "-";
    } else {
      puzzle += letter;
    };
  };
}

function handleFormSubmission (event) {
  event.preventDefault();

  const words = document.getElementById("input").value;
  const vowels = ["a","e","i","o","u"];
  const puzzle = 
  const wordArray = wordPuzzle(words);
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

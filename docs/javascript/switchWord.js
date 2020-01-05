const words = ["communication", "maintenance"];

let currentWordIndex = 0;

function switchText() {
  const elementToChange = document.getElementById("word-changer");

  let nextIndex = (++currentWordIndex) % words.length
  let word = words[nextIndex];

  elementToChange.classList.toggle("fade-out");

  setTimeout(() => {
    elementToChange.classList.toggle("fade-out");
    elementToChange.innerHTML = word;
  }, 1000);
}

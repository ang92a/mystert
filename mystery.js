const btn = document.querySelector(".btn");
const subtitle = document.querySelector(".subtitle");

var riddle = {
  question: "Висит груша нельзя скушать",
  correctAnswer: "лампочка",
  hints: ["это несъедобное", "это не фрукт"],
  tries: 3,
  checkAnswer(answer) {
    if (answer.toLowerCase().includes(this.correctAnswer)) {
      subtitle.innerHTML = `Правильно`;
    } else {
      this.tries--;
      render(this.tries, this.hints, answer);
    }
  },
};

window.onload = function () {
  document.getElementById("riddle").innerText = riddle.question;
};

function check() {
  var input = document.querySelector(".input");

  let guessedAnswer = input.value;

  if (guessedAnswer !== "") {
    riddle.checkAnswer(guessedAnswer);
    input.value = "";
  }
}

btn.addEventListener("click", check);

function render(tries, hints, answer) {
  if (tries === 2) {
    subtitle.innerHTML = `${hints[0]}`;
  }
  if (tries === 1) {
    subtitle.innerHTML = `${hints[1]}`;
  }
  if (tries === 0) {
    subtitle.innerHTML = `Игра окончена`;
  }
}

import anime from "animejs";
import confetti from "canvas-confetti";

const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");
const questionText = document.querySelector("h1");

if (window.innerWidth < 768) { // Adjust this value if needed
  document.body.innerHTML = "<h2 style='text-align:center;margin-top:50px;color:white;'>This page is only available on desktop! 🖥️</h2>";
}


const animateMove = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`,
    easing: "easeOutCirc"
  });

["mouseover", "click"].forEach(function (el) {
  noButton.addEventListener(el, function (event) {
    const top = getRandomNumber(window.innerHeight - this.offsetHeight);
    const left = getRandomNumber(window.innerWidth - this.offsetWidth);

    animateMove(this, "left", left).play();
    animateMove(this, "top", top).play();
  });
});

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};

const questions = [
  "Will you marry me? 🌹",
  "Will you be my queen? 👑",
  "هل أنت روحي ونبض قلبي؟ 💖",
  "¿Quieres casarte conmigo?🪻🌻",
  "Ты выйдешь за меня?💐",
  "你愿意嫁给我吗？🎎",
  "با من ازدواج می‌کنی؟ 🦄🌷"
];


let currentIndex = 0;


yesButton.addEventListener("click", function () {
  if (currentIndex < questions.length - 1) {
      currentIndex++;
      questionText.innerHTML = questions[currentIndex];
      confetti(); // Keep the confetti effect
  } else {
      questionText.innerHTML = "You said YES! 💍🥳🌹";
      confetti();
  }
});


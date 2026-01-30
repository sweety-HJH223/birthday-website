const cakeBtn = document.getElementById("cake-btn");
const messageBox = document.getElementById("message-box");
const typingText = document.getElementById("typing-text");
const cursor = document.getElementById("cursor");
const popSound = document.getElementById("pop-sound");
const balloonSound = document.getElementById("balloon-sound");
const balloons = document.querySelectorAll(".balloon");

balloons.forEach(balloon => {
  balloon.addEventListener("mouseenter", () => {
    balloonSound.currentTime = 0;
    balloonSound.play();
  });
});


const message =
  "Happy Birthday 정환씨 🤴🏻✨\n" +
  "Here’s to your special day and all the moments we’ll celebrate together🎉,\n" +
  "Wishing you smiles, laughter, and a little magic we share🤩,\n" +
  "I hope today reminds you of how special you are🌹\n";
  "You make my world brighter🥰"

let index = 0;
let typingInterval = null;
let isOpen = false;

cakeBtn.addEventListener("click", () => {
  if (isOpen) {
    closeMessage();
  } else {
    openMessage();
  }
});

function openMessage() {
  isOpen = true;
  messageBox.style.display = "block";
  typingText.textContent = "";
  index = 0;

  const cakeSound = document.getElementById("cake-sound");
if (cakeSound) {
  cakeSound.currentTime = 0; // reset to start
  cakeSound.play();
}

  typingInterval = setInterval(() => {
    typingText.textContent += message[index];
    index++;

   if (index >= message.length) {
  clearInterval(typingInterval);

  launchConfetti(); // 🎊 BOOM

  setTimeout(closeMessage, 4000);
}

  }, 50);
}

function closeMessage() {
  isOpen = false;
  clearInterval(typingInterval);
  messageBox.style.display = "none";
  typingText.textContent = "";
  index = 0;
}

function launchConfetti() {
  const container = document.getElementById("confetti-container");
  const colors = ["#ff5e5e", "#ffd93d", "#6bcfff", "#9d4edd", "#72efdd"];

  for (let i = 0; i < 120; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
    confetti.style.opacity = Math.random();

    container.appendChild(confetti);

    // remove after animation
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

let petalInterval = null;
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.body.classList.remove("not-loaded");
  }, 1000);

  const openGift = document.getElementById("openGift");
  const closeLetter = document.getElementById("closeLetter");
  const letter = document.getElementById("letter");
const message = document.getElementById("typewriter");
let typingStarted = false;
  if (!openGift || !closeLetter || !letter) return;

  openGift.addEventListener("click", () => { 
    startTyping();
    document.body.classList.add("revealed");
    letter.setAttribute("aria-hidden", "false");

    for (let i = 0; i < 24; i++) {
      createHeart(i);
    }

    startPetalLoop();
  });

  closeLetter.addEventListener("click", () => {
    document.body.classList.remove("revealed");
    letter.setAttribute("aria-hidden", "true");
    stopPetalLoop();
  });
});
function startTyping() {
  if (!message || typingStarted) return;

  typingStarted = true;

  const text = message.textContent.trim();
  message.textContent = "";

  let index = 0;

  const typingTimer = setInterval(() => {
    message.textContent += text[index];
    index++;

    if (index >= text.length) {
      clearInterval(typingTimer);
      message.classList.add("typing-done");
    }
  }, 45);
}
function createHeart(index) {
  const heart = document.createElement("span");

  heart.className = "floating-heart";
  heart.textContent = index % 3 === 0 ? "💗" : "♥";
  heart.style.left = `${10 + Math.random() * 80}%`;
  heart.style.animationDelay = `${Math.random() * 0.8}s`;
  heart.style.setProperty(
    "--drift",
    `${-90 + Math.random() * 180}px`
  );

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4500);
}
function startPetalLoop() {
  if (petalInterval) return;

  for (let i = 0; i < 12; i++) {
    createPetal(i);
  }

  petalInterval = setInterval(() => {
    createPetal(Math.random());
  }, 300);
}

function stopPetalLoop() {
  clearInterval(petalInterval);
  petalInterval = null;

  document
    .querySelectorAll(".falling-petal")
    .forEach((petal) => petal.remove());
}
function createPetal(index) {
  const petal = document.createElement("span");

  petal.className = "falling-petal";
  petal.style.left = `${Math.random() * 100}%`;
  petal.style.width = `${8 + Math.random() * 8}px`;
  petal.style.height = `${13 + Math.random() * 10}px`;

  petal.style.setProperty(
    "--duration",
    `${5 + Math.random() * 4}s`
  );

  petal.style.setProperty(
    "--delay",
    `${Math.random() * 1.5}s`
  );

  petal.style.setProperty(
    "--drift",
    `${-160 + Math.random() * 320}px`
  );

  petal.style.background =
    index % 2 === 0
      ? "linear-gradient(135deg, #ffb6d5, #e86b9d)"
      : "linear-gradient(135deg, #e1d5ff, #9a7ce8)";

  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 10000);
}

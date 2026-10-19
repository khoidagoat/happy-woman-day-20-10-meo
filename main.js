document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.body.classList.remove("not-loaded");
  }, 1000);

  const openGift = document.getElementById("openGift");
  const closeLetter = document.getElementById("closeLetter");
  const letter = document.getElementById("letter");

  if (!openGift || !closeLetter || !letter) return;

  openGift.addEventListener("click", () => {
    document.body.classList.add("revealed");
    letter.setAttribute("aria-hidden", "false");

    for (let i = 0; i < 24; i++) {
      createHeart(i);
    }
  });

  closeLetter.addEventListener("click", () => {
    document.body.classList.remove("revealed");
    letter.setAttribute("aria-hidden", "true");
  });
});

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

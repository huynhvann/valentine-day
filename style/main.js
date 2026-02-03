/* ================= BACKGROUND EFFECT ================= */
setInterval(() => {
  const span = document.createElement("span");
  span.innerText = ["💗", "💖", "✨", "🌸"][Math.floor(Math.random() * 4)];
  span.style.left = Math.random() * 100 + "vw";
  span.style.fontSize = Math.random() * 12 + 16 + "px";
  document.getElementById("effect").appendChild(span);

  setTimeout(() => span.remove(), 7000);
}, 900);

/* ================= MUSIC ================= */
const bgMusic = document.getElementById("bgMusic");
bgMusic.volume = 0.6;
bgMusic.play().catch(() => {});

/* ================= HANDWRITING ================= */
const letter = document.getElementById("letter");
const text = `Gửi người anh thương 💌

Cảm ơn em vì đã xuất hiện,
làm cho thế giới của anh
trở nên dịu dàng hơn mỗi ngày.

Valentine này,
chỉ mong em luôn mỉm cười
và ở bên anh thật lâu nhé 💖`;

let index = 0;
function typeWriter() {
  if (index < text.length) {
    letter.innerHTML += text[index] === "\n" ? "<br>" : text[index];
    index++;
    setTimeout(typeWriter, 40);
  }
}
typeWriter();

/* ================= GIFT ================= */
const gift = document.getElementById("gift");
const surprise = document.getElementById("surprise");

gift.addEventListener("click", () => {
  gift.classList.add("opened");

  setTimeout(() => {
    surprise.style.display = "block";

    for (let i = 0; i < 25; i++) {
      const heart = document.createElement("span");
      heart.innerText = "💖";
      heart.style.position = "fixed";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.top = Math.random() * 100 + "vh";
      heart.style.fontSize = Math.random() * 14 + 18 + "px";
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 2000);
    }
  }, 400);
});

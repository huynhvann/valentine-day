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
const openBtn = document.getElementById("openGiftBtn");
const text = `Gửi người anh yêu 💌

Đây là Valentine đầu tiên của chúng ta.
Cảm ơn em vì đã bước vào cuộc đời anh,
làm cho mọi điều quanh anh
trở nên dịu dàng hơn mỗi ngày.

Valentine này,
anh chỉ mong em luôn mỉm cười,
và nếu có thể…
hãy ở bên anh thật lâu nhé 💗

Như khi playlist bắt đầu bằng I Love You của Bùi Công Nam:
“Đổi ngàn lời bằng câu nói I love you, I love you
Vọng ra thế giới, I love you, I love you” —
anh chọn nói lời yêu bằng âm nhạc,
vì có những cảm xúc
chẳng cần nói quá nhiều
vẫn đủ chạm đến tim.

Và khi playlist khép lại bằng Die With A Smile
của Lady Gaga & Bruno Mars,
anh nghe vang lên một câu rất khẽ:
“If the world was ending, I'd wanna be next to you.”

Khoảnh khắc ấy,
anh chợt nhận ra…
ngày mai có ra sao cũng không quan trọng,
bởi điều anh mong muốn nhất
chỉ là được ở cạnh em
trong từng khoảnh khắc của hiện tại này.

Và sau tất cả,
anh cũng chẳng biết nói gì hơn ngoài câu:

Anh yêu em, Ngọc Mai à!`;

let index = 0;

function typeWriter() {
  if (index < text.length) {
    letter.innerHTML += text[index] === "\n" ? "<br>" : text[index];
    index++;
    setTimeout(typeWriter, 40);
  } else {
    openBtn.style.display = "inline-block";
  }
}
typeWriter();
/* POPUP */
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

openBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

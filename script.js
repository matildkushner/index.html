// ⬇️ Commented out to preview form every day
// const today = new Date().getDay(); // 2 = Tuesday
// if (today !== 2) {
//   document.body.innerHTML = "<div style='text-align:center; margin-top:50px;'>this form only appears on tuesdays 🌿</div>";
// }

// 👇 Falling emoji animation
const emojiList = ["🦋", "✨", "❤️", "🧁", "🍒"];

function createEmoji() {
  const emoji = document.createElement("div");
  emoji.className = "falling-emoji";
  emoji.textContent = emojiList[Math.floor(Math.random() * emojiList.length)];
  emoji.style.left = `${Math.random() * 100}%`;
  emoji.style.animationDuration = `${3 + Math.random() * 5}s`;
  document.body.appendChild(emoji);

  setTimeout(() => emoji.remove(), 8000);
}

setInterval(createEmoji, 300);

// 👇 Style emoji fall via JS injection
const style = document.createElement("style");
style.textContent = `
  body {
    background: white;
  }

  .falling-emoji {
    position: fixed;
    top: -2em;
    font-size: 1.5rem;
    z-index: 9999;
    animation-name: fall;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }

  @keyframes fall {
    0% { top: -2em; opacity: 1; }
    100% { top: 110vh; opacity: 0; }
  }
`;
document.head.appendChild(style);

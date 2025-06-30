// Temporarily show form every day for testing
// Comment this out when you're ready to go live
// const today = new Date().getDay(); 
// if (today !== 2) {
//   document.body.innerHTML = "<div style='text-align:center; margin-top:50px;'>this form only appears on tuesdays 🌿</div>";
// }

// One-step-at-a-time logic
function nextStep() {
  const active = document.querySelector('.step.active');
  const next = active.nextElementSibling;
  if (next) {
    active.classList.remove('active');
    next.classList.add('active');
  }
}

document.getElementById('intentions-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("intentions saved 🍓"); // Replace with save logic if needed
});

// Falling emoji logic
const emojis = ["🦋", "✨", "❤️", "🧁", "🍒"];
function createEmoji(containerId) {
  const emoji = document.createElement("div");
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.position = "absolute";
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.fontSize = "1.5rem";
  emoji.style.top = "-2rem";
  emoji.style.animation = `fall ${4 + Math.random() * 5}s linear infinite`;
  document.getElementById(containerId).appendChild(emoji);
  setTimeout(() => emoji.remove(), 10000);
}

setInterval(() => {
  createEmoji("emoji-container-back");
  createEmoji("emoji-container-front");
}, 600);

const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes fall {
  to {
    transform: translateY(100vh);
    opacity: 0.4;
  }
}
`;
document.head.appendChild(styleSheet);

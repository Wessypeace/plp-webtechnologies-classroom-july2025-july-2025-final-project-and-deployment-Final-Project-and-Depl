// Simple interactive features for GiggleGalaxy
const jokes = [
  "Why did the teddy bear say no to dessert? Because it was stuffed!",
  "Why don't aliens eat clowns? Because they taste funny!",
  "What do you call a sleeping bull? A bulldozer!",
];

const facts = [
  "A group of flamingos is called a flamboyance.",
  "Honey never spoils — archaeologists have found edible honey in ancient tombs.",
  "Space is completely silent because there is no atmosphere to carry sound.",
];

// Audio state (persisted)
let audioMuted = localStorage.getItem("gg_audio_muted") === "true";

// Math mini-game
function newMathQuestion() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  document.getElementById("numA").textContent = a;
  document.getElementById("numB").textContent = b;
  document.getElementById("mathAnswer").value = "";
  document.getElementById("mathResult").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
  // wire audio toggle
  const audioToggle = document.getElementById("audioToggle");
  if (audioToggle) {
    audioToggle.setAttribute("aria-pressed", audioMuted ? "true" : "false");
    audioToggle.textContent = audioMuted ? "🔇" : "🔊";
    audioToggle.addEventListener("click", () => {
      audioMuted = !audioMuted;
      localStorage.setItem("gg_audio_muted", audioMuted ? "true" : "false");
      audioToggle.setAttribute("aria-pressed", audioMuted ? "true" : "false");
      audioToggle.textContent = audioMuted ? "🔇" : "🔊";
      if (typeof window.showToast === "function") {
        window.showToast(audioMuted ? "Audio muted" : "Audio unmuted");
      }
    });
  }

  // Math
  newMathQuestion();
  document.getElementById("checkMath").addEventListener("click", () => {
    const a = Number(document.getElementById("numA").textContent);
    const b = Number(document.getElementById("numB").textContent);
    const answer = Number(document.getElementById("mathAnswer").value);
    const result = document.getElementById("mathResult");
    if (answer === a + b) {
      result.textContent = "Great job! 🎉";
      if (!audioMuted) playTone(880, 0.12, 0.02); // positive tone
      if (typeof window.showToast === "function")
        window.showToast("Correct! 🎉");
    } else {
      result.textContent = "Try again! It's " + (a + b) + ".";
      if (!audioMuted) playTone(220, 0.18, 0.02); // negative tone
      if (typeof window.showToast === "function")
        window.showToast("Incorrect — try again");
    }
  });

  // Jokes
  document.getElementById("tellJoke").addEventListener("click", () => {
    const j = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById("jokeText").textContent = j;
  });

  // Facts
  document.getElementById("newFact").addEventListener("click", () => {
    const f = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("factText").textContent = f;
  });

  // Story narration stub — play a beep or short sound (user can replace with real audio)
  document.getElementById("playStory").addEventListener("click", () => {
    const audio = document.getElementById("storyAudio");
    if (audio.src) {
      audio.play();
    } else {
      // fallback: show a short message
      alert("Narration not added yet. You can add an MP3 to the <audio> tag.");
    }
  });

  // Simple drawing canvas
  const canvas = document.getElementById("drawCanvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let drawing = false;
    function start(e) {
      drawing = true;
      ctx.beginPath();
      ctx.moveTo(e.offsetX, e.offsetY);
    }
    function draw(e) {
      if (!drawing) return;
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.strokeStyle = "#ff6a88";
      ctx.lineWidth = 4;
      ctx.lineCap = "round";
      ctx.stroke();
    }
    function stop() {
      drawing = false;
    }
    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stop);
    canvas.addEventListener("mouseleave", stop);
    document.getElementById("clearCanvas").addEventListener("click", () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
  }
});

// tiny Web Audio helper (no external files) to play short tones
function playTone(freq = 440, duration = 0.12, attack = 0.01) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.value = freq;
    g.gain.setValueAtTime(0, ctx.currentTime);
    g.gain.linearRampToValueAtTime(0.15, ctx.currentTime + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
    o.connect(g);
    g.connect(ctx.destination);
    o.start();
    o.stop(ctx.currentTime + duration + 0.02);
    // close context shortly after to free resources
    setTimeout(() => ctx.close(), (duration + 0.1) * 1000);
  } catch (e) {
    // Web Audio may be blocked on some browsers — ignore silently
    console.warn("Audio not available", e);
  }
}

const predictions = {
  1: ["A new adventure is waiting for you!", "✨ Trust your path, it's magical."],
  2: ["You are a light to those around you.", "🌟 Peace follows your decisions."],
  3: ["Exciting news is coming your way!", "💖 Spread joy and it will return."],
  4: ["Hard work will pay off very soon!", "🌼 You’re growing into greatness."],
  5: ["Your laughter heals others.", "🍀 Your luck is just beginning."],
  6: ["Your love makes the world better.", "✨ You have the magic touch."],
  7: ["Your insight will guide someone.", "🔮 You're a wise soul."],
  8: ["Great success lies ahead!", "🏆 Keep going—you’re unstoppable."],
  9: ["A beautiful change is near.", "🌈 Shine brighter than ever."],
  10: ["Today is your lucky star day!", "💫 You were made for dreams."]
};

function revealPrediction() {
  const num = parseInt(document.getElementById('userNumber').value);
  const resultDiv = document.getElementById('result');
  const chime = document.getElementById('chime');

  if (num >= 1 && num <= 10) {
    const [fortune, message] = predictions[num];
    resultDiv.innerHTML = `<strong>📜 ${fortune}</strong><br><br><em>💖 ${message}</em>`;

    // Play sound
    chime.currentTime = 0;
    chime.play();

    // Speak the message
    const utterance = new SpeechSynthesisUtterance(`${fortune}. ${message}`);
    utterance.pitch = 1.4;
    utterance.rate = 1.0;
    utterance.lang = 'en-US';

    // Use a sweet female voice if available
    const voices = window.speechSynthesis.getVoices();
    const sweetVoice = voices.find(v =>
      v.name.includes("Google UK English Female") ||
      v.name.toLowerCase().includes("female") ||
      v.name.toLowerCase().includes("samantha")
    );

    if (sweetVoice) {
      utterance.voice = sweetVoice;
    }

    window.speechSynthesis.speak(utterance);
  } else {
    resultDiv.innerHTML = "❗ Please enter a number between 1 and 10.";
  }
}

// In case voices aren’t loaded yet
window.speechSynthesis.onvoiceschanged = () => {
  // Nothing needed here since we call getVoices() again on button click
};

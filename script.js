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
  10:["Today is your lucky star day!", "💫 You were made for dreams."]
};

function revealPrediction() {
  const num = parseInt(document.getElementById('userNumber').value);
  const resultDiv = document.getElementById('result');
  const chime = document.getElementById('chime');

  if (num >= 1 && num <= 10) {
    const [fortune, message] = predictions[num];
    resultDiv.innerHTML = `<strong>📜 ${fortune}</strong><br><br><em>💖 ${message}</em>`;
    chime.currentTime = 0;
    chime.play();

    const speech = new SpeechSynthesisUtterance(`${fortune}. ${message}`);
    speech.pitch = 1.6;
    speech.rate = 0.9;
    speech.lang = 'en-US';

    const voices = window.speechSynthesis.getVoices();
    const sweetVoice = voices.find(v =>
      v.name.includes("Google UK English Female") ||
      v.name.toLowerCase().includes("female") ||
      v.name.toLowerCase().includes(" ​:contentReference[oaicite:0]{index=0}​

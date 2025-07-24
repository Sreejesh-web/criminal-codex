document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ DOMContentLoaded fired");

  const gameContainer = document.getElementById("game");
  gameContainer.style.display = "block";
  gameContainer.innerHTML = "✅ game.js is working!";

  // 🔊 Function to play sound
  function playSound(src) {
    if (typeof src !== "string" || !src.endsWith(".mp3")) {
      console.error("Invalid sound source:", src);
      return;
    }
    const sound = new Audio(src);
    sound.play().catch(err => console.warn("🔇 Audio play failed:", err));
  }

  // 🧠 Game state to remember which scene we’re on
  let currentScene = 0;

  const bgm = new Audio("bgm.mp3");
  bgm.loop = true;
  bgm.volume = 0.5;

  // 📜 Show message and wait for Next click
  function showMessage(text, soundSrc = null, nextScene) {
    gameContainer.innerHTML = `
      <div style="color: white; padding: 20px; font-size: 1.5em;">${text}</div>
      <button style="padding: 10px 20px; font-size: 1em; margin-top: 20px;">Next</button>
    `;

    document.querySelector("button").onclick = () => {
      if (!window.bgmStarted) {
        bgm.play().catch(err => console.warn("🔇 BGM play blocked:", err));
        window.bgmStarted = true;
      }

      if (soundSrc) {
        playSound(soundSrc); // ✅ only after user clicks
      }

      nextScene(); // ➡️ move to next scene
    };
  }

  // 🎬 Scenes
  function scene1() {
    gameContainer.style.backgroundColor = "black";
    showMessage("You hear footsteps in the dark alley...", "footsteps.mp3", scene2);
  }

  function scene2() {
    showMessage("A whisper behind you says, 'You shouldn't be here...'", "whisper.mp3", scene3);
  }

  function scene3() {
    showMessage("Your phone buzzes. A message: 'RUN'", "phone.mp3", scene4);
  }

  function scene4() {
    showMessage("To be continued...", null, () => {
      gameContainer.innerHTML = "<h1 style='color: white;'>Thank you for playing!</h1>";
    });
  }

  // ▶️ Start
  scene1();
});
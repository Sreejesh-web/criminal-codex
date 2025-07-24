document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ DOMContentLoaded fired");

  const gameContainer = document.getElementById("game");
  gameContainer.style.display = "block";

  // Show start screen
  gameContainer.innerHTML = `
    <div style="color: white; padding: 20px; font-size: 1.5em;">🎮 Welcome to the Crime Game</div>
    <button id="startBtn" style="padding: 10px 20px; font-size: 1em;">Start Game</button>
  `;

  document.getElementById("startBtn").addEventListener("click", () => {
    startGame();
  });

  function startGame() {
    const bgm = new Audio("bgm.mp3");
    bgm.loop = true;
    bgm.volume = 0.5;
    bgm.play().catch(err => console.warn("🔇 BGM play blocked:", err));
    window.bgmStarted = true;

    function playSound(src) {
      if (typeof src !== "string" || !src.endsWith(".mp3")) {
        console.error("Invalid sound source:", src);
        return;
      }
      const sound = new Audio(src);
      sound.play().catch(err => console.warn("🔇 Audio play failed:", err));
    }

    function showMessage(text, soundSrc = null, nextScene) {
      gameContainer.innerHTML = `
        <div style="color: white; padding: 20px; font-size: 1.5em;">${text}</div>
        <button style="padding: 10px 20px; font-size: 1em; margin-top: 20px;">Next</button>
      `;

      document.querySelector("button").onclick = () => {
        if (soundSrc) {
          playSound(soundSrc);
        }
        nextScene();
      };
    }

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

    scene1();
  }
});
document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ DOMContentLoaded fired");

  const gameContainer = document.getElementById("game");
  gameContainer.style.display = "block";
  gameContainer.innerHTML = "✅ game.js is working!";

  const bgm = new Audio("bgm.mp3");
  bgm.loop = true;
  bgm.volume = 0.5;
  bgm.play().catch(err => console.warn("🔇 BGM play blocked:", err));

  function playSound(src) {
    if (typeof src !== "string" || !src.endsWith(".mp3")) {
      console.error("Invalid sound source:", src);
      return;
    }
    const sound = new Audio(src);
    sound.play().catch(err => console.warn("🔇 Audio play failed:", err));
  }

  function showMessage(text, callback) {
  gameContainer.innerHTML = `
    <div style="color: white; padding: 20px; font-size: 1.5em;">${text}</div>
    <button style="padding: 10px 20px; font-size: 1em; margin-top: 20px;">Next</button>
  `;

  document.querySelector("button").onclick = () => {
    // ✅ Start BGM after the first click
    if (!window.bgmStarted) {
      const bgm = new Audio("bgm.mp3");
      bgm.loop = true;
      bgm.volume = 0.5;
      bgm.play().catch(err => console.warn("🔇 BGM play blocked:", err));
      window.bgmStarted = true;
    }

    // Continue the story
    callback();
  };
}

  function scene1() {
    gameContainer.style.backgroundColor = "black";
    playSound("footsteps.mp3");
    showMessage("You hear footsteps in the dark alley...", scene2);
  }

  function scene2() {
    playSound("whisper.mp3");
    showMessage("A whisper behind you says, 'You shouldn't be here...'", scene3);
  }

  function scene3() {
    playSound("phone.mp3");
    showMessage("Your phone buzzes. A message: 'RUN'", scene4);
  }

  function scene4() {
    showMessage("To be continued...", () => {
      gameContainer.innerHTML = "<h1 style='color: white;'>Thank you for playing!</h1>";
    });
  }

  scene1();
});
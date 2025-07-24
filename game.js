document.addEventListener("DOMContentLoaded", () => {
  const gameContainer = document.getElementById("game");
  gameContainer.style.display = "block";

  function playSound(src) {
    const sound = new Audio(src);
    sound.play().catch(err => console.warn("🔇 Audio play failed:", err));
  }

  function showMessage(text, callback) {
    gameContainer.innerHTML = `
      <div style="color: white; padding: 20px; font-size: 1.5em;">${text}</div>
      <button style="padding: 10px 20px; font-size: 1em; margin-top: 20px;">Next</button>
    `;

    document.querySelector("button").onclick = () => {
      // ✅ Play BGM on first user interaction
      if (!window.bgmStarted) {
        const bgm = new Audio("bgm.mp3");
        bgm.loop = true;
        bgm.volume = 0.5;
        bgm.play().catch(err => console.warn("🔇 BGM play blocked:", err));
        window.bgmStarted = true;
      }

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

  // Start only visual content first. Audio starts on first click.
  showMessage("Click to begin your journey...", scene1);
});
window.onload = () => {
  const game = document.getElementById("game");
  game.innerHTML = `
    <div style="text-align:center;">
      <h1>Criminal Codex</h1>
      <img src="masked.png" style="width:90vw; max-height:70vh; object-fit:contain;" />
      <p>You hear footsteps in the alley... A masked figure approaches.</p>
      <audio id="bgm" autoplay loop>
        <source src="bgm.mp3" type="audio/mpeg">
      </audio>
      <button onclick="nextScene()" style="font-size:1.2rem;padding:10px;margin-top:10px;">Continue</button>
    </div>
  `;
};

function nextScene() {
  const game = document.getElementById("game");
  game.innerHTML = `
    <div style="text-align:center;">
      <p>The figure stops. You hear a whisper: "You're late."</p>
      <audio autoplay>
        <source src="whisper.mp3" type="audio/mpeg">
      </audio>
    </div>
  `;
}

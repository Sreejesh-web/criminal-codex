
window.addEventListener('load', () => {
  const gameDiv = document.getElementById('game');
  gameDiv.innerHTML = \`
    <h1 style="color: white; font-family: monospace; text-align: center;">Criminal Codex</h1>
    <img src="masked.png" alt="Masked Character" style="width: 80%; max-width: 400px; display: block; margin: 20px auto;">
    <p style="color: white; text-align: center; font-size: 18px;">
      You receive an anonymous call. A voice whispers, "They're watching you..."
    </p>
    <button onclick="startGame()" style="
      display: block;
      margin: 30px auto;
      padding: 10px 20px;
      font-size: 18px;
      background: crimson;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    ">Start Investigation</button>
  \`;

  // Load and play background music
  const bgm = new Audio('bgm.mp3');
  bgm.loop = true;
  bgm.volume = 0.5;
  bgm.play();
});

function startGame() {
  const gameDiv = document.getElementById('game');
  gameDiv.innerHTML = \`
    <p style="color: white; text-align: center;">Footsteps echo behind you... do you run or turn back?</p>
    <div style="display: flex; justify-content: center; gap: 20px; margin-top: 20px;">
      <button onclick="runAway()" style="padding: 10px 20px;">Run</button>
      <button onclick="turnBack()" style="padding: 10px 20px;">Turn Back</button>
    </div>
  \`;

  const footsteps = new Audio('footsteps.mp3');
  footsteps.play();
}

function runAway() {
  document.getElementById('game').innerHTML = \`
    <p style="color: white; text-align: center;">You run into the darkness... but someone is already waiting there.</p>
  \`;
}

function turnBack() {
  const whisper = new Audio('whisper.mp3');
  whisper.play();
  document.getElementById('game').innerHTML = \`
    <p style="color: white; text-align: center;">You turn around — a masked figure stands in silence. The game begins.</p>
  \`;
}

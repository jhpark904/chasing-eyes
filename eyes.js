const balls = document.getElementsByClassName("ball");
const colors = ["red", "blue", "green", "skyblue", "lime", "black", "brown", "yellow"];

document.onmousemove = () => {
  var x = (event.clientX * 100) / window.innerWidth + "%";
  var y = (event.clientY * 100) / window.innerHeight + "%";

  // make eyeballs to track the mouse
  for (let i = 0; i < balls.length; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transfoorm = "translate(-" + x + ",-" + y + ")";
  }
};

document.onclick = () => {
    // get random color for the background
    let idx = getRandom(colors.length);
    document.getElementById("background").style.backgroundColor = colors[idx];

    // get random color for eyes
    idx = getRandom(colors.length);
    for (let i = 0; i < balls.length; i++) {
      balls[i].style.background = colors[idx];
  }
}

function getRandom(i) {
  return Math.floor(Math.random() * i);
}
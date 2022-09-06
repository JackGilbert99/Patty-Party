let pattyTotal = document.getElementById("click-Patty");
let autoPatty = document.getElementById("autoPattyCount");
let Ovened = document.getElementById("Ovened");
let doubleCount = document.getElementById("DoubleCount");
let spatulaCount = document.getElementById("SpatulaCount");

let pattys = 0;
let cost = 5;
let PattyPerSecond = 0;
let autoPattyAmount = 0;
let OvenedCount = 0
let doubleAmount = 0
let spatulaAmount = 0

let double = 0;

let spatula = 0;

let oven = 0;


document.getElementById("double").onclick = function () {
  if (pattys >= 10) {
    double = 1;
    pattys -= 10
    doubleAmount++;
    doubleCount.innerHTML = `Triple: ${doubleAmount}`;
  }
}

document.getElementById("spatula").onclick = function () {
  if (pattys >= 20) {
    spatula = 1;
    pattys -= 10
    spatulaAmount++;
    spatulaCount.innerHTML = `Spatula: ${spatulaAmount}`;
  }
}




document.getElementById("patty-btn").onclick = function () {
  if (double == 1) {
    pattys += 2;
    pattyTotal.innerHTML = `Pattys: ${pattys}`;
  }
  if (spatula == 1) {
    pattys += 10
    pattyTotal.innerHTML = `Pattys: ${pattys}`;
  } else {
    pattys += 1;
    pattyTotal.innerHTML = `Pattys: ${pattys}`;
  }
}

document.getElementById("auto-btn").onclick = function () {
  if (pattys >= 5) {
    pattys -= 5;
    PattyPerSecond += 1;
    autoPattyAmount += 1;
  }
};

function autoClicker() {
  pattys += PattyPerSecond
  pattyTotal.innerHTML = `Pattys: ${pattys}`;
  autoPatty.innerHTML = `AutoPattys: ${autoPattyAmount}`
}

setInterval(function () {
  autoClicker();

}, 500);

document.getElementById("oven").onclick = function () {
  if (oven == 0) {
    if (pattys >= 100) {
      pattys -= 100;
      pattys += 300;
      oven = 1;
      OvenedCount++;
      Ovened.innerHTML = `Oven: ${OvenedCount}`;

    }
  }

}

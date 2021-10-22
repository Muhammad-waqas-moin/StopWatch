// var min = 0;
// var sec = 0;
// var msec = 0;
// var minHeading = document.getElementById("min");
// var secHeading = document.getElementById("sec");
// var msecHeading = document.getElementById("msec");
// var interval = "";

// function timer() {
//   msec++;
//   msecHeading.innerHTML = msec;
//   if (msec >= 100) {
//     sec++;
//     secHeading.innerHTML = sec;
//     msec = 0;
//   } else if (sec >= 9) {
//     min++;
//     minHeading.innerHTML = min;
//     sec = 0;
//   }
// }
// function start() {
//   document.getElementById("start").disabled = true;
//   interval = setInterval(timer, 10);
// }
// function stop() {
//   clearInterval(interval);
// }
// function reset() {
//   document.getElementById("start").disabled = false;

//   clearInterval(interval);
//   min = 0;
//   sec = 0;
//   msec = 0;
//   minHeading.innerHTML = min;
//   secHeading.innerHTML = sec;
//   msecHeading.innerHTML = msec;
// }

// console.log("runs");

let msec = 0;
let sec = 0;
let min = 0;
let minute = document.querySelector("#min");
let secend = document.querySelector("#sec");
let milli_secend = document.querySelector("#milisec");
// let i = 1;
let myinterval;
document.querySelector("#btn_stop").disabled = true;
document.querySelector("#btn_reset").disabled = true;
function start() {
  myinterval = setInterval(myTimerFunction, 10);
  document.querySelector("#btn_start").disabled = true;
  document.querySelector("#btn_stop").disabled = false;
  document.querySelector("#btn_reset").disabled = false;
}
function stop() {
  console.log("stop button clciked");
  clearInterval(myinterval);
  document.querySelector("#btn_stop").disabled = true;
  document.querySelector("#btn_start").disabled = false;
}
function reset() {
  // console.log("reset  button clciked");
  clearInterval(myinterval);
  min = 0;
  msec = 0;
  sec = 0;
  minute.textContent = `${min}:`;
  secend.textContent = `${sec}:`;
  milli_secend.textContent = `${msec}`;
  document.querySelector("#btn_start").disabled = false;
  document.querySelector("#btn_stop").disabled = true;
  document.querySelector("#btn_reset").disabled = true;
}
const myTimerFunction = () => {
  msec++;
  milli_secend.textContent = msec;
  // console.log(msec++);
  if (msec >= 100) {
    sec++;
    secend.textContent = `${sec}:`;
    msec = 0;
  } else if (sec >= 3) {
    min++;
    minute.textContent = `${min}:`;
    sec = 0;
  }
};

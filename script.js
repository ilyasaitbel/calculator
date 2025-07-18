let x = prompt("degree")
if (x==1) {
let screen = document.getElementById("screen");
function press(val) {
  screen.value += val;
}
function calculate() {
  try {
    screen.value = eval(screen.value);
  } catch {
    screen.value = "error";
  }
}
function clearScreen() {
  screen.value = "";
}
}
else {
    document.write(" hhhh your password is not correct")
}
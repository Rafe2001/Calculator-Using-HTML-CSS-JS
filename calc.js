const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");

buttons.forEach(button => {
  button.addEventListener("click", function() {
    let value = this.value;
    if (value === "=") {
      display.value = eval(display.value);
    } else if (value === "C") {
      display.value = "";
    } else {
      display.value += value;
    }
  });
});

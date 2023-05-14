const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.id === "clear") {
      display.innerText = "";

      
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1); // remove last character
    } else if (display.innerText !== "" && btn.id === "equal") {
      display.innerText = eval(display.innerText); // evaluate the expression
    } else if (display.innerText === "" && btn.id === "equal") {
      display.innerText = "ERROR";
      setTimeout(() => {
        display.innerText = "";
      }, 2000);
    } else {
      display.innerText += btn.id;
    }
  });
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};

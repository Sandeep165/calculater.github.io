var screen = document.getElementById("screen");
var buttons = document.querySelectorAll("button");
var screenValue = " ";
for (var i of buttons) {
  i.addEventListener("click", (e) => {
    var btnText = e.target.innerText;
    //console.log("btn text is :", btnText);

    if (btnText == "C") {
        screenValue = " "
      screen.value = screenValue
    } else if (btnText == "X") {
      btnText = "*";
      screenValue += btnText;
      screen.value = screenValue;
    } else if (btnText == "=") {
      screen.value = eval(screenValue);
    } else {
      screenValue += btnText;
      screen.value = screenValue;
    }
  });
}

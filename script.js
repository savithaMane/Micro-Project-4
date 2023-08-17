let outputScreen = document.getElementById("input");

let buttons = Array.from(document.querySelectorAll(".buttons button"));

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
        let txt = e.target.innerText;
        if (txt === "DEL") {
          outputScreen.value = outputScreen.value.slice(0, -1);
        }else if (txt === "RESET") {
          outputScreen.value = "";
        } else if (txt === "=") {
            try{
                let expression = outputScreen.value.replace(/x/g, '*'); 
                outputScreen.value = eval(expression);
            }catch{
                outputScreen.value =""
            }
        } else {
          outputScreen.value += txt;
        }
  });
});

const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, index) => {

    code.addEventListener("input", (e) => {

        code.value = e.target.value.replace(/[^0-9]/g, "");

        if (code.value !== "" && index < codes.length - 1) {
            codes[index + 1].focus();
        }

    });

    code.addEventListener("keydown", (e) => {

        if (e.key === "Backspace") {

            if (code.value === "" && index > 0) {
                codes[index - 1].value = "";
                codes[index - 1].focus();
            } else {
                code.value = "";
            }

        }

    });

});//your JS code here. If required.

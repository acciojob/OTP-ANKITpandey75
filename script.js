const codes = document.querySelectorAll(".code");

// Focus first input
codes[0].focus();

codes.forEach((code, index) => {

    code.addEventListener("input", (e) => {

        // Only one digit
        code.value = e.target.value.slice(-1);

        // Move to next input
        if (code.value && index < codes.length - 1) {
            codes[index + 1].focus();
        }

    });

    code.addEventListener("keydown", (e) => {

        if (e.key === "Backspace") {

            code.value = "";

            if (index > 0) {
                codes[index - 1].focus();
            }
        }

    });

});
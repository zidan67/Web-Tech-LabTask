    function press(value) {
        document.getElementById("display").value += value;
    }

    function calculate() {
        try {
            document.getElementById("display").value =
                eval(document.getElementById("display").value);
        } catch {
            alert("Invalid Input");
        }
    }

    function clearDisplay() {
        document.getElementById("display").value = "";
    }
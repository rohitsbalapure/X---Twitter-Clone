
const user = "rohitbalapure";
    const pass = "rohit123";

    function validateform() {

        var id = document.getElementById("userID").value;
        var pas = document.getElementById("userPass").value;

        if (id == user && pas == pass) {

            window.open("index.html");
        }
        else {
            alert("Incorrect Credentials");
        }
    }

